import React from "react";
import PropTypes from "prop-types";

export const StealthMode = ({ children, stealthMode }) => {
  if (stealthMode) {
    return null;
  }

  return <div data-testid="stealth-mode-container">{children}</div>;
};

StealthMode.propTypes = {
  stealthMode: PropTypes.bool,
};

StealthMode.defaultProps = {};
