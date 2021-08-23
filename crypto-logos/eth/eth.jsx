import React from "react";
import logo from "./eth.png";

export const Eth = () => {
  return (
    <div data-testid="eth-container">
      <img src={logo} alt="Eth logo" />
    </div>
  );
};