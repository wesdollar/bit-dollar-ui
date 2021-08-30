import React from "react";
import styled from "styled-components";
import { ViewContainer } from "@wesdollar/dollar-ui.ui.view-container/dist";
import { CenteredViewport } from "@wesdollar/dollar-ui.ui.centered-viewport/dist";
import { colors } from "@wesdollar/dollar-crypto.dollar-crypto.constants.colors";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 550px;
  flex-wrap: wrap;

  .MuiSvgIcon-root {
    fill: ${colors.blackAccent};
  }
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
