import React from 'react';
import { render } from '@testing-library/react';
import { BasicGtc } from './gtc.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicGtc />);
  const rendered = getByTestId("gtc-container");
  expect(rendered).toBeTruthy();
});
