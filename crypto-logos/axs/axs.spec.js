import React from 'react';
import { render } from '@testing-library/react';
import { BasicAxs } from './axs.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicAxs />);
  const rendered = getByTestId("axs-container");
  expect(rendered).toBeTruthy();
});
