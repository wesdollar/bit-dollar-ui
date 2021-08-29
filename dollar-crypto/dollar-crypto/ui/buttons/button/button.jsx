import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Button as DollarUiButton } from "@wesdollar/dollar-ui.ui.buttons.button";
import { colors } from "@wesdollar/dollar-crypto.dollar-crypto.constants.colors";
import { propTypes as propTypeConstants } from "@wesdollar/dollar-ui.constants.prop-types";
import { materialUiTheme } from "@wesdollar/dollar-crypto.dollar-crypto.constants.material-ui-theme";
import { ThemeProvider } from "@material-ui/styles";

const theme = materialUiTheme;

export const Button = ({ children, onClick, startIcon, width }) => {
  return (
    <ThemeProvider theme={theme}>
      <DollarUiButton
        data-testid="button-container"
        onClick={onClick}
        startIcon={startIcon}
        width={width}
      >
        {children}
      </DollarUiButton>
    </ThemeProvider>
  );
};

const { children } = propTypeConstants;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  startIcon: PropTypes.node,
  children,
};

Button.defaultProps = {
  onClick: () => {},
  startIcon: "",
};
