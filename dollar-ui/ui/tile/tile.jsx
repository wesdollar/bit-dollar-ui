import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { gutters } from "@wesdollar/dollar-ui.constants.gutters";
import { styles } from "@wesdollar/dollar-ui.constants.styles";
import { colors } from "@wesdollar/dollar-ui.constants.colors";
import { propTypes } from "@wesdollar/dollar-ui.constants.prop-types";

const TileContainer = styled.div`
  padding: ${gutters.gutter};
  box-sizing: border-box;
  border-radius: ${styles.borderRadius};
  box-shadow: ${styles.boxShadow};
  border: ${styles.border};
  background: ${colors.secondaryBlack};
  color: ${colors.white};
`;

export const Tile = ({ children, className }) => {
  return (
    <TileContainer className={className} data-testid="tile-container">
      {children}
    </TileContainer>
  );
};

const { children } = propTypes;

Tile.propTypes = {
  children,
};

Tile.defaultProps = {};
