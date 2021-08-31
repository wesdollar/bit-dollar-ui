import React from 'react';
import { render } from '@testing-library/react';
import { BasicBat } from './bat.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicBat />);
  const rendered = getByTestId("bat-container");
  expect(rendered).toBeTruthy();
});
