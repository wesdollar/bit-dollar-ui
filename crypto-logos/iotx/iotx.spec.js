import React from 'react';
import { render } from '@testing-library/react';
import { BasicIotx } from './iotx.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicIotx />);
  const rendered = getByTestId("iotx-container");
  expect(rendered).toBeTruthy();
});
