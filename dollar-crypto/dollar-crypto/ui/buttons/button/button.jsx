import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Button as DollarUiButton } from "@wesdollar/dollar-ui.ui.buttons.button";
import { colors } from "@wesdollar/dollar-crypto.dollar-crypto.constants.colors";
import { propTypes as propTypeConstants } from "@wesdollar/dollar-ui.constants.prop-types";

const StyledButton = styled(DollarUiButton)`
  background-color: ${colors.primary} !important;
  ${({ width }) => width && `width: ${width};`}
`;

export const Button = ({ children, onClick, startIcon, width }) => {
  return (
    <StyledButton
      data-testid="button-container"
      onClick={onClick}
      startIcon={startIcon}
      width={width}
    >
      {children}
    </StyledButton>
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
