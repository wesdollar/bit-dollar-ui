import React from "react";
import PropTypes from "prop-types";
import { Button } from "@wesdollar/dollar-ui.ui.buttons.button";
import AppleIcon from "@material-ui/icons/Apple";
import { FirebaseAuthBase } from "@wesdollar/dollar-ui.auth.firebase-auth-base";

export const Apple = (props) => {
  const { ButtonOverride } = props;
  let RenderButton = Button;

  if (ButtonOverride) {
    RenderButton = ButtonOverride;
  }

  return (
    <FirebaseAuthBase
      {...props}
      StartIcon={<AppleIcon />}
      authProvider="apple"
      ButtonOverride={RenderButton}
      buttonLabel="Login with Apple ID"
    />
  );
};

Apple.propTypes = {
  apiKey: PropTypes.string.isRequired,
  authDomain: PropTypes.string.isRequired,
  projectId: PropTypes.string.isRequired,
  storageBucket: PropTypes.string.isRequired,
  messagingSenderId: PropTypes.string.isRequired,
  appId: PropTypes.string.isRequired,
  measurementId: PropTypes.string.isRequired,
  setAuthenticatedUser: PropTypes.func.isRequired,
  setUserIsAuthenticated: PropTypes.func.isRequired,
  setAuthResult: PropTypes.func.isRequired,
  setAuthErrors: PropTypes.func.isRequired,
};

Apple.defaultProps = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
  setAuthenticatedUser: (data) => console.log(data),
  setUserIsAuthenticated: (data) => console.log(data),
  setAuthResult: (data) => console.log(data),
  setAuthErrors: (data) => console.error(data),
};
