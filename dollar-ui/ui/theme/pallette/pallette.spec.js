import React from 'react';
import { render } from '@testing-library/react';
import { BasicPallette } from './pallette.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicPallette />);
  const rendered = getByTestId("pallette-container");
  expect(rendered).toBeTruthy();
});
