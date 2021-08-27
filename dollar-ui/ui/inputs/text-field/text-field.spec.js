import React from 'react';
import { render } from '@testing-library/react';
import { BasicTextField } from './text-field.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicTextField />);
  const rendered = getByTestId("text-field-container");
  expect(rendered).toBeTruthy();
});
