import React from 'react';
import styled, { css } from 'styled-components';

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
