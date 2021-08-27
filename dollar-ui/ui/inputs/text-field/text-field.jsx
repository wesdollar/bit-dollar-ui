import React from "react";
import PropTypes from "prop-types";
import { TextField as MaterialTextField } from "@material-ui/core";

export const TextField = ({ id, label, className }, ref) => {
  return (
    <span data-testid="text-field-container">
      <MaterialTextField
        id={id}
        label={label}
        className={className}
        variant="outlined"
        fullWidth={true}
      />
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
