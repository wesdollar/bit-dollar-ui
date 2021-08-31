import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ThemeProvider } from "@material-ui/core";
import { materialUiTheme } from "@wesdollar/dollar-crypto.dollar-crypto.constants.material-ui-theme";
import {
  FormGroup,
  FormControlLabel,
  Switch as MuiSwitch,
} from "@material-ui/core";
import { colors } from "@wesdollar/dollar-crypto.dollar-crypto.constants.colors";

const Container = styled.div`
  .MuiFormControlLabel-label {
    color: ${colors.white};
  }
`;

export const Switch = ({ children, inputName, onChange, checked, color }) => {
  return (
    <Container data-testid="switch-container">
      <ThemeProvider theme={materialUiTheme}>
        <FormGroup>
          <FormControlLabel
            control={
              <MuiSwitch
                checked={checked}
                onChange={onChange}
                name={inputName}
                color={color}
              />
            }
            label={children}
          />
        </FormGroup>
      </ThemeProvider>
    </Container>
  );
};

Switch.propTypes = {
  inputName: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  color: PropTypes.string,
};

Switch.defaultProps = {
  onChange: () => {},
  color: "primary",
};
