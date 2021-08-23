import React from "react";
import { render } from "@testing-library/react";
import { BasicDashboard } from "./dashboard.composition";

it("should render", () => {
  const { getByTestId } = render(<BasicDashboard />);
  const rendered = getByTestId("view-container-container");
  expect(rendered).toBeTruthy();
});
