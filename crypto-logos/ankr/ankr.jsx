import React from "react";
import logo from "./ankr.png";

export const Ankr = () => {
  return (
    <div data-testid="ankr-container">
      <img src={logo} alt="ANKR logo" />
    </div>
  );
};