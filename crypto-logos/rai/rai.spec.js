import React from 'react';
import { render } from '@testing-library/react';
import { BasicRai } from './rai.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicRai />);
  const rendered = getByTestId("rai-container");
  expect(rendered).toBeTruthy();
});
