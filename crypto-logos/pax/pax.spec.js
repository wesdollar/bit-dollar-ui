import React from 'react';
import { render } from '@testing-library/react';
import { BasicPax } from './pax.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicPax />);
  const rendered = getByTestId("pax-container");
  expect(rendered).toBeTruthy();
});
