import React from 'react';
import { render } from '@testing-library/react';
import { BasicSummaryTile } from './summary-tile.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicSummaryTile />);
  const rendered = getByTestId("summary-tile-container");
  expect(rendered).toBeTruthy();
});
