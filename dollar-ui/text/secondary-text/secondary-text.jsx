import React from "react";
import PropTypes from "prop-types";
import { Text } from "@wesdollar/dollar-ui.text.text";
import { propTypes } from "@wesdollar/dollar-ui.constants.prop-types";

export const SecondaryText = ({ children }) => {
  return <Text variant="secondary">{children}</Text>;
};

const { children } = propTypes;

SecondaryText.propTypes = { children };

SecondaryText.defaultProps = {};
