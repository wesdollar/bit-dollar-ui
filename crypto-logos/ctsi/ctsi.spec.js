import React from 'react';
import { render } from '@testing-library/react';
import { BasicCtsi } from './ctsi.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicCtsi />);
  const rendered = getByTestId("ctsi-container");
  expect(rendered).toBeTruthy();
});
