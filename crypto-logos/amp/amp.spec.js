import React from 'react';
import { render } from '@testing-library/react';
import { BasicAmp } from './amp.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicAmp />);
  const rendered = getByTestId("amp-container");
  expect(rendered).toBeTruthy();
});
