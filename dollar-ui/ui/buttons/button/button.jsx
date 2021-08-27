import React from "react";
import PropTypes from "prop-types";
import { Button as MaterialButton } from "@material-ui/core";
import { propTypes as propTypeContants } from "@wesdollar/dollar-ui.constants.prop-types";

export const Button = ({ children, onClick, startIcon, className }) => {
  return (
    <MaterialButton
      onClick={onClick}
      data-testid="button-container"
      variant="contained"
      size="large"
      color="primary"
      startIcon={startIcon || null}
      className={className}
    >
      {children}
    </MaterialButton>
  );
};

const { children } = propTypeContants;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  startIcon: PropTypes.node,
  children,
};

Button.defaultProps = {
  onClick: () => {},
};
