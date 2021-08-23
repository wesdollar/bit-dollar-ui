import React from 'react';
import { render } from '@testing-library/react';
import { BasicUni } from './uni.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicUni />);
  const rendered = getByTestId("uni-container");
  expect(rendered).toBeTruthy();
});
