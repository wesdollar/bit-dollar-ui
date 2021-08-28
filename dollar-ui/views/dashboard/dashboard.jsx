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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  .MuiSvgIcon-root {
    fill: ${colors.secondaryBlack};
  }
`;

export const Dashboard = ({ profitsResource, isLoading, handleSignOut }) => {
  const [meta, setMeta] = useState();
  const [profits, setProfits] = useState();

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
        />
        <Space height={gutters.bigGutter} />
        <ListWallets profits={profits} />
        <Space height={gutters.bigGutter} />
        <Space height={gutters.bigGutter} />
        <ButtonContainer>
          <Refresh />
          <Space width={"40px"} />
          <Logout onClick={handleSignOut} />
        </ButtonContainer>
      </ViewContainer>
    </Loading>
  );
};

Dashboard.propTypes = {
  profitsResource: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

Dashboard.defaultProps = {
  profitsResource: profits,
  isLoading: false,
};
