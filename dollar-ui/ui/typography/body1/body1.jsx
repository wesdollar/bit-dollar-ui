import React from "react";
import { TypographyBase } from "@wesdollar/dollar-ui.ui.typography.typography-base";

export const Body1 = ({ children }) => {
  return (
    <TypographyBase variant="body1" data-testid="body1-container">
      {children}
    </TypographyBase>
  );
};
