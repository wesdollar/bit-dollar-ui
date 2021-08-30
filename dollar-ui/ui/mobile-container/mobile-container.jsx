import React from "react";
import styled from "styled-components";
import { ViewContainer } from "@wesdollar/dollar-ui.ui.view-container/dist";
import { CenteredViewport } from "@wesdollar/dollar-ui.ui.centered-viewport/dist";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 550px;
`;

export const MobileContainer = ({ children, className }) => {
  return (
    <CenteredViewport>
      <ViewContainer>
        <Container
          data-testid="mobile-container-container"
          className={className}
        >
          {children}
        </Container>
      </ViewContainer>
    </CenteredViewport>
  );
};
