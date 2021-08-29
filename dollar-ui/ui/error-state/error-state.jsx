import React from "react";
import { CenteredViewport } from "@wesdollar/dollar-ui.ui.centered-viewport";
import { Tile } from "@wesdollar/dollar-ui.ui.tile";
import { H4 } from "@wesdollar/dollar-ui.ui.typography.h4";
import { Body1 } from "@wesdollar/dollar-ui.ui.typography.body1";
import { Body2 } from "@wesdollar/dollar-ui.ui.typography.body2";
import { MobileContainer } from "@wesdollar/dollar-ui.ui.mobile-container";
import { Space } from "@wesdollar/dollar-ui.ui.space";

export const ErrorState = ({ children }) => {
  return (
    <CenteredViewport data-testid="error-state-container">
      <MobileContainer>
        <Tile>
          <H4 color={"primary"}>Something went wrong :(</H4>
          <Space height="28px" />
          <Body1>
            Don't worry, you didn't do anything wrong. We've been notified of
            the issue, and we'll take it from here.
          </Body1>
          <Body1>
            Try your request again or come back later to give it another go.
          </Body1>
          {Boolean(children) && <Body2>{children}</Body2>}
        </Tile>
      </MobileContainer>
    </CenteredViewport>
  );
};
