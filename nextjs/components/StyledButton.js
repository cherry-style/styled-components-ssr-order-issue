import React from 'react';
import styled from 'styled-components';

import { AnchorOrBasicButton } from './AnchorOrBasicButton';

export const StyledButton = styled(AnchorOrBasicButton)`
  padding: ${props => (props.size === "lg" ? 48 : 24)}px;
`;
