import React from "react";
import { render } from "@testing-library/react";
import { BasicSetKeys } from "./set-keys.composition";

it("should render", () => {
  const { getByText } = render(<BasicSetKeys />);
  const rendered = getByText("Continue");
  expect(rendered).toBeTruthy();
});
