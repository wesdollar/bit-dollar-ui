import React from "react";
import logo from "./rep.png";

export const Rep = () => {
  return (
    <div data-testid="rep-container">
      <img src={logo} alt="REP logo" />
    </div>
  );
};