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

const commonButtonStyle = css`
  /* This style will override StyledButton's style */
  padding: 0;
`;

const BasicButton = styled.button`
  ${commonButtonStyle};
  background-color: blue;
`;

const AnchorButton = styled.a`
  ${commonButtonStyle};
  background-color: red;
`;
