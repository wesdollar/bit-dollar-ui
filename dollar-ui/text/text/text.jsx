import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import "./font.css";
import { colors } from "@wesdollar/dollar-ui.constants.colors";
import { styles } from "@wesdollar/dollar-ui.constants.styles";
import { propTypes } from "@wesdollar/dollar-ui.constants.prop-types";
import { fontSizes } from "@wesdollar/dollar-ui.constants.font-sizes";

const getFontSize = (variant) => {
  let fontSize;

  switch (variant) {
    case "small":
      fontSize = fontSizes.small;
      break;

    case "large":
      fontSize = fontSizes.large;
      break;

    default:
      fontSize = "1rem";
      break;
  }

  return fontSize;
};

const getVariant = (variant) => {
  let fontColor;

  switch (variant) {
    case "secondary":
      fontColor = colors.secondaryText;
      break;

    case "positive":
      fontColor = colors.green;
      break;

    case "negative":
      fontColor = colors.red;
      break;

    default:
      fontColor = colors.text;
      break;
  }

  return fontColor;
};

const TextContainer = styled.span`
  ${styles.fontStyles}
  color: ${({ variant }) => getVariant(variant)};
  font-size: ${({ size }) => getFontSize(size)};
  line-height: 1.5rem;
`;

export const Text = ({ children, className, size, variant }) => {
  return (
    <TextContainer
      size={size}
      variant={variant}
      className={className}
      data-testid="text-container"
    >
      {children}
    </TextContainer>
  );
};

const { children } = propTypes;

Text.propTypes = {
  children,
  size: PropTypes.oneOf(["small", "large"]),
  variant: PropTypes.oneOf(["secondary", "positive", "negative"]),
};

Text.defaultProps = {};
