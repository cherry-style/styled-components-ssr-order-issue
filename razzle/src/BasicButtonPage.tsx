import React from 'react';

import { StyledButton } from './StyledButton';

const BasicButtonPage: React.FC = () => (
  <StyledButton color="blue" useAnchorTag={false}>
    Blue BasicButton
  </StyledButton>
);

export default BasicButtonPage;
