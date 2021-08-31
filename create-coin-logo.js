const path = require("path");
const fs = require("fs");
const lodash = require("lodash");
const { capitalize } = require("lodash");

const directoryPath = path.join(__dirname, "crypto-logos/.assets");

const generateComponents = () => {
  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      return console.log("Unable to scan directory: " + err);
    }

    fs.writeFileSync(
      // `./dollar-ui/crypto/wallet-summary/test.jsx`,
      `./test.jsx`,
      `
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Text } from "@wesdollar/dollar-ui.text.text";
import { SecondaryText } from "@wesdollar/dollar-ui.text.secondary-text";
import { Space } from "@wesdollar/dollar-ui.ui.space";
import { gutters } from "@wesdollar/dollar-ui.constants.gutters";
import InputIcon from "@material-ui/icons/Input";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import { fontSizes } from "@wesdollar/dollar-ui.constants.font-sizes";
import { NumberDisplay } from "@wesdollar/dollar-ui.ui.number-display";
import { profits as profitsMockResource } from "@wesdollar/dollar-ui.test-data.crypto.resources.profits";
import { StealthMode } from "@wesdollar/dollar-ui.ui.stealth-mode";
import { capitalize } from "lodash";
import { LogoPngSm } from "@wesdollar/dollar-crypto.logo.logo-png-sm";
${files.map((file) => {
  const coin = path.basename(`${directoryPath}/${file}`, ".png");
  const coinCode = capitalize(coin);

  return `
import {${coinCode}} from "@wesdollar/crypto-logos.${coin}";`;
})}

const Container = styled.div\`
  display: flex;
  align-items: center;
  margin-bottom: \${gutters.gutter};

  &:last-of-type {
    margin-bottom: 0;
  }

  img {
    width: 50px;
    height: auto;
  }

  * {
    display: flex;
    align-items: center;
  }

  .logo {
    margin-right: \${gutters.gutter};
  }

  .info {
    flex-wrap: wrap;
  }

  .money {
    flex-basis: 100%;
  }
\`;

const iconFontSize = fontSizes.small;

export const WalletSummary = ({
  coinCode,
  totalCoin,
  totalInvestment,
  currentValue,
  currentCoinPrice,
  stealthMode,
}) => {
  const coinLogo = () => {
    const compMap = {
      ${files.map((file) => {
        const coin = path.basename(`${directoryPath}/${file}`, ".png");
        const coinCode = capitalize(coin);

        return `${coinCode}, `;
      })}
     };
    const coin = capitalize(coinCode);
    let Component;

    if (compMap.hasOwnProperty(coin)) {
      Component = compMap[coin];
    } else {
      Component = LogoPngSm;
    }

    return <Component />;
  };

  return (
    <Container data-testid="wallet-summary-container">
      <div className="logo">{coinLogo()}</div>
      <div className="info">
        <Text size="large">{coinCode}</Text>
        <Space height="0" width={gutters.smallerGutter} />
        <StealthMode stealthMode={stealthMode}>
          <SecondaryText>
            <NumberDisplay decimalPlaces={4}>{totalCoin}</NumberDisplay>
          </SecondaryText>
        </StealthMode>
        <Space height={gutters.gutter} />
        <div className="money">
          <Text size="small" variant="secondary">
            <AttachMoneyIcon style={{ fontSize: iconFontSize }} />
            <NumberDisplay>{currentCoinPrice}</NumberDisplay>
            <StealthMode stealthMode={stealthMode}>
              <Space height="0" width={gutters.smallGutter} />
              <AccountBalanceIcon style={{ fontSize: iconFontSize }} />
              <Space height="0" width={"6px"} />
              <NumberDisplay
                colorize={true}
                sign={Math.sign(currentValue - totalInvestment)}
              >
                {currentValue}
              </NumberDisplay>
              <Space height="0" width={gutters.smallGutter} />
              <InputIcon style={{ fontSize: iconFontSize }} />
              <Space height="0" width={"6px"} />
              <NumberDisplay>{totalInvestment}</NumberDisplay>
            </StealthMode>
          </Text>
        </div>
      </div>
    </Container>
  );
};

WalletSummary.propTypes = {
  coinCode: PropTypes.string.isRequired,
  totalCoin: PropTypes.number.isRequired,
  totalInvestment: PropTypes.number.isRequired,
  currentValue: PropTypes.number.isRequired,
  currentCoinPrice: PropTypes.number.isRequired,
  stealthMode: PropTypes.bool,
};

const { totalCoin, totalSpend, currentValue, currentCoinPrice } =
  profitsMockResource.profits[0].wallet;

WalletSummary.defaultProps = {
  coinCode: "WES",
  totalCoin,
  totalInvestment: totalSpend,
  currentValue,
  currentCoinPrice,
};
`
    );
  });
};

generateComponents();
