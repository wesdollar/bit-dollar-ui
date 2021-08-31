import React from 'react';
import { render } from '@testing-library/react';
import { BasicReq } from './req.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicReq />);
  const rendered = getByTestId("req-container");
  expect(rendered).toBeTruthy();
});
