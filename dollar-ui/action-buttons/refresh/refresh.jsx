import React, { useState } from "react";
import styled from "styled-components";
import SyncIcon from "@material-ui/icons/Sync";
import { Loading } from "@wesdollar/dollar-ui.ui.loading";

const Container = styled.div`
  display: flex;
  flex: 0 0 100%;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`;

export const Refresh = () => {
  const [isLoading, setIsLoading] = useState(false);

  const refresh = () => {
    setIsLoading(true);
    location.reload();
  };

  return (
    <Loading isLoading={isLoading}>
      <Container data-testid="refresh-container" onClick={refresh}>
        <SyncIcon fontSize="large" />
      </Container>
    </Loading>
  );
};
