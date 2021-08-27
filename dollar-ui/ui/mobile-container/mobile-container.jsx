import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 550px;
`;

export const MobileContainer = ({ children, className }) => {
  return (
    <Container data-testid="mobile-container-container" className={className}>
      {children}
    </Container>
  );
};
