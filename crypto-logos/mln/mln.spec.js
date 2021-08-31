import React from 'react';
import { render } from '@testing-library/react';
import { BasicMln } from './mln.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicMln />);
  const rendered = getByTestId("mln-container");
  expect(rendered).toBeTruthy();
});
