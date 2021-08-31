import React from 'react';
import { render } from '@testing-library/react';
import { BasicUsdt } from './usdt.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicUsdt />);
  const rendered = getByTestId("usdt-container");
  expect(rendered).toBeTruthy();
});
