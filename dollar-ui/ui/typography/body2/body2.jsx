import React from "react";
import { TypographyBase } from "@wesdollar/dollar-ui.ui.typography.typography-base";

export const Body2 = ({ children, color }) => {
  return (
    <TypographyBase
      gutterBottom
      variant="body2"
      color={color}
      data-testid="body2-container"
    >
      {children}
    </TypographyBase>
  );
};
