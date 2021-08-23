import React from "react";
import { ListWallets } from "./list-wallets";
import { profits as profitsMock } from "@wesdollar/dollar-ui.test-data.crypto.resources.profits";

export const BasicListWallets = () => (
  <ListWallets profits={profitsMock.profits} />
);
