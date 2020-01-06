import React from 'react';
import styled from 'styled-components';

import { AnchorOrBasicButton } from './AnchorOrBasicButton';

export const StyledButton = ({ size, useAnchorTag, children }) => (
  <ExtendedButton size={size} useAnchorTag={useAnchorTag}>
    {children}
  </ExtendedButton>
);

const ExtendedButton = styled(AnchorOrBasicButton)`
  padding: ${props => (props.size === "lg" ? 48 : 24)}px;
`;
