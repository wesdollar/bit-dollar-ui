import React from 'react';
import { render } from '@testing-library/react';
import { BasicBody1 } from './body1.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicBody1 />);
  const rendered = getByTestId("body1-container");
  expect(rendered).toBeTruthy();
});
