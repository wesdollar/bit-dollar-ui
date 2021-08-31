import React from 'react';
import { render } from '@testing-library/react';
import { BasicKnc } from './knc.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicKnc />);
  const rendered = getByTestId("knc-container");
  expect(rendered).toBeTruthy();
});
