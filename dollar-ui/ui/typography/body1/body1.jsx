import React from "react";
import styled from "styled-components";
import { TypographyBase } from "@wesdollar/dollar-ui.ui.typography.typography-base";

const StyledType = styled(TypographyBase)`
  &.MuiTypography-body1 {
    margin-bottom: 14px;
  }
`;

export const Body1 = ({ children }) => {
  return (
    <StyledType variant="body1" data-testid="body1-container">
      {children}
    </StyledType>
  );
};
