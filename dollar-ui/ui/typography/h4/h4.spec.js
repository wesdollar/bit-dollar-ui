import React from 'react';
import { render } from '@testing-library/react';
import { BasicH4 } from './h4.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicH4 />);
  const rendered = getByTestId("h4-container");
  expect(rendered).toBeTruthy();
});
