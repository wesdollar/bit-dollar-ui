import React from 'react';
import { render } from '@testing-library/react';
import { BasicBand } from './band.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicBand />);
  const rendered = getByTestId("band-container");
  expect(rendered).toBeTruthy();
});
