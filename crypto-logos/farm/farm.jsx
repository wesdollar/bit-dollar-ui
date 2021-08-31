import React from "react";
import logo from "./farm.png";

export const Farm = () => {
  return (
    <div data-testid="farm-container">
      <img src={logo} alt="FARM logo" />
    </div>
  );
};