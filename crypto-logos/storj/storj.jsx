import React from "react";
import logo from "./storj.png";

export const Storj = () => {
  return (
    <div data-testid="storj-container">
      <img src={logo} alt="STORJ logo" />
    </div>
  );
};