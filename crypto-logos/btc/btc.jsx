import React from "react";
import logo from "./btc.png";

export const Btc = () => {
  return (
    <div data-testid="btc-container">
      <img src={logo} alt="BTC logo" />
    </div>
  );
};