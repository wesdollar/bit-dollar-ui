import React from "react";
import logo from "./atom.png";

export const Atom = () => {
  return (
    <div data-testid="atom-container">
      <img src={logo} alt="ATOM logo" />
    </div>
  );
};