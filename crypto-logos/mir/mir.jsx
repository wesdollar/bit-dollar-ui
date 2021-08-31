import React from "react";
import logo from "./mir.png";

export const Mir = () => {
  return (
    <div data-testid="mir-container">
      <img src={logo} alt="MIR logo" />
    </div>
  );
};