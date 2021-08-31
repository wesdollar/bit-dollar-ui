import React from "react";
import logo from "./mask.png";

export const Mask = () => {
  return (
    <div data-testid="mask-container">
      <img src={logo} alt="MASK logo" />
    </div>
  );
};