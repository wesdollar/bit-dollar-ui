import React from 'react';
import { render } from '@testing-library/react';
import { BasicLoading } from './loading.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicLoading />);
  const rendered = getByTestId("loading-container");
  expect(rendered).toBeTruthy();
});
