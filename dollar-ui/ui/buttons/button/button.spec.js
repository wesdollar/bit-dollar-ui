import React from "react";
import { render } from "@testing-library/react";
import { BasicButton } from "./button.composition";

it("should render", () => {
  const { getAllByTestId } = render(<BasicButton />);
  const rendered = getAllByTestId("button-container");
  expect(rendered).toBeTruthy();
});
