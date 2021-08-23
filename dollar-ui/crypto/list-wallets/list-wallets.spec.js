import React from "react";
import { render } from "@testing-library/react";
import { BasicListWallets } from "./list-wallets.composition";

it("should render", () => {
  const { getByTestId } = render(<BasicListWallets />);
  const rendered = getByTestId("tile-container");
  expect(rendered).toBeTruthy();
});
