import React from "react";
import logo from "./omg.png";

export const Omg = () => {
  return (
    <div data-testid="omg-container">
      <img src={logo} alt="OMG logo" />
    </div>
  );
};