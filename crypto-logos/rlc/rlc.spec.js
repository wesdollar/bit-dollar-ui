import React from 'react';
import { render } from '@testing-library/react';
import { BasicRlc } from './rlc.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicRlc />);
  const rendered = getByTestId("rlc-container");
  expect(rendered).toBeTruthy();
});
