import React from 'react';
import { render } from '@testing-library/react';
import { BasicBch } from './bch.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicBch />);
  const rendered = getByTestId("bch-container");
  expect(rendered).toBeTruthy();
});
