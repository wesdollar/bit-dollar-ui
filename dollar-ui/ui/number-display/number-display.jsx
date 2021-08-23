import React from "react";
import PropTypes from "prop-types";
import numbro from "numbro";

export const NumberDisplay = ({ children, decimalPlaces }) => {
  const formattedNumber = numbro(children).format({
    thousandSeparated: true,
    mantissa: decimalPlaces,
  });

  return <div data-testid="number-display-container">{formattedNumber}</div>;
};

NumberDisplay.propTypes = {
  decimalPlaces: PropTypes.number,
};

NumberDisplay.defaultProps = {
  decimalPlaces: 2,
};
