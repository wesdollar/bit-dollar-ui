import React from 'react';
import { render } from '@testing-library/react';
import { BasicNumberDisplay } from './number-display.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicNumberDisplay />);
  const rendered = getByTestId("number-display-container");
  expect(rendered).toBeTruthy();
});
