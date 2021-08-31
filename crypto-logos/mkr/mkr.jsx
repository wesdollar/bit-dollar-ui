import React from "react";
import logo from "./mkr.png";

export const Mkr = () => {
  return (
    <div data-testid="mkr-container">
      <img src={logo} alt="MKR logo" />
    </div>
  );
};