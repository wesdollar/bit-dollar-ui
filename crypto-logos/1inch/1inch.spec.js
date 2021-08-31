import React from 'react';
import { render } from '@testing-library/react';
import { Basic1Inch } from './1inch.composition';

it('should render', () => {
  const { getByTestId } = render(<Basic1Inch />);
  const rendered = getByTestId("1inch-container");
  expect(rendered).toBeTruthy();
});
