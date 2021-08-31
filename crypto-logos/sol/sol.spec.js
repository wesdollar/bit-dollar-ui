import React from 'react';
import { render } from '@testing-library/react';
import { BasicSol } from './sol.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicSol />);
  const rendered = getByTestId("sol-container");
  expect(rendered).toBeTruthy();
});
