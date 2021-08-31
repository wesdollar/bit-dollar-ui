import React from 'react';
import { render } from '@testing-library/react';
import { BasicMkr } from './mkr.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicMkr />);
  const rendered = getByTestId("mkr-container");
  expect(rendered).toBeTruthy();
});
