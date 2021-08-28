import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const CenteredHorz = ({ children }) => {
  return (
    <StyledContainer data-testid="centered-horz-container">
      {children}
    </StyledContainer>
  );
};
