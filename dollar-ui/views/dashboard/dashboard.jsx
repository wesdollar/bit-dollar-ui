import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { SummaryTile } from "@wesdollar/dollar-ui.crypto.summary-tile";
import { ListWallets } from "@wesdollar/dollar-ui.crypto.list-wallets";
import { Space } from "@wesdollar/dollar-ui.ui.space";
import { ViewContainer } from "@wesdollar/dollar-ui.ui.view-container";
import { gutters } from "@wesdollar/dollar-ui.constants.gutters";
import { profits } from "@wesdollar/dollar-ui.test-data.crypto.resources.profits";
import { Loading } from "@wesdollar/dollar-ui.ui.loading";
import { Refresh } from "@wesdollar/dollar-ui.action-buttons.refresh";
import { Logout } from "@wesdollar/dollar-ui.ui.action-buttons.logout";
import { colors } from "@wesdollar/dollar-crypto.dollar-crypto.constants.colors";
import SettingsEthernetIcon from "@material-ui/icons/SettingsEthernet";
import { Body2 } from "@wesdollar/dollar-ui.ui.typography.body2";
import { FormControlLabel, Switch, FormGroup } from "@material-ui/core";
import { materialUiTheme } from "@wesdollar/dollar-crypto.dollar-crypto.constants.material-ui-theme";
import { ThemeProvider } from "@material-ui/core";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  .MuiSvgIcon-root {
    fill: ${colors.blackAccent};
  }

  .MuiSvgIcon-colorPrimary {
    fill: ${({ wsConnectionStatus }) => {
      let color;

      switch (wsConnectionStatus) {
        case "Open":
          color = colors.green;
          break;

        case "Connecting":
          color = colors.primary;
          break;

        case "Closing":
        case "Closed":
        case "Uninstantiated":
          color = colors.red;
          break;

        default:
          color = "inherit";
          break;
      }

      return color;
    }};
  }
`;

export const Dashboard = ({
  profitsResource,
  isLoading,
  handleSignOut,
  lastUpdated,
  wsConnectionStatus,
}) => {
  const [meta, setMeta] = useState();
  const [profits, setProfits] = useState();
  const [stealthMode, setStealthMode] = useState(false);

  useEffect(() => {
    if (Object.keys(profitsResource).length) {
      setMeta(profitsResource.meta);
      setProfits(profitsResource.profits);
    }
  }, [profitsResource]);

  return (
    <Loading isLoading={isLoading}>
      <ViewContainer data-testid="dashboard-container">
        <SummaryTile
          totalInvestment={meta?.totalInvestment}
          currentValue={meta?.currentValue}
          profit={meta?.profit}
          gains={meta?.gains}
          stealthMode={stealthMode}
        />
        <Space height={gutters.gutter} />
        <ListWallets profits={profits} stealthMode={stealthMode} />
        <Space height={gutters.gutter} />
        <Space height={gutters.gutter} />
        <ButtonContainer wsConnectionStatus={wsConnectionStatus}>
          <Refresh />
          <Space width={gutters.gutter} />
          <Logout onClick={handleSignOut} />
          <Space width={gutters.gutter} />
          <SettingsEthernetIcon
            fontSize="large"
            color={"primary"}
            titleAccess="connected to server for updates"
          />
        </ButtonContainer>
        <Space height={gutters.gutter} />
        <ButtonContainer>
          <ThemeProvider theme={materialUiTheme}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    checked={stealthMode}
                    onChange={() => setStealthMode(!stealthMode)}
                    name="stealth-mode"
                    color="primary"
                  />
                }
                label="Stealth Mode"
              />
            </FormGroup>
          </ThemeProvider>
        </ButtonContainer>
        <Space height={gutters.smallGutter} />
        <ButtonContainer>
          <Body2>last updated {lastUpdated}</Body2>
        </ButtonContainer>
      </ViewContainer>
    </Loading>
  );
};

Dashboard.propTypes = {
  profitsResource: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.string.isRequired,
  wsConnectionStatus: PropTypes.string.isRequired,
};

Dashboard.defaultProps = {
  profitsResource: profits,
  isLoading: false,
  lastUpdated: "now",
  wsConnectionStatus: "",
};
