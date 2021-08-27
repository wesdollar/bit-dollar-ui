import React from 'react';
import { render } from '@testing-library/react';
import { BasicSetKeys } from './set-keys.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicSetKeys />);
  const rendered = getByTestId("set-keys-container");
  expect(rendered).toBeTruthy();
});
