import React from "react";
import { TypographyBase } from "@wesdollar/dollar-ui.ui.typography.typography-base";
import { ThemeProvider } from "@material-ui/core";
import { materialUiTheme } from "@wesdollar/dollar-crypto.dollar-crypto.constants.material-ui-theme";

export const Body1 = ({ children }) => {
  return (
    <ThemeProvider theme={materialUiTheme}>
      <TypographyBase
        gutterBottom
        variant="body1"
        data-testid="body1-container"
      >
        {children}
      </TypographyBase>
    </ThemeProvider>
  );
};
