import React from 'react';

import { StyledButton } from './StyledButton';

const AnchorButtonPage: React.FC = () => (
  <StyledButton size="lg" useAnchorTag={true}>
    AnchorButton
  </StyledButton>
);

export default AnchorButtonPage;
