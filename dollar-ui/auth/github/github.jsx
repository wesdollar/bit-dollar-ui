import React from "react";
import PropTypes from "prop-types";
import { Button } from "@wesdollar/dollar-ui.ui.buttons.button";
import GitHubIcon from "@material-ui/icons/GitHub";
import { FirebaseAuthBase } from "@wesdollar/dollar-ui.auth.firebase-auth-base";

export const Github = (props) => {
  const { ButtonOverride } = props;
  let RenderButton = Button;

  if (ButtonOverride) {
    RenderButton = ButtonOverride;
  }

  return (
    <FirebaseAuthBase
      {...props}
      StartIcon={<GitHubIcon />}
      buttonLabel={"Login with GitHub"}
      authProvider="github"
      ButtonOverride={RenderButton}
    />
  );
};

Github.propTypes = {
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

Github.defaultProps = {
  apiKey: "AIzaSyA1KxhupZZZLTMe0XmO6DEsxbzP-4yhuBo",
  authDomain: "dollar-crypto.firebaseapp.com",
  projectId: "dollar-crypto",
  storageBucket: "dollar-crypto.appspot.com",
  messagingSenderId: "1067217573041",
  appId: "1:1067217573041:web:31e518e0bd9484dc5a3e90",
  measurementId: "G-SV7YQ650J2",
  setAuthenticatedUser: (data) => console.log(data),
  setUserIsAuthenticated: (data) => console.log(data),
  setAuthResult: (data) => console.log(data),
  setAuthErrors: (data) => console.error(data),
};
