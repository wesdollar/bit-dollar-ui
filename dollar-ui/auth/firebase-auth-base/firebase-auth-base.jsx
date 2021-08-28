import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Button } from "@wesdollar/dollar-ui.ui.buttons.button";
import { Loading } from "@wesdollar/dollar-ui.ui.loading";
import {
  GithubAuthProvider,
  OAuthProvider,
  signInWithRedirect,
} from "firebase/auth";

const Container = styled.div`
  display: flex;
  flex: 0 0 100%;
  justify-content: center;
  align-items: center;
`;

export const FirebaseAuthBase = ({
  ButtonOverride,
  buttonLabel,
  StartIcon,
  authProvider,
  auth,
}) => {
  const [isFetching, setIsFetching] = useState(false);

  const handleLogin = () => {
    let provider;

    switch (authProvider) {
      case "github":
        provider = new GithubAuthProvider();

        break;

      case "apple":
        provider = new OAuthProvider("apple.com");
        provider.addScope("email");
        provider.addScope("name");

      default:
        null;
        break;
    }

    signInWithRedirect(auth, provider);
  };

  let RenderButton = Button;

  if (ButtonOverride) {
    RenderButton = ButtonOverride;
  }

  return (
    <Loading isLoading={isFetching}>
      <Container data-testid="firebase-auth-base-container">
        <RenderButton
          onClick={() => {
            handleLogin();
            setIsFetching(true);
          }}
          startIcon={StartIcon}
          width={"255px"}
        >
          {buttonLabel}
        </RenderButton>
      </Container>
    </Loading>
  );
};

FirebaseAuthBase.propTypes = {
  setAuthenticatedUser: PropTypes.func.isRequired,
  setUserIsAuthenticated: PropTypes.func.isRequired,
  setAuthResult: PropTypes.func.isRequired,
  setAuthErrors: PropTypes.func.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  StartIcon: PropTypes.element,
  authProvider: PropTypes.oneOf(["github", "apple"]).isRequired,
  ButtonOverride: PropTypes.any,
  auth: PropTypes.any.isRequired,
  firebaseConfig: PropTypes.object.isRequired,
};

FirebaseAuthBase.defaultProps = {
  setAuthenticatedUser: (data) => console.log(data),
  setUserIsAuthenticated: (data) => console.log(data),
  setAuthResult: (data) => console.log(data),
  setAuthErrors: (data) => console.error(data),
  buttonLabel: "",
  StartIcon: null,
  firebaseConfig: {
    apiKey: "AIzaSyA1KxhupZZZLTMe0XmO6DEsxbzP-4yhuBo",
    authDomain: "dollar-crypto.firebaseapp.com",
    projectId: "dollar-crypto",
    storageBucket: "dollar-crypto.appspot.com",
    messagingSenderId: "1067217573041",
    appId: "1:1067217573041:web:31e518e0bd9484dc5a3e90",
    measurementId: "G-SV7YQ650J2",
  },
};
