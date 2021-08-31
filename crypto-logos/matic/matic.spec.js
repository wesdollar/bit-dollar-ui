import React from 'react';
import { render } from '@testing-library/react';
import { BasicMatic } from './matic.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicMatic />);
  const rendered = getByTestId("matic-container");
  expect(rendered).toBeTruthy();
});
