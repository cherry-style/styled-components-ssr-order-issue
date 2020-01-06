import React from 'react';
import styled from 'styled-components';

import { NavigationBar } from '../components/NavigationBar';
import { StyledButton } from '../components/StyledButton';

const BasicButtonPage = () => (
  <>
    <NavigationBar />
    <Container>
      <StyledButton size="sm" useAnchorTag={false}>
        BasicButton
      </StyledButton>
    </Container>
  </>
);

export default BasicButtonPage;

const Container = styled.div`
  display: flex;
`;
