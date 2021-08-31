import React from 'react';
import { render } from '@testing-library/react';
import { BasicComp } from './comp.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicComp />);
  const rendered = getByTestId("comp-container");
  expect(rendered).toBeTruthy();
});
