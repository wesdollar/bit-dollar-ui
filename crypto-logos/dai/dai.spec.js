import React from 'react';
import { render } from '@testing-library/react';
import { BasicDai } from './dai.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicDai />);
  const rendered = getByTestId("dai-container");
  expect(rendered).toBeTruthy();
});
