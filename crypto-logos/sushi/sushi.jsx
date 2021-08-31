import React from "react";
import logo from "./sushi.png";

export const Sushi = () => {
  return (
    <div data-testid="sushi-container">
      <img src={logo} alt="SUSHI logo" />
    </div>
  );
};