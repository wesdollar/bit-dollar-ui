import React from 'react';
import { render } from '@testing-library/react';
import { BasicTile } from './tile.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicTile />);
  const rendered = getByTestId("tile-container");
  expect(rendered).toBeTruthy();
});
