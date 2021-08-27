import React from 'react';
import { render } from '@testing-library/react';
import { BasicLogoPngMd } from './logo-png-md.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicLogoPngMd />);
  const rendered = getByTestId("logo-png-md-container");
  expect(rendered).toBeTruthy();
});
