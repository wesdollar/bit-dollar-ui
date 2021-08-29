import React from 'react';
import { render } from '@testing-library/react';
import { BasicBody2 } from './body2.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicBody2 />);
  const rendered = getByTestId("body2-container");
  expect(rendered).toBeTruthy();
});
