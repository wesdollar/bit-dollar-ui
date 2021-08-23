import React from 'react';
import { render } from '@testing-library/react';
import { BasicSpace } from './space.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicSpace />);
  const rendered = getByTestId("space-container");
  expect(rendered).toBeTruthy();
});
