import React from 'react';
import { render } from '@testing-library/react';
import { BasicChz } from './chz.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicChz />);
  const rendered = getByTestId("chz-container");
  expect(rendered).toBeTruthy();
});
