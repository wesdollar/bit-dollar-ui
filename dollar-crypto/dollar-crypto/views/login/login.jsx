import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Github } from "@wesdollar/dollar-ui.auth.github";
import { Apple } from "@wesdollar/dollar-ui.auth.apple";
import { LogoPngMd } from "@wesdollar/dollar-crypto.logo.logo-png-md";
import { Space } from "@wesdollar/dollar-ui.ui.space";
import { Button } from "@wesdollar/dollar-crypto.dollar-crypto.ui.buttons.button";
import { Loading } from "@wesdollar/dollar-ui.ui.loading";
import { getAuth, getRedirectResult, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";

const Container = styled.div`
  display: grid;
  place-items: center;
  margin: auto;
`;

const LogoContainer = styled.div`
  grid-row: 1;

  img {
    width: 124px;
    height: 124px;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const Login = ({
  setAuthenticatedUser,
  setUserIsAuthenticated,
  setAuthErrors,
  setAuthResult,
  firebaseConfig,
}) => {
  const [auth, setAuth] = useState();
  const [childProps, setChildProps] = useState();

  useEffect(() => {
    initializeApp(firebaseConfig);
    const authInit = getAuth();

    setAuth(authInit);

    setChildProps({
      ButtonOverride: Button,
      auth: authInit,
    });
  }, []);

  useEffect(() => {
    console.log("onAuthStateChanged hit");

    if (auth) {
      onAuthStateChanged(auth, (user) => {
        console.log("user object in onAuthStateChanged", user);
        if (user) {
          // https://firebase.google.com/docs/reference/js/firebase.User
          console.log("auth state changed, user:", user);
          setAuthenticatedUser(user);
          setUserIsAuthenticated(true);
        } else {
          setAuthenticatedUser({});
          setUserIsAuthenticated(false);
        }
      });
    }
  }, [auth]);

  useEffect(() => {
    if (auth) {
      const handleAuthResponse = async () => {
        try {
          const response = await getRedirectResult(auth);
          let user;

          if (response) {
            ({ user } = response);

            const loggedIn = Object.keys(response).length ? true : false;
            setAuthResult(response);
            setAuthenticatedUser(user || null);
            setUserIsAuthenticated(loggedIn);
          }
        } catch (error) {
          setAuthErrors(error);
        }
      };

      handleAuthResponse();
    }
  }, [auth]);

  if (!auth) {
    return <Loading isLoading={true} />;
  }

  return (
    <FlexContainer data-testid="login-container">
      <Container>
        <LogoContainer>
          <LogoPngMd />
        </LogoContainer>
        <Space height="80px" />
        <Github {...childProps} />
        <Space height="20px" />
        <Apple {...childProps} />
      </Container>
    </FlexContainer>
  );
};

Login.propTypes = {
  firebaseConfig: PropTypes.any.isRequired,
  setAuthenticatedUser: PropTypes.func.isRequired,
  setUserIsAuthenticated: PropTypes.func.isRequired,
  setAuthErrors: PropTypes.func.isRequired,
  setAuthResult: PropTypes.func.isRequired,
};

Login.defaultProps = {
  firebaseConfig: {
    apiKey: "AIzaSyA1KxhupZZZLTMe0XmO6DEsxbzP-4yhuBo",
    authDomain: "dollar-crypto.firebaseapp.com",
    projectId: "dollar-crypto",
    storageBucket: "dollar-crypto.appspot.com",
    messagingSenderId: "1067217573041",
    appId: "1:1067217573041:web:31e518e0bd9484dc5a3e90",
    measurementId: "G-SV7YQ650J2",
  },
  setAuthenticatedUser: (data) => console.log("authed user:", data),
  setUserIsAuthenticated: (data) => console.log("user is authed:", data),
  setAuthErrors: (data) => console.error("auth errors:", data),
  setAuthResult: (data) => console.log("auth result:", data),
};
