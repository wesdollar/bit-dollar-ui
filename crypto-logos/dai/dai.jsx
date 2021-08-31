import React from "react";
import logo from "./dai.png";

export const Dai = () => {
  return (
    <div data-testid="dai-container">
      <img src={logo} alt="DAI logo" />
    </div>
  );
};