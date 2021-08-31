import React from "react";
import logo from "./quick.png";

export const Quick = () => {
  return (
    <div data-testid="quick-container">
      <img src={logo} alt="QUICK logo" />
    </div>
  );
};