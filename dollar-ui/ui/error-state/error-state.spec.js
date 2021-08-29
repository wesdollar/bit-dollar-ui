import React from 'react';
import { render } from '@testing-library/react';
import { BasicErrorState } from './error-state.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicErrorState />);
  const rendered = getByTestId("error-state-container");
  expect(rendered).toBeTruthy();
});
