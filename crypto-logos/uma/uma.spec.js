import React from 'react';
import { render } from '@testing-library/react';
import { BasicUma } from './uma.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicUma />);
  const rendered = getByTestId("uma-container");
  expect(rendered).toBeTruthy();
});
