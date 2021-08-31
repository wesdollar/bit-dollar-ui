import React from 'react';
import { render } from '@testing-library/react';
import { BasicTru } from './tru.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicTru />);
  const rendered = getByTestId("tru-container");
  expect(rendered).toBeTruthy();
});
