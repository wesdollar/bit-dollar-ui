import React from 'react';
import { render } from '@testing-library/react';
import { BasicRen } from './ren.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicRen />);
  const rendered = getByTestId("ren-container");
  expect(rendered).toBeTruthy();
});
