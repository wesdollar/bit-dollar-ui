import React from "react";
import PropTypes from "prop-types";
import { WalletSummary } from "@wesdollar/dollar-ui.crypto.wallet-summary";
import { Tile } from "@wesdollar/dollar-ui.ui.tile";
import { profits as profitsMock } from "@wesdollar/dollar-ui.test-data.crypto.resources.profits";

export const ListWallets = ({ profits, stealthMode }) => {
  return (
    <Tile>
      {profits.map((profit, index) => {
        const {
          coinCode,
          totalSpend,
          totalCoin,
          currentValue,
          currentCoinPrice,
        } = profit.wallet;

        return (
          <WalletSummary
            key={`wallet-summary-${index}`}
            coinCode={coinCode}
            totalCoin={totalCoin}
            totalInvestment={totalSpend}
            currentValue={currentValue}
            currentCoinPrice={currentCoinPrice}
            stealthMode={stealthMode}
          />
        );
      })}
    </Tile>
  );
};

ListWallets.propTypes = {
  profits: PropTypes.array.isRequired,
  stealthMode: PropTypes.bool,
};

ListWallets.defaultProps = {
  profits: profitsMock.profits,
};
