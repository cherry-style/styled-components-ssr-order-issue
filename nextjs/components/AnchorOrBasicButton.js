import React from 'react';
import styled, { css } from 'styled-components';

export const AnchorOrBasicButton = ({ className, useAnchorTag, children }) => {
  if (useAnchorTag) {
    return <AnchorButton className={className}>{children}</AnchorButton>;
  }

  return <BasicButton className={className}>{children}</BasicButton>;
};

const buttonStyle = css`
  border-radius: 3;
  padding: 0;
`;

const BasicButton = styled.button`
  ${buttonStyle};
  background-color: blue;
`;

const AnchorButton = styled.a`
  ${buttonStyle};
  background-color: red;
`;
