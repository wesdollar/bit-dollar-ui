import React from 'react';
import { render } from '@testing-library/react';
import { BasicNu } from './nu.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicNu />);
  const rendered = getByTestId("nu-container");
  expect(rendered).toBeTruthy();
});
