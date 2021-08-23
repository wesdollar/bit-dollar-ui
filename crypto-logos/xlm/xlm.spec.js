import React from 'react';
import { render } from '@testing-library/react';
import { BasicXlm } from './xlm.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicXlm />);
  const rendered = getByTestId("xlm-container");
  expect(rendered).toBeTruthy();
});
