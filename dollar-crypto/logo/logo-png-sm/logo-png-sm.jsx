import React from "react";
import PropTypes from "prop-types";
import logo from "./icon-64.png";

export const LogoPngSm = ({ alt }) => {
  return <img src={logo} alt={alt} data-testid="logo-png-sm-container" />;
};

LogoPngSm.propTypes = { alt: PropTypes.string };

LogoPngSm.defaultProps = { alt: "DollarCrypto.io" };
