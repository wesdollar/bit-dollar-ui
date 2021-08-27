import React from "react";
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

const theme = materialUiTheme;

const Anchor = styled.a`
  color: ${colors.secondary};
`;

export const SetKeys = ({ onSave }) => {
  return (
    <div data-testid="set-keys-container">
      <ThemeProvider theme={theme}>
        <MobileContainer>
          <Tile>
            <Text>
              Set your Coinbase API key and secret. Your keys are encrypted and
              stored securely.{" "}
              <Anchor
                href="https://help.coinbase.com/en/exchange/managing-my-account/how-to-create-an-api-key"
                target="_blank"
              >
                Click here
              </Anchor>{" "}
              for help getting your API keys.
            </Text>
            <Space height="40px" />
            <TextField id="key" label="Coinbase API Key" />
            <Space />
            <TextField id="secret" label="Coinbase API Secret" />
            <Space />
            <Button onClick={onSave}>Save</Button>
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
