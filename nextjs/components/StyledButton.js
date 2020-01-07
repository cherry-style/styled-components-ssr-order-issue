import React from 'react';
import styled from 'styled-components';

import { AnchorOrBasicButton } from './AnchorOrBasicButton';

export const StyledButton = styled(AnchorOrBasicButton)`
  background-color: ${props => props.color};
`;
