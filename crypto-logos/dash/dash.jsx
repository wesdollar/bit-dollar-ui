import React from "react";
import logo from "./dash.png";

export const Dash = () => {
  return (
    <div data-testid="dash-container">
      <img src={logo} alt="DASH logo" />
    </div>
  );
};