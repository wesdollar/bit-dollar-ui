import React from "react";
import PropTypes from "prop-types";
import logo from "./icon-256.png";

export const LogoPngMd = ({ alt }) => {
  return <img src={logo} alt={alt} data-testid="logo-png-md-container" />;
};

LogoPngMd.propTypes = { alt: PropTypes.string };

LogoPngMd.defaultProps = { alt: "DollarCrypto.io" };
