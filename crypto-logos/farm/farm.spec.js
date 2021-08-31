import React from 'react';
import { render } from '@testing-library/react';
import { BasicFarm } from './farm.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicFarm />);
  const rendered = getByTestId("farm-container");
  expect(rendered).toBeTruthy();
});
