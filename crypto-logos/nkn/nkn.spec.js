import React from 'react';
import { render } from '@testing-library/react';
import { BasicNkn } from './nkn.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicNkn />);
  const rendered = getByTestId("nkn-container");
  expect(rendered).toBeTruthy();
});
