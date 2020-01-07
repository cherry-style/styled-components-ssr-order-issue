import React from 'react';
import styled from 'styled-components';

import { AnchorOrBasicButton } from './AnchorOrBasicButton';

type Props = {
  color: 'blue' | 'yellow';
  useAnchorTag: boolean;
};

export const StyledButton = styled(AnchorOrBasicButton)<Props>`
  background-color: ${props => props.color};
`;
