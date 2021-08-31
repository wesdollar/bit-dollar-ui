import React from "react";
import logo from "./bal.png";

export const Bal = () => {
  return (
    <div data-testid="bal-container">
      <img src={logo} alt="BAL logo" />
    </div>
  );
};