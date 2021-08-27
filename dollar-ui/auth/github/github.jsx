import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import firebase from "firebase/app";
import "firebase/auth";
import { Button } from "@wesdollar/dollar-ui.ui.buttons.button";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Loading } from "@wesdollar/dollar-ui.ui.loading";

const Container = styled.div`
  display: flex;
  flex: 0 0 100%;
  justify-content: center;
  align-items: center;
`;

export const Github = ({
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId,
  setAuthenticatedUser,
  setUserIsAuthenticated,
  setAuthResult,
  setAuthErrors,
  ButtonOverride,
}) => {
  const [loaded, setLoaded] = useState(false);
  const [isFetching, setIsFetching] = useState(true);

  const firebaseConfig = {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
    measurementId,
  };

  useEffect(() => {
    if (!loaded && apiKey) {
      firebase.initializeApp(firebaseConfig);
    }

    const initAuth = () => {
      firebase
        .auth()
        .getRedirectResult()
        .then((result) => {
          setAuthResult(result);
          setIsFetching(false);
        })
        .catch((error) => {
          setAuthErrors(error);
          setIsFetching(false);
        });

      firebase.auth().onAuthStateChanged(async (user) => {
        if (user) {
          // User is signed in
          const token = await user.getIdToken();

          setAuthenticatedUser(token);
          setUserIsAuthenticated(true);
        } else {
          // User is signed out
          setUserIsAuthenticated(false);
        }
      });
    };

    if (!loaded && apiKey) {
      initAuth();
      setLoaded(true);
    }
  }, []);

  const handleLogin = () => {
    const provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  };

  let RenderButton = Button;

  if (ButtonOverride) {
    RenderButton = ButtonOverride;
  }

  return (
    <Loading isLoading={isFetching}>
      <Container data-testid="github-container">
        <RenderButton
          onClick={() => {
            handleLogin();
            setIsFetching(true);
          }}
          startIcon={<GitHubIcon />}
        >
          Login with GitHub
        </RenderButton>
      </Container>
    </Loading>
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
