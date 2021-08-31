import React from 'react';
import { render } from '@testing-library/react';
import { BasicIcp } from './icp.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicIcp />);
  const rendered = getByTestId("icp-container");
  expect(rendered).toBeTruthy();
});
