import React from "react";
import logo from "./dot.png";

export const Dot = () => {
  return (
    <div data-testid="dot-container">
      <img src={logo} alt="DOT logo" />
    </div>
  );
};