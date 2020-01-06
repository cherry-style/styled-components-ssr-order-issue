import React from 'react';
import styled from 'styled-components';

import { AnchorOrBasicButton } from './AnchorOrBasicButton';

type Props = {
  size: 'lg' | 'sm';
  useAnchorTag: boolean;
};

export const StyledButton: React.FC<Props> = ({ size, useAnchorTag, children }) => (
  <ExtendedButton size={size} useAnchorTag={useAnchorTag}>
    {children}
  </ExtendedButton>
);

const ExtendedButton = styled(AnchorOrBasicButton)<Props>`
  padding: ${props => (props.size === 'lg' ? 48 : 24)}px;
`;
