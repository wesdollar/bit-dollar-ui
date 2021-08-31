import React from "react";
import logo from "./pax.png";

export const Pax = () => {
  return (
    <div data-testid="pax-container">
      <img src={logo} alt="PAX logo" />
    </div>
  );
};