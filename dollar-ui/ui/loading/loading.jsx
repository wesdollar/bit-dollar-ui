import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { CircularProgress } from "@material-ui/core";

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

Loading.propTypes = { isLoading: PropTypes.bool.isRequired };

Loading.defaultProps = {
  isLoading: true,
};
