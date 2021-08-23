import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { CircularProgress } from "@material-ui/core";
import { propTypes as propTypeConstants } from "@wesdollar/dollar-ui.constants.prop-types";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const Loading = ({ children, isLoading }) => {
  if (!isLoading) {
    return children;
  }

  return (
    <Container data-testid="loading-container">
      <CircularProgress />
    </Container>
  );
};

const { children } = propTypeConstants;

Loading.propTypes = { children, isLoading: PropTypes.bool.isRequired };

Loading.defaultProps = {
  isLoading: true,
};
