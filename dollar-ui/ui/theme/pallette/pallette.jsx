import React from "react";
import PropTypes from "prop-types";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

export const Pallette = ({ children }) => {
  return <div data-testid="pallette-container">{children}</div>;
};
