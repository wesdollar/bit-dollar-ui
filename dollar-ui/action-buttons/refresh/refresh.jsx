import React from "react";
import styled from "styled-components";
import SyncIcon from "@material-ui/icons/Sync";

const Container = styled.div`
  display: flex;
  flex: 0 0 100%;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`;

export const Refresh = () => {
  const refresh = () => location.reload();

  return (
    <Container data-testid="refresh-container" onClick={refresh}>
      <SyncIcon fontSize="large" />
    </Container>
  );
};
