import React from 'react';
import { render } from '@testing-library/react';
import { BasicFet } from './fet.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicFet />);
  const rendered = getByTestId("fet-container");
  expect(rendered).toBeTruthy();
});
