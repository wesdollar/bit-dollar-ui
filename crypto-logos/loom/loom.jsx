import React from "react";
import logo from "./loom.png";

export const Loom = () => {
  return (
    <div data-testid="loom-container">
      <img src={logo} alt="LOOM logo" />
    </div>
  );
};