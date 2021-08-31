import React from 'react';
import { render } from '@testing-library/react';
import { BasicTrb } from './trb.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicTrb />);
  const rendered = getByTestId("trb-container");
  expect(rendered).toBeTruthy();
});
