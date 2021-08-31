import React from 'react';
import { render } from '@testing-library/react';
import { BasicNmr } from './nmr.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicNmr />);
  const rendered = getByTestId("nmr-container");
  expect(rendered).toBeTruthy();
});
