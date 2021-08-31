import React from 'react';
import { render } from '@testing-library/react';
import { BasicEtc } from './etc.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicEtc />);
  const rendered = getByTestId("etc-container");
  expect(rendered).toBeTruthy();
});
