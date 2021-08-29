import React from "react";
import { H4 } from "@wesdollar/dollar-ui.ui.typography.h4";

export const HeadingPrimary = ({ children }) => {
  return <H4 data-testid="heading-primary-container">{children}</H4>;
};
