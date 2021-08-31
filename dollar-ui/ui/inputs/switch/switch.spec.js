import React from 'react';
import { render } from '@testing-library/react';
import { BasicSwitch } from './switch.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicSwitch />);
  const rendered = getByTestId("switch-container");
  expect(rendered).toBeTruthy();
});
