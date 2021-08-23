import React from "react";
import { render } from "@testing-library/react";
import { BasicSecondaryText } from "./secondary-text.composition";

it("should render", () => {
  const { getByText } = render(<BasicSecondaryText />);
  const rendered = getByText("Hello World");
  expect(rendered).toBeTruthy();
});
