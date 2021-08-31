import React from 'react';
import { render } from '@testing-library/react';
import { BasicZrx } from './zrx.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicZrx />);
  const rendered = getByTestId("zrx-container");
  expect(rendered).toBeTruthy();
});
