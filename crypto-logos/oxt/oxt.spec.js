import React from 'react';
import { render } from '@testing-library/react';
import { BasicOxt } from './oxt.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicOxt />);
  const rendered = getByTestId("oxt-container");
  expect(rendered).toBeTruthy();
});
