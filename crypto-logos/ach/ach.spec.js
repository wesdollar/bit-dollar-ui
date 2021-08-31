import React from 'react';
import { render } from '@testing-library/react';
import { BasicAch } from './ach.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicAch />);
  const rendered = getByTestId("ach-container");
  expect(rendered).toBeTruthy();
});
