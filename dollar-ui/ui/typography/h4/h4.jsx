import React from "react";
import PropTypes from "prop-types";
import { TypographyBase } from "@wesdollar/dollar-ui.ui.typography.typography-base";

export const H4 = (props) => {
  const { children, color } = props;

  return (
    <TypographyBase
      data-testid={props["data-testid"]}
      color={color}
      variant="h4"
    >
      {children}
    </TypographyBase>
  );
};

H4.propTypes = { ["data-testid"]: PropTypes.string };

H4.defaultProps = { ["data-testid"]: "h4-container" };
