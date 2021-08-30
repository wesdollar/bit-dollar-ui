import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { CircularProgress } from "@material-ui/core";
import { materialUiTheme } from "@wesdollar/dollar-crypto.dollar-crypto.constants.material-ui-theme";
import { ThemeProvider } from "@material-ui/styles";

const Container = styled.div`
  ${({ inline }) => {
    if (!inline) {
      return `
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
      `;
    }
  }}
`;

export const Loading = (props) => {
  const { children, isLoading, inline, size } = props;

  if (!isLoading) {
    return children;
  }

  return (
    <ThemeProvider theme={materialUiTheme}>
      <Container inline={inline} data-testid={props["data-testid"]}>
        <CircularProgress size={size} />
      </Container>
    </ThemeProvider>
  );
};

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  ["data-testid"]: PropTypes.string,
  inline: PropTypes.bool,
  size: PropTypes.number,
};

Loading.defaultProps = {
  isLoading: true,
  ["data-testid"]: "loading-container",
  inline: false,
};
