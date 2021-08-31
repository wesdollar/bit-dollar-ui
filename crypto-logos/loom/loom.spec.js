import React from 'react';
import { render } from '@testing-library/react';
import { BasicLoom } from './loom.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicLoom />);
  const rendered = getByTestId("loom-container");
  expect(rendered).toBeTruthy();
});
