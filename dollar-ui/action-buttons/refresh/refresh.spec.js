import React from 'react';
import { render } from '@testing-library/react';
import { BasicRefresh } from './refresh.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicRefresh />);
  const rendered = getByTestId("refresh-container");
  expect(rendered).toBeTruthy();
});
