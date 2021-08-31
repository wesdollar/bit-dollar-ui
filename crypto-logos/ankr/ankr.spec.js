import React from 'react';
import { render } from '@testing-library/react';
import { BasicAnkr } from './ankr.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicAnkr />);
  const rendered = getByTestId("ankr-container");
  expect(rendered).toBeTruthy();
});
