import React from 'react';
import { render } from '@testing-library/react';
import { BasicOgn } from './ogn.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicOgn />);
  const rendered = getByTestId("ogn-container");
  expect(rendered).toBeTruthy();
});
