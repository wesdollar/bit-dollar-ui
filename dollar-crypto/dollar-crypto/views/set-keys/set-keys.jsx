import React, { useState } from "react";
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

const theme = materialUiTheme;

const Anchor = styled.a`
  color: ${colors.secondary};
`;

export const SetKeys = ({ onSave }) => {
  const [showSetupInfo, setShowSetupInfo] = useState(true);

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
          <p>
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
          <ul>
            {apiPermissions.map((permission, index) => (
              <li key={`permissions-${index}`}>
                <pre>{permission}</pre>
              </li>
            ))}
          </ul>
          <Space height="40px" />
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
        <Space height="40px" />
        <TextField id="key" label="Coinbase API Key" />
        <Space />
        <TextField id="secret" label="Coinbase API Secret" />
        <Space height="40px" />
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
};

SetKeys.defaultProps = {};
