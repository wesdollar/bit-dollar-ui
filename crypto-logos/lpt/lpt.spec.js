import React from 'react';
import { render } from '@testing-library/react';
import { BasicLpt } from './lpt.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicLpt />);
  const rendered = getByTestId("lpt-container");
  expect(rendered).toBeTruthy();
});
