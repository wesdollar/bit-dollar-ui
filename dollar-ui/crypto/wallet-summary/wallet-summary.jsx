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
import { OneInch } from "@wesdollar/crypto-logos.1inch";
import { Aave } from "@wesdollar/crypto-logos.aave";
import { Ach } from "@wesdollar/crypto-logos.ach";
import { Ada } from "@wesdollar/crypto-logos.ada";
import { Algo } from "@wesdollar/crypto-logos.algo";
import { Amp } from "@wesdollar/crypto-logos.amp";
import { Ankr } from "@wesdollar/crypto-logos.ankr";
import { Atom } from "@wesdollar/crypto-logos.atom";
import { Axs } from "@wesdollar/crypto-logos.axs";
import { Bal } from "@wesdollar/crypto-logos.bal";
import { Band } from "@wesdollar/crypto-logos.band";
import { Bat } from "@wesdollar/crypto-logos.bat";
import { Bch } from "@wesdollar/crypto-logos.bch";
import { Bnt } from "@wesdollar/crypto-logos.bnt";
import { Bond } from "@wesdollar/crypto-logos.bond";
import { Btc } from "@wesdollar/crypto-logos.btc";
import { Cgld } from "@wesdollar/crypto-logos.cgld";
import { Chz } from "@wesdollar/crypto-logos.chz";
import { Clv } from "@wesdollar/crypto-logos.clv";
import { Comp } from "@wesdollar/crypto-logos.comp";
import { Crv } from "@wesdollar/crypto-logos.crv";
import { Ctsi } from "@wesdollar/crypto-logos.ctsi";
import { Dai } from "@wesdollar/crypto-logos.dai";
import { Dash } from "@wesdollar/crypto-logos.dash";
import { Doge } from "@wesdollar/crypto-logos.doge";
import { Dot } from "@wesdollar/crypto-logos.dot";
import { Enj } from "@wesdollar/crypto-logos.enj";
import { Eos } from "@wesdollar/crypto-logos.eos";
import { Etc } from "@wesdollar/crypto-logos.etc";
import { Eth } from "@wesdollar/crypto-logos.eth";
import { Farm } from "@wesdollar/crypto-logos.farm";
import { Fet } from "@wesdollar/crypto-logos.fet";
import { Fil } from "@wesdollar/crypto-logos.fil";
import { Forth } from "@wesdollar/crypto-logos.forth";
import { Grt } from "@wesdollar/crypto-logos.grt";
import { Gtc } from "@wesdollar/crypto-logos.gtc";
import { Icp } from "@wesdollar/crypto-logos.icp";
import { Iotx } from "@wesdollar/crypto-logos.iotx";
import { Keep } from "@wesdollar/crypto-logos.keep";
import { Knc } from "@wesdollar/crypto-logos.knc";
import { Loom } from "@wesdollar/crypto-logos.loom";
import { Lpt } from "@wesdollar/crypto-logos.lpt";
import { Lrc } from "@wesdollar/crypto-logos.lrc";
import { Ltc } from "@wesdollar/crypto-logos.ltc";
import { Mask } from "@wesdollar/crypto-logos.mask";
import { Matic } from "@wesdollar/crypto-logos.matic";
import { Mir } from "@wesdollar/crypto-logos.mir";
import { Mkr } from "@wesdollar/crypto-logos.mkr";
import { Mln } from "@wesdollar/crypto-logos.mln";
import { Nkn } from "@wesdollar/crypto-logos.nkn";
import { Nmr } from "@wesdollar/crypto-logos.nmr";
import { Nu } from "@wesdollar/crypto-logos.nu";
import { Ogn } from "@wesdollar/crypto-logos.ogn";
import { Omg } from "@wesdollar/crypto-logos.omg";
import { Orn } from "@wesdollar/crypto-logos.orn";
import { Oxt } from "@wesdollar/crypto-logos.oxt";
import { Pax } from "@wesdollar/crypto-logos.pax";
import { Pla } from "@wesdollar/crypto-logos.pla";
import { Poly } from "@wesdollar/crypto-logos.poly";
import { Qnt } from "@wesdollar/crypto-logos.qnt";
import { Quick } from "@wesdollar/crypto-logos.quick";
import { Rai } from "@wesdollar/crypto-logos.rai";
import { Ren } from "@wesdollar/crypto-logos.ren";
import { Rep } from "@wesdollar/crypto-logos.rep";
import { Req } from "@wesdollar/crypto-logos.req";
import { Rlc } from "@wesdollar/crypto-logos.rlc";
import { Rly } from "@wesdollar/crypto-logos.rly";
import { Skl } from "@wesdollar/crypto-logos.skl";
import { Snx } from "@wesdollar/crypto-logos.snx";
import { Sol } from "@wesdollar/crypto-logos.sol";
import { Storj } from "@wesdollar/crypto-logos.storj";
import { Sushi } from "@wesdollar/crypto-logos.sushi";
import { Trb } from "@wesdollar/crypto-logos.trb";
import { Tribe } from "@wesdollar/crypto-logos.tribe";
import { Tru } from "@wesdollar/crypto-logos.tru";
import { Uma } from "@wesdollar/crypto-logos.uma";
import { Uni } from "@wesdollar/crypto-logos.uni";
import { Usdt } from "@wesdollar/crypto-logos.usdt";
import { Ust } from "@wesdollar/crypto-logos.ust";
import { Xlm } from "@wesdollar/crypto-logos.xlm";
import { Xtz } from "@wesdollar/crypto-logos.xtz";
import { Zrx } from "@wesdollar/crypto-logos.zrx";

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${gutters.gutter};

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
  currentCoinPrice,
  stealthMode,
}) => {
  const coinLogo = () => {
    const compMap = {
      OneInch,
      Aave,
      Ach,
      Ada,
      Algo,
      Amp,
      Ankr,
      Atom,
      Axs,
      Bal,
      Band,
      Bat,
      Bch,
      Bnt,
      Bond,
      Btc,
      Cgld,
      Chz,
      Clv,
      Comp,
      Crv,
      Ctsi,
      Dai,
      Dash,
      Doge,
      Dot,
      Enj,
      Eos,
      Etc,
      Eth,
      Farm,
      Fet,
      Fil,
      Forth,
      Grt,
      Gtc,
      Icp,
      Iotx,
      Keep,
      Knc,
      Loom,
      Lpt,
      Lrc,
      Ltc,
      Mask,
      Matic,
      Mir,
      Mkr,
      Mln,
      Nkn,
      Nmr,
      Nu,
      Ogn,
      Omg,
      Orn,
      Oxt,
      Pax,
      Pla,
      Poly,
      Qnt,
      Quick,
      Rai,
      Ren,
      Rep,
      Req,
      Rlc,
      Rly,
      Skl,
      Snx,
      Sol,
      Storj,
      Sushi,
      Trb,
      Tribe,
      Tru,
      Uma,
      Uni,
      Usdt,
      Ust,
      Xlm,
      Xtz,
      Zrx,
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
