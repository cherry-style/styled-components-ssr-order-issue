import React from 'react';
import styled from 'styled-components';

import { AnchorOrBasicButton } from './AnchorOrBasicButton';

type Props = {
  size: 'lg' | 'sm';
  useAnchorTag: boolean;
};

export const StyledButton = styled(AnchorOrBasicButton)<Props>`
  padding: ${props => (props.size === 'lg' ? 48 : 24)}px;
`;
