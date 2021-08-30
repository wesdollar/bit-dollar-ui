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
import { ErrorState } from "@wesdollar/dollar-ui.ui.error-state";
import useWebSocket, { ReadyState } from "react-use-websocket";
import moment from "moment";

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

export const WsLogin = ({ apiUrl, firebaseConfig, wsUrl }) => {
  const [showSetKeys, setShowSetKeys] = useState(false);
  const [showSetKeys2, setShowSetKeys2] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [showProfitsError, setShowProfitsError] = useState(false);
  const [callGetUserFromDb, setCallGetUserFromDb] = useState(false);
  const [callGetProfits, setCallGetProfits] = useState(false);
  const [showLoading, setShowLoading] = useState(true);
  const [authedUser, setAuthedUser] = useState();
  const [profits, setProfits] = useState();
  const [validationErrors, setValidationErrors] = useState([]);
  const [socketUrl, setSocketUrl] = useState(null);
  const { lastMessage, readyState } = useWebSocket(socketUrl);
  const [wsConnectionStatus, setWsConnectionStatus] = useState();
  const [wsLastUpdated, setWsLastUpdated] = useState("now");

  initializeApp(firebaseConfig);
  const auth = getAuth();

  useEffect(() => {
    if (lastMessage?.data) {
      const profitsResponse = JSON.parse(lastMessage.data);

      setProfits(profitsResponse);
      setWsLastUpdated(moment().format("h:mm:ss a"));
    }
  }, [lastMessage]);

  useEffect(() => {
    if (profits) {
      if (profits?.status === 403) {
        setShowLoading(false);
        setShowProfitsError(true);
      } else {
        if (Object.keys(profits).length) {
          setShowSetKeys(false);
          setShowLoading(false);
          setShowDashboard(true);
        } else {
          setShowLoading(false);
          setShowProfitsError(true);
        }
      }
    }
  }, [profits]);

  useEffect(() => {
    const connectionStatus = {
      [ReadyState.CONNECTING]: "Connecting",
      [ReadyState.OPEN]: "Open",
      [ReadyState.CLOSING]: "Closing",
      [ReadyState.CLOSED]: "Closed",
      [ReadyState.UNINSTANTIATED]: "Uninstantiated",
    }[readyState];

    setWsConnectionStatus(connectionStatus);
  }, [readyState]);

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
      setSocketUrl(`${wsUrl}/ws-profits?token=${authedUser.accessToken}`);
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

    const json = await response.json();
    const { status } = response;

    if (status === 200) {
      // loading should remain on since we're getting more data
      setCallGetProfits(true);
    } else if (status === 400) {
      setShowLoading(false);
      setShowSetKeys2(true);
      setValidationErrors(json.error.details);
    } else {
      // TODO: handle errors
    }
  };

  if (showSetKeys || showSetKeys2) {
    const view = showSetKeys2 ? "form" : null;

    return (
      <FlexContainer>
        <SetKeys
          view={view}
          onSave={handleSaveKeys}
          validationErrors={validationErrors}
        />
      </FlexContainer>
    );
  }

  if (showLoginForm) {
    const props = {
      ButtonOverride: Button,
      auth,
    };

    return (
      <FlexContainer>
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
        wsConnectionStatus={wsConnectionStatus}
        lastUpdated={wsLastUpdated}
      />
    );
  }

  if (showProfitsError) {
    return <ErrorState />;
  }

  if (showLoading) {
    return <Loading data-testid="ws-login-container" isLoading={true} />;
  }

  return null;
};

WsLogin.propTypes = {
  apiUrl: PropTypes.string.isRequired,
  firebaseConfig: PropTypes.object.isRequired,
  wsUrl: PropTypes.string.isRequired,
};

WsLogin.defaultProps = {
  apiUrl: "https://dollar-crypto-dash-service.ngrok.io",
  wsUrl: "wss://dollar-crypto-dash-service.ngrok.io",
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
