import React from 'react';
import { render } from '@testing-library/react';
import { BasicButton } from './button.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicButton />);
  const rendered = getByTestId("button-container");
  expect(rendered).toBeTruthy();
});
