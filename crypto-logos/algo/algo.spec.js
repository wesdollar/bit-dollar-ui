import React from 'react';
import { render } from '@testing-library/react';
import { BasicAlgo } from './algo.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicAlgo />);
  const rendered = getByTestId("algo-container");
  expect(rendered).toBeTruthy();
});
