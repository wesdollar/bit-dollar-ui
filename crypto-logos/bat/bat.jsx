import React from "react";
import logo from "./bat.png";

export const Bat = () => {
  return (
    <div data-testid="bat-container">
      <img src={logo} alt="BAT logo" />
    </div>
  );
};
