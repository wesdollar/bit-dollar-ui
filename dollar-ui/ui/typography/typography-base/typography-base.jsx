import React from "react";
import Typography from "@material-ui/core/Typography";
import { materialUiTheme } from "@wesdollar/dollar-crypto.dollar-crypto.constants.material-ui-theme";
import { ThemeProvider } from "@material-ui/styles";
import "./font.css";

export const TypographyBase = (props) => {
  return (
    <ThemeProvider theme={materialUiTheme}>
      <Typography data-testid="typography-base-container" {...props}>
        {props.children}
      </Typography>
    </ThemeProvider>
  );
};
