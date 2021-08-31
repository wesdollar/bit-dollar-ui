import React from 'react';
import { render } from '@testing-library/react';
import { BasicBond } from './bond.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicBond />);
  const rendered = getByTestId("bond-container");
  expect(rendered).toBeTruthy();
});
