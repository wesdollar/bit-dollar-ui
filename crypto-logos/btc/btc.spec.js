import React from 'react';
import { render } from '@testing-library/react';
import { BasicBtc } from './btc.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicBtc />);
  const rendered = getByTestId("btc-container");
  expect(rendered).toBeTruthy();
});
