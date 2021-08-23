import React from "react";
import PropTypes from "prop-types";
import numbro from "numbro";
import styled from "styled-components";
import { colors } from "@wesdollar/dollar-ui.constants.colors";

const Container = styled.span`
  ${({ colorize, sign }) => {
    if (colorize) {
      let color;

      switch (sign) {
        case 1:
          color = colors.green;
          break;

        case -1:
          color = colors.red;
          break;

        case 0:
        default:
          color = "inherit";
          break;
      }

      return `color: ${color};`;
    }
  }}
`;

export const NumberDisplay = ({
  children: value,
  colorize,
  decimalPlaces,
  sign,
}) => {
  const formattedNumber = numbro(value).format({
    thousandSeparated: true,
    mantissa: decimalPlaces,
  });

  return (
    <Container
      colorize={colorize}
      sign={sign}
      data-testid="number-display-container"
    >
      {formattedNumber}
    </Container>
  );
};

NumberDisplay.propTypes = {
  decimalPlaces: PropTypes.number,
  colorize: PropTypes.bool,
  /** Value of Math.sign for colorizing red (negative), green (positive), or inherit (nuetral) */
  sign: PropTypes.number,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

NumberDisplay.defaultProps = {
  decimalPlaces: 2,
  colorize: false,
};
