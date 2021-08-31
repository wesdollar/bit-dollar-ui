import React from 'react';
import { render } from '@testing-library/react';
import { BasicDash } from './dash.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicDash />);
  const rendered = getByTestId("dash-container");
  expect(rendered).toBeTruthy();
});
