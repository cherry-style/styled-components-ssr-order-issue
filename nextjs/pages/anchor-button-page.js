import React from 'react';
import styled from 'styled-components';

import { NavigationBar } from '../components/NavigationBar';
import { StyledButton } from '../components/StyledButton';

const AnchorButtonPage = () => (
  <>
    <NavigationBar />
    <Container>
      <StyledButton size="lg" useAnchorTag={true}>
        AnchorButton
      </StyledButton>
    </Container>
  </>
);

export default AnchorButtonPage;

const Container = styled.div`
  display: flex;
`;
