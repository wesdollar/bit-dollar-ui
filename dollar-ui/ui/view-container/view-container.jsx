import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { gutters } from "@wesdollar/dollar-ui.constants.gutters";

const Container = styled.div`
  padding: ${({ padding }) => padding};
  box-sizing: border-box;
`;

export const ViewContainer = ({ children, padding }) => {
  return (
    <Container padding={padding} data-testid="view-container-container">
      {children}
    </Container>
  );
};

ViewContainer.propTypes = {
  padding: PropTypes.string,
};

ViewContainer.defaultProps = {
  padding: gutters.gutter,
};
