import React from 'react';
import { render } from '@testing-library/react';
import { BasicClv } from './clv.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicClv />);
  const rendered = getByTestId("clv-container");
  expect(rendered).toBeTruthy();
});
