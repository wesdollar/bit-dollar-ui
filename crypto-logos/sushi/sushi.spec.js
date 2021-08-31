import React from 'react';
import { render } from '@testing-library/react';
import { BasicSushi } from './sushi.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicSushi />);
  const rendered = getByTestId("sushi-container");
  expect(rendered).toBeTruthy();
});
