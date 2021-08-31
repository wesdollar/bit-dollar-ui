import React from 'react';
import { render } from '@testing-library/react';
import { BasicRly } from './rly.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicRly />);
  const rendered = getByTestId("rly-container");
  expect(rendered).toBeTruthy();
});
