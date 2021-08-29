import React from "react";
import PropTypes from "prop-types";
import { TextField as MaterialTextField } from "@material-ui/core";

export const TextField = (props) => {
  return (
    <span data-testid="text-field-container">
      <MaterialTextField {...props} variant="outlined" />
    </span>
  );
};

TextField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  ref: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

TextField.defaultProps = {
  id: "",
  lable: "",
  className: "",
};
