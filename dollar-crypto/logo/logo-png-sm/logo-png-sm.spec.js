import React from 'react';
import { render } from '@testing-library/react';
import { BasicLogoPngSm } from './logo-png-sm.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicLogoPngSm />);
  const rendered = getByTestId("logo-png-sm-container");
  expect(rendered).toBeTruthy();
});
