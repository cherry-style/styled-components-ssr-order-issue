import React from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
  useAnchorTag: boolean;
};

export const AnchorOrBasicButton: React.FC<Props> = ({ className, useAnchorTag, children }) => {
  if (useAnchorTag) {
    return <AnchorButton className={className}>{children}</AnchorButton>;
  }

  return <BasicButton className={className}>{children}</BasicButton>;
};

const BasicButton = styled.button`
  background-color: red;
`;

const AnchorButton = styled.a`
  background-color: red;
`;
