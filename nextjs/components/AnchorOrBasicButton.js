import React from 'react';
import styled from 'styled-components';

export const AnchorOrBasicButton = ({ className, useAnchorTag, children }) => {
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
