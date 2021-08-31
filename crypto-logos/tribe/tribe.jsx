import React from "react";
import logo from "./tribe.png";

export const Tribe = () => {
  return (
    <div data-testid="tribe-container">
      <img src={logo} alt="TRIBE logo" />
    </div>
  );
};