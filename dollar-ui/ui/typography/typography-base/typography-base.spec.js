import React from 'react';
import { render } from '@testing-library/react';
import { BasicTypographyBase } from './typography-base.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicTypographyBase />);
  const rendered = getByTestId("typography-base-container");
  expect(rendered).toBeTruthy();
});
