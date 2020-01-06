import React from 'react';

import { StyledButton } from './StyledButton';

const BasicButtonPage: React.FC = () => (
  <StyledButton size="sm" useAnchorTag={false}>
    BasicButton
  </StyledButton>
);

export default BasicButtonPage;
