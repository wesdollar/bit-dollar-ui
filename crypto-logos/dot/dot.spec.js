import React from 'react';
import { render } from '@testing-library/react';
import { BasicDot } from './dot.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicDot />);
  const rendered = getByTestId("dot-container");
  expect(rendered).toBeTruthy();
});
