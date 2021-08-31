import React from 'react';
import { render } from '@testing-library/react';
import { BasicEos } from './eos.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicEos />);
  const rendered = getByTestId("eos-container");
  expect(rendered).toBeTruthy();
});
