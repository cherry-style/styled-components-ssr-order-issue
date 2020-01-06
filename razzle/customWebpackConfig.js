const path = require('path');

const LoadableWebpackPlugin = require('@loadable/webpack-plugin');

module.exports = (config, { target, dev }, webpack) => {
  const appConfig = { ...config };

  // if (target === 'web') {
  //   appConfig.optimization = {
  //     ...appConfig.optimization,
  //     runtimeChunk: true,
  //     splitChunks: {
  //       chunks: 'all',
  //       name: dev,
  //     },
  //   };
  // }

  appConfig.plugins.push(new LoadableWebpackPlugin());

  return appConfig;
};
