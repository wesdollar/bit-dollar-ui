import React from "react";
import { Dashboard } from "./dashboard";
import { profits as profitResourceMock } from "@wesdollar/dollar-ui.test-data.crypto.resources.profits";

export const BasicDashboard = () => (
  <Dashboard profitsResource={profitResourceMock} isLoading={false} />
);
