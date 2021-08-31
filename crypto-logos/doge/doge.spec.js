import React from 'react';
import { render } from '@testing-library/react';
import { BasicDoge } from './doge.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicDoge />);
  const rendered = getByTestId("doge-container");
  expect(rendered).toBeTruthy();
});
