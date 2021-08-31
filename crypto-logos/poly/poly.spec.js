import React from 'react';
import { render } from '@testing-library/react';
import { BasicPoly } from './poly.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicPoly />);
  const rendered = getByTestId("poly-container");
  expect(rendered).toBeTruthy();
});
