import loadable from '@loadable/component';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

import BasicButtonPage from './BasicButtonPage';
import { NavigationBar } from './NavigationBar';

const AnchorButtonPage = loadable(() => import(/* webpackChunkName: "AnchorButtonPage" */ './AnchorButtonPage'));

const GlobalStyles = createGlobalStyle`
  html, body, #root {
    height: 100%;
  }
`;

const App = () => (
  <>
    <GlobalStyles />
    <NavigationBar />
    <PageContainer>
      <Switch>
        <Route exact path="/" component={BasicButtonPage} />
        <Route path="/anchor-button-page" component={AnchorButtonPage} />
      </Switch>
    </PageContainer>
  </>
);

export default App;

const PageContainer = styled.div`
  display: flex;
`;
