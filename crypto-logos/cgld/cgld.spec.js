import React from 'react';
import { render } from '@testing-library/react';
import { BasicCgld } from './cgld.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicCgld />);
  const rendered = getByTestId("cgld-container");
  expect(rendered).toBeTruthy();
});
