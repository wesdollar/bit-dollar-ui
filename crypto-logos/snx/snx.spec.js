import React from 'react';
import { render } from '@testing-library/react';
import { BasicSnx } from './snx.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicSnx />);
  const rendered = getByTestId("snx-container");
  expect(rendered).toBeTruthy();
});
