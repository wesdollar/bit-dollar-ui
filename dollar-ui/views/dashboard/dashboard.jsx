import React from "react";
import PropTypes from "prop-types";
import { SummaryTile } from "@wesdollar/dollar-ui.crypto.summary-tile";
import { ListWallets } from "@wesdollar/dollar-ui.crypto.list-wallets";
import { Space } from "@wesdollar/dollar-ui.ui.space";
import { ViewContainer } from "@wesdollar/dollar-ui.ui.view-container";
import { gutters } from "@wesdollar/dollar-ui.constants.gutters";
import { profits } from "@wesdollar/dollar-ui.test-data.crypto.resources.profits";

export const Dashboard = ({ profitsResource }) => {
  const { totalInvestment, currentValue, profit, gains } = profitsResource.meta;
  const { profits } = profitsResource;

  return (
    <ViewContainer data-testid="dashboard-container">
      <SummaryTile
        totalInvestment="123.54"
        currentValue="156.98"
        profit="33.22"
        gains="2.3%"
      />
      <Space height={gutters.bigGutter} />
      <ListWallets />
    </ViewContainer>
  );
};

Dashboard.propTypes = { profitsResource: PropTypes.object.isRequired };

Dashboard.defaultProps = {
  profitsResource: profits,
};
