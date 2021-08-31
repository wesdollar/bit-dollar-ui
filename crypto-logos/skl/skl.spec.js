import React from 'react';
import { render } from '@testing-library/react';
import { BasicSkl } from './skl.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicSkl />);
  const rendered = getByTestId("skl-container");
  expect(rendered).toBeTruthy();
});
