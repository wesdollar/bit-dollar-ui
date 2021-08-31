import React from 'react';
import { render } from '@testing-library/react';
import { BasicWalletSummary } from './wallet-summary.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicWalletSummary />);
  const rendered = getByTestId("wallet-summary-container");
  expect(rendered).toBeTruthy();
});
