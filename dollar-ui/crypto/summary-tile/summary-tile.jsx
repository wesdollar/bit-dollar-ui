import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import InputIcon from "@material-ui/icons/Input";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import { colors } from "@wesdollar/dollar-ui.constants.colors";
import { Tile } from "@wesdollar/dollar-ui.ui.tile";
import { styles } from "@wesdollar/dollar-ui.constants.styles";
import { Space } from "@wesdollar/dollar-ui.ui.space";
import { Text } from "@wesdollar/dollar-ui.text.text";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RemoveIcon from "@material-ui/icons/Remove";
import { fontSizes } from "@wesdollar/dollar-ui.constants.font-sizes";
import { profits as profitsMockData } from "@wesdollar/dollar-ui.test-data.crypto.resources.profits";
import { NumberDisplay } from "@wesdollar/dollar-ui.ui.number-display";

const iconKey = "icon";
const iconFontSize = fontSizes.small;

const getSign = (value, type = "color") => {
  const sign = Math.sign(value);

  if (sign === 1) {
    return type === iconKey ? <ArrowDropUpIcon /> : colors.green;
  }

  if (sign === -1) {
    return type === iconKey ? <ArrowDropDownIcon /> : colors.red;
  }

  if (sign === 0) {
    return type === iconKey ? <RemoveIcon /> : colors.grey;
  }
};

const Container = styled.div`
  ${styles.fontStyles}

  * {
    display: flex;
  }

  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;

    * {
      align-items: center;
    }
  }

  .profit,
  .gains {
    color: ${({ profit }) => getSign(profit)};
    font-size: ${fontSizes.large};
  }
`;

const iconSize = "small";

export const SummaryTile = ({
  totalInvestment,
  currentValue,
  profit,
  gains,
  stealthMode,
}) => {
  return (
    <Tile>
      <Container profit={profit} data-testid="summary-tile-container">
        <div className="flex">
          <div className="profit">
            <AttachMoneyIcon fontSize={iconSize} />
            <NumberDisplay>{profit}</NumberDisplay>
          </div>
          <div className="gains">
            {getSign(gains, iconKey)}
            <NumberDisplay>{gains}</NumberDisplay>
          </div>
        </div>
        {!stealthMode && (
          <>
            <Space height="8px" />
            <div className="flex">
              <div className="current-value">
                <Text variant="secondary">
                  <AttachMoneyIcon style={{ fontSize: iconFontSize }} />
                  <NumberDisplay>{currentValue}</NumberDisplay>
                </Text>
              </div>
              <div className="total-investment">
                <Text variant="secondary">
                  <InputIcon style={{ fontSize: iconFontSize }} />
                  <Space width="8px" height="0" />
                  <NumberDisplay>{totalInvestment}</NumberDisplay>
                </Text>
              </div>
            </div>
          </>
        )}
      </Container>
    </Tile>
  );
};

SummaryTile.propTypes = {
  totalInvestment: PropTypes.number.isRequired,
  currentValue: PropTypes.number.isRequired,
  profit: PropTypes.number.isRequired,
  gains: PropTypes.number.isRequired,
  stealthMode: PropTypes.bool,
};

const { totalInvestment, currentValue, profit, gains } = profitsMockData.meta;

SummaryTile.defaultProps = {
  totalInvestment,
  currentValue,
  profit,
  gains,
};
