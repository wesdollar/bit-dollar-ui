import React from 'react';
import { render } from '@testing-library/react';
import { BasicOrn } from './orn.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicOrn />);
  const rendered = getByTestId("orn-container");
  expect(rendered).toBeTruthy();
});
