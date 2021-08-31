import React from 'react';
import { render } from '@testing-library/react';
import { BasicAave } from './aave.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicAave />);
  const rendered = getByTestId("aave-container");
  expect(rendered).toBeTruthy();
});
