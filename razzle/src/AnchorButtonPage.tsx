import React from 'react';

import { StyledButton } from './StyledButton';

const AnchorButtonPage: React.FC = () => (
  <StyledButton color="yellow" useAnchorTag={true}>
    Yellow AnchorButton
  </StyledButton>
);

export default AnchorButtonPage;
