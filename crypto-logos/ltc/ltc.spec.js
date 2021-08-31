import React from 'react';
import { render } from '@testing-library/react';
import { BasicLtc } from './ltc.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicLtc />);
  const rendered = getByTestId("ltc-container");
  expect(rendered).toBeTruthy();
});
