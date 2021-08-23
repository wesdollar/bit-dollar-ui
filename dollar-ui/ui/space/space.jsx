import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { gutters } from "@wesdollar/dollar-ui.constants.gutters";

const Container = styled.div`
  display: block;
  height: ${(height) => height};
  width: ${(width) => width};
`;

export const Space = ({ children, height, width }) => (
  <Container data-testid={`space-container`} height={height} width={width}>
    {children}
  </Container>
);

Space.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
};

Space.defaultProps = {
  height: gutters.gutter,
  width: "0",
};
