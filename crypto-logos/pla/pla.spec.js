import React from 'react';
import { render } from '@testing-library/react';
import { BasicPla } from './pla.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicPla />);
  const rendered = getByTestId("pla-container");
  expect(rendered).toBeTruthy();
});
