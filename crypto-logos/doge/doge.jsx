import React from "react";
import logo from "./doge.png";

export const Doge = () => {
  return (
    <div data-testid="doge-container">
      <img src={logo} alt="DOGE logo" />
    </div>
  );
};