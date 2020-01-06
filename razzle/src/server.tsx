import { ChunkExtractor } from '@loadable/server';
import express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { ServerStyleSheet } from 'styled-components';

import App from './App';

const assets = require((process.env as any).RAZZLE_ASSETS_MANIFEST);

const server = express();
server
  .disable('x-powered-by')
  .use(express.static((process.env as any).RAZZLE_PUBLIC_DIR))
  .get('/*', (req, res) => {
    const statsFile = path.resolve('./build/loadable-stats.json');
    const extractor = new ChunkExtractor({ statsFile });

    const sheet = new ServerStyleSheet();

    let markup;
    let scStyleTags;
    const context = {};
    try {
      const appJSX = extractor.collectChunks(sheet.collectStyles(<App />));
      markup = renderToString(
        <StaticRouter context={context} location={req.url}>
          {appJSX}
        </StaticRouter>
      );

      scStyleTags = sheet.getStyleTags();
    } catch (error) {
      // handle error
      console.error(error);
    } finally {
      sheet.seal();
    }

    if ((context as any).url) {
      res.redirect((context as any).url);
    } else {
      res.status(200).send(
        `<!doctype html>
    <html lang="">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charset="utf-8" />
        <title>Welcome to Razzle</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${assets.client.css ? `<link rel="stylesheet" href="${assets.client.css}">` : ''}
        ${
          process.env.NODE_ENV === 'production'
            ? `<script src="${assets.client.js}" defer></script>`
            : `<script src="${assets.client.js}" defer crossorigin></script>`
        }
        ${extractor.getLinkTags()}
        ${extractor.getStyleTags()}
        ${scStyleTags}
    </head>
    <body>
        <div id="root">${markup}</div>
        ${extractor.getScriptTags()}
    </body>
</html>`
      );
    }
  });

export default server;
