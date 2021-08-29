import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const CenteredViewport = (props) => {
  return <Container {...props}>{props.children}</Container>;
};

CenteredViewport.propTypes = {
  ["data-testid"]: PropTypes.string,
};

CenteredViewport.defaultProps = {
  ["data-testid"]: "centered-viewport-container",
};
