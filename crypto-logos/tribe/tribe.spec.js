import React from 'react';
import { render } from '@testing-library/react';
import { BasicTribe } from './tribe.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicTribe />);
  const rendered = getByTestId("tribe-container");
  expect(rendered).toBeTruthy();
});
