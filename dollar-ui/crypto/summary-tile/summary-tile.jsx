import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { mockData } from "./mock-data";
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

const iconKey = "icon";

const getSign = (value, type = "color") => {
  const regexPattern = /%|,/g;

  if (type === iconKey) {
    value = value.replace(regexPattern, "");
    value = Number(value);
  } else {
    value = value.replace(regexPattern, "");
    value = Number(value);
  }

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

  .profit {
    color: ${({ profit }) => getSign(profit)};
  }

  .gains {
    color: ${({ profit }) => getSign(profit)};
  }
`;

const iconSize = "small";

export const SummaryTile = ({
  totalInvestment,
  currentValue,
  profit,
  gains,
}) => {
  return (
    <Tile>
      <Container profit={profit} data-testid="summary-tile-container">
        <div className="flex">
          <div className="profit">
            <AttachMoneyIcon fontSize={iconSize} />
            {profit}
          </div>
          <div className="gains">
            {getSign(gains, iconKey)}
            {gains}
          </div>
        </div>
        <Space />
        <div className="flex">
          <div className="current-value">
            <Text size="small" variant="secondary">
              <AttachMoneyIcon style={{ fontSize: "0.8rem" }} />
              {currentValue}
            </Text>
          </div>
          <div className="total-investment">
            <Text size="small" variant="secondary">
              <InputIcon style={{ fontSize: "0.8rem" }} />
              <Space width="8px" height="0" />
              {totalInvestment}
            </Text>
          </div>
        </div>
      </Container>
    </Tile>
  );
};

SummaryTile.propTypes = {
  totalInvestment: PropTypes.string.isRequired,
  currentValue: PropTypes.string.isRequired,
  profit: PropTypes.string.isRequired,
  gains: PropTypes.string.isRequired,
};

const { totalInvestment, currentValue, profit, gains } = mockData;

SummaryTile.defaultProps = {
  totalInvestment,
  currentValue,
  profit,
  gains,
};
