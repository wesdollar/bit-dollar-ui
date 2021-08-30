import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { TextField } from "@wesdollar/dollar-ui.ui.inputs.text-field";
import { MobileContainer } from "@wesdollar/dollar-ui.ui.mobile-container";
import { Tile } from "@wesdollar/dollar-ui.ui.tile";
import { Space } from "@wesdollar/dollar-ui.ui.space";
import { Button } from "@wesdollar/dollar-crypto.dollar-crypto.ui.buttons.button";
import { materialUiTheme } from "@wesdollar/dollar-crypto.dollar-crypto.constants.material-ui-theme";
import { ThemeProvider } from "@material-ui/styles";
import { Text } from "@wesdollar/dollar-ui.text.text";
import { colors } from "@wesdollar/dollar-crypto.dollar-crypto.constants.colors";
import { CenteredHorz } from "@wesdollar/dollar-ui.ui.centered-horz";
import { gutters } from "@wesdollar/dollar-ui.constants.gutters";

const theme = materialUiTheme;

const Anchor = styled.a`
  color: ${colors.secondary};
`;

export const SetKeys = ({ onSave, validationErrors, view }) => {
  const [showSetupInfo, setShowSetupInfo] = useState(view ? false : true);
  const [errors, setErrors] = useState();

  useEffect(() => {
    if (validationErrors.length) {
      const obj = {};
      for (const error of validationErrors) {
        console.log(error);
        const index = error.path[0];
        obj[index] = { message: index.message };
      }

      setErrors(obj);
    }
  }, [validationErrors]);

  const Content = () => {
    if (showSetupInfo) {
      const apiPermissions = [
        "wallet:accounts:read",
        "wallet:buys:read",
        "wallet:deposits:read",
        "wallet:sells:read",
        "wallet:supported-assets:read",
        "wallet:trades:read",
        "wallet:transactions:read",
        "wallet:transactions:transfer",
        "wallet:user:read",
      ];

      return (
        <Text>
          <p style={{ marginTop: 0 }}>
            We're currently only integrated with Coinbase. You'll need to
            generate Coinbase API crendentials.{" "}
            <Anchor
              href="https://help.coinbase.com/en/exchange/managing-my-account/how-to-create-an-api-key"
              target="_blank"
            >
              Click here
            </Anchor>{" "}
            for help getting your API keys.
          </p>
          <p>
            Grant the following permissions when setting up your keys. Never
            provide write access to us!
          </p>
          <p>
            We never store any of your Coinbase data. The only data we store are
            your API keys and login information.
          </p>
          <ul>
            {apiPermissions.map((permission, index) => (
              <li key={`permissions-${index}`}>
                <pre>{permission}</pre>
              </li>
            ))}
          </ul>
          <Space height={gutters.gutter} />
          <CenteredHorz>
            <Button onClick={() => setShowSetupInfo(false)}>Continue</Button>
          </CenteredHorz>
        </Text>
      );
    }

    return (
      <>
        <Text>
          Set your Coinbase API key and secret. Your keys are encrypted with an
          unknown salt and hash for secure storage.{" "}
        </Text>
        <Space height={gutters.gutter} />
        <CenteredHorz>
          <TextField
            id="key"
            label="Coinbase API Key"
            error={errors && Object.keys(errors).length ? true : false}
            helperText={errors?.cbKey && "must be 16 characters"}
          />
        </CenteredHorz>
        <Space height={gutters.smallerGutter} />
        <CenteredHorz>
          <TextField
            id="secret"
            label="Coinbase API Secret"
            error={errors && Object.keys(errors).length ? true : false}
            helperText={errors?.cbSecret && "must be 32 characters"}
          />
        </CenteredHorz>
        <Space height={gutters.gutter} />
        <CenteredHorz>
          <Button onClick={onSave}>Save</Button>
        </CenteredHorz>
      </>
    );
  };

  return (
    <div data-testid="set-keys-container">
      <ThemeProvider theme={theme}>
        <MobileContainer>
          <Tile>
            <Content />
          </Tile>
        </MobileContainer>
      </ThemeProvider>
    </div>
  );
};

SetKeys.propTypes = {
  onSave: PropTypes.func.isRequired,
  /** value "form" sets the view to the form input */
  view: PropTypes.oneOf(["form"]),
  validationErrors: PropTypes.array,
};

SetKeys.defaultProps = {
  view: null,
  onSave: () => {},
  validationErrors: [],
};
