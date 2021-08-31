import React from 'react';
import { render } from '@testing-library/react';
import { BasicOmg } from './omg.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicOmg />);
  const rendered = getByTestId("omg-container");
  expect(rendered).toBeTruthy();
});
