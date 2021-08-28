import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Dashboard } from "@wesdollar/dollar-ui.views.dashboard";
import { SetKeys } from "@wesdollar/dollar-crypto.dollar-crypto.views.set-keys";
import { Github } from "@wesdollar/dollar-ui.auth.github";
import { Apple } from "@wesdollar/dollar-ui.auth.apple";
import { LogoPngMd } from "@wesdollar/dollar-crypto.logo.logo-png-md";
import { Space } from "@wesdollar/dollar-ui.ui.space";
import { Button } from "@wesdollar/dollar-crypto.dollar-crypto.ui.buttons.button";
import { Loading } from "@wesdollar/dollar-ui.ui.loading";
import {
  getRedirectResult,
  onAuthStateChanged,
  getAuth,
  signOut,
} from "firebase/auth";
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

export const Login = ({ apiUrl, firebaseConfig }) => {
  const [showSetKeys, setShowSetKeys] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [callGetUserFromDb, setCallGetUserFromDb] = useState(false);
  const [callGetProfits, setCallGetProfits] = useState(false);
  const [showLoading, setShowLoading] = useState(true);
  const [authedUser, setAuthedUser] = useState();
  const [profits, setProfits] = useState();

  initializeApp(firebaseConfig);
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("onAuthStateChanged detected", user);

      if (user) {
        // https://firebase.google.com/docs/reference/js/firebase.User
        console.log("user is logged in:", user);
        setAuthedUser(user);
        setCallGetUserFromDb(true);
        setShowLoginForm(false);
        setShowLoading(true);
      } else {
        console.log("user is logged out:", user);
        setShowLoginForm(true);
      }
    });
  }, []);

  // get called after successful login, so onAuthStateChanged
  useEffect(() => {
    const getUserFromDb = async () => {
      try {
        const response = await fetch(
          `${apiUrl}/users?token=${authedUser.accessToken}`
        );
        const user = await response.json();

        if (user.status === 401) {
          setShowLoading(false);
          setShowLoginForm(true);
        }

        if (user && Object.keys(user).length) {
          if (!user.cbKey || !user.cbSecret) {
            setShowLoading(false);
            setShowSetKeys(true);
          } else {
            // loading should still be displayed, we're just getting more data
            setCallGetProfits(true);
          }
        }
      } catch (error) {
        console.error(error);
      }
    };

    callGetUserFromDb && getUserFromDb();
  }, [callGetUserFromDb]);

  useEffect(() => {
    const handleAuthResponse = async () => {
      console.log("handleAuthResponse");

      try {
        const response = await getRedirectResult(auth);

        console.log("handleAuthResponse:", response);
      } catch (error) {
        console.error("handleAuthResponse error:", error);
      }
    };

    handleAuthResponse();
  }, []);

  // should only happen after getting user data from server
  useEffect(() => {
    const callProfits = async () => {
      try {
        const response = await fetch(
          `${apiUrl}/profits?token=${authedUser.accessToken}`
        );
        const json = await response.json();

        if (Object.keys(json).length) {
          setProfits(json);
          setShowSetKeys(false);
          setShowLoading(false);
          setShowDashboard(true);
        }
      } catch (error) {
        console.error("callProfits error:", error);
      }
    };

    callGetProfits && callProfits();
  }, [callGetProfits]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("user logged out");
      })
      .catch((error) => {
        console.log("logout failed:", error);
      });
  };

  const handleSaveKeys = async () => {
    setShowSetKeys(false);
    setShowLoading(true);

    const cbKey = document.querySelector("#key").value;
    const cbSecret = document.querySelector("#secret").value;

    const response = await fetch(`${apiUrl}/set-keys`, {
      method: "POST",
      body: JSON.stringify({
        cbKey,
        cbSecret,
        token: authedUser.accessToken,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      // loading should remain on since we're getting more data
      setCallGetProfits(true);
    } else {
      // TODO: handle errors
    }
  };

  if (showSetKeys) {
    return (
      <FlexContainer>
        <SetKeys onSave={handleSaveKeys} />
      </FlexContainer>
    );
  }

  if (showLoginForm) {
    const props = {
      ButtonOverride: Button,
      auth,
    };

    return (
      <FlexContainer data-testid="login-container">
        <Container>
          <LogoContainer>
            <LogoPngMd />
          </LogoContainer>
          <Space height="80px" />
          <Github {...props} />
          <Space height="20px" />
          <Apple {...props} />
        </Container>
      </FlexContainer>
    );
  }

  if (showDashboard) {
    return (
      <Dashboard
        profitsResource={profits}
        auth={auth}
        handleSignOut={handleSignOut}
      />
    );
  }

  if (showLoading) {
    return <Loading isLoading={true} />;
  }

  return null;
};

Login.propTypes = {
  apiUrl: PropTypes.string.isRequired,
  firebaseConfig: PropTypes.object.isRequired,
};

Login.defaultProps = {
  apiUrl: "https://dollar-crypto-dash-service.ngrok.io",
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