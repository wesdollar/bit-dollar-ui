import React from 'react';
import { render } from '@testing-library/react';
import { BasicMir } from './mir.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicMir />);
  const rendered = getByTestId("mir-container");
  expect(rendered).toBeTruthy();
});
