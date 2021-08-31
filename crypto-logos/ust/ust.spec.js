import React from 'react';
import { render } from '@testing-library/react';
import { BasicUst } from './ust.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicUst />);
  const rendered = getByTestId("ust-container");
  expect(rendered).toBeTruthy();
});
