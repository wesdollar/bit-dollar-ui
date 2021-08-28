import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const Container = styled.div`
  display: flex;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`;

export const Logout = ({ onClick }) => {
  return (
    <Container data-testid="logout-container" onClick={onClick}>
      <ExitToAppIcon fontSize="large" />
    </Container>
  );
};
