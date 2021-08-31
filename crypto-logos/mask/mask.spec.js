import React from 'react';
import { render } from '@testing-library/react';
import { BasicMask } from './mask.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicMask />);
  const rendered = getByTestId("mask-container");
  expect(rendered).toBeTruthy();
});
