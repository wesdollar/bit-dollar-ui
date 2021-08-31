import React from 'react';
import { render } from '@testing-library/react';
import { BasicCrv } from './crv.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicCrv />);
  const rendered = getByTestId("crv-container");
  expect(rendered).toBeTruthy();
});
