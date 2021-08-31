import React from 'react';
import { render } from '@testing-library/react';
import { BasicBal } from './bal.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicBal />);
  const rendered = getByTestId("bal-container");
  expect(rendered).toBeTruthy();
});
