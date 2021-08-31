import React from "react";
import logo from "./band.png";

export const Band = () => {
  return (
    <div data-testid="band-container">
      <img src={logo} alt="BAND logo" />
    </div>
  );
};