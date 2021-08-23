import React from 'react';
import { render } from '@testing-library/react';
import { BasicText } from './text.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicText />);
  const rendered = getByTestId("text-container");
  expect(rendered).toBeTruthy();
});
