import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Eth } from "@wesdollar/crypto-logos.eth";
import { Uni } from "@wesdollar/crypto-logos.uni";
import { Xlm } from "@wesdollar/crypto-logos.xlm";
import { Text } from "@wesdollar/dollar-ui.text.text";
import { SecondaryText } from "@wesdollar/dollar-ui.text.secondary-text";
import { Space } from "@wesdollar/dollar-ui.ui.space";
import { gutters } from "@wesdollar/dollar-ui.constants.gutters";
import InputIcon from "@material-ui/icons/Input";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import { fontSizes } from "@wesdollar/dollar-ui.constants.font-sizes";
import { NumberDisplay } from "@wesdollar/dollar-ui.ui.number-display";

const getCoinLogo = (coinCode) => {
  let Component;

  switch (coinCode) {
    case "AMP":
      Component = <Eth />;
      break;

    case "ETH":
      Component = <Eth />;
      break;

    case "UNI":
      Component = <Uni />;
      break;

    case "XLM":
      Component = <Xlm />;
      break;

    default:
      Component = <Eth />;
      break;
  }

  return Component;
};

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${gutters.bigGutter};

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
    margin-right: ${gutters.gutter};
  }

  .info {
    flex-wrap: wrap;
  }

  .money {
    flex-basis: 100%;
  }
`;

const iconFontSize = fontSizes.small;

export const WalletSummary = ({
  coinCode,
  totalCoin,
  totalInvestment,
  currentValue,
}) => {
  return (
    <Container data-testid="wallet-summary-container">
      <div className="logo">{getCoinLogo(coinCode)}</div>
      <div className="info">
        <Text size="large">{coinCode}</Text>
        <Space height="0" width={gutters.smallGutter} />
        <SecondaryText>
          <NumberDisplay decimalPlaces={4}>{totalCoin}</NumberDisplay>
        </SecondaryText>
        <Space height={gutters.bigGutter} />
        <div className="money">
          <Text size="small" variant="secondary">
            <AttachMoneyIcon style={{ fontSize: iconFontSize }} />
            <NumberDisplay>{currentValue}</NumberDisplay>
            <Space height="0" width={gutters.smallGutter} />
            <InputIcon style={{ fontSize: iconFontSize }} />
            <Space height="0" width={"6px"} />
            <NumberDisplay>{totalInvestment}</NumberDisplay>
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
};

WalletSummary.defaultProps = {
  coinCode: "AMP",
  totalCoin: 17543,
  totalInvestment: 1050,
  currentValue: 1623,
};
