import React from 'react';
import { render } from '@testing-library/react';
import { BasicEth } from './eth.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicEth />);
  const rendered = getByTestId("eth-container");
  expect(rendered).toBeTruthy();
});
