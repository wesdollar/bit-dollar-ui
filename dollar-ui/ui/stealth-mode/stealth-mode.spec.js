import React from 'react';
import { render } from '@testing-library/react';
import { BasicStealthMode } from './stealth-mode.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicStealthMode />);
  const rendered = getByTestId("stealth-mode-container");
  expect(rendered).toBeTruthy();
});
