import React from "react";
import logo from "./comp.png";

export const Comp = () => {
  return (
    <div data-testid="comp-container">
      <img src={logo} alt="COMP logo" />
    </div>
  );
};