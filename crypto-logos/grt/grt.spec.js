import React from 'react';
import { render } from '@testing-library/react';
import { BasicGrt } from './grt.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicGrt />);
  const rendered = getByTestId("grt-container");
  expect(rendered).toBeTruthy();
});
