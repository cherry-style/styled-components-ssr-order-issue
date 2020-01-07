import React from 'react';
import styled from 'styled-components';

import { NavigationBar } from '../components/NavigationBar';
import { StyledButton } from '../components/StyledButton';

const AnchorButtonPage = () => (
  <>
    <NavigationBar />
    <Container>
      <StyledButton color="yellow" useAnchorTag={true}>
        Yellow AnchorButton
      </StyledButton>
    </Container>
  </>
);

export default AnchorButtonPage;

const Container = styled.div`
  display: flex;
`;
