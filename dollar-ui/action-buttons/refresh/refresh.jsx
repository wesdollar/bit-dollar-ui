import React, { useState } from "react";
import styled from "styled-components";
import SyncIcon from "@material-ui/icons/Sync";
import { Loading } from "@wesdollar/dollar-ui.ui.loading";

const Container = styled.div`
  display: flex;
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
    <Loading inline isLoading={isLoading} size={35}>
      <Container data-testid="refresh-container" onClick={refresh}>
        <SyncIcon fontSize="large" />
      </Container>
    </Loading>
  );
};
