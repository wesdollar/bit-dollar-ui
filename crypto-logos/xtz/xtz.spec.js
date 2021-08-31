import React from 'react';
import { render } from '@testing-library/react';
import { BasicXtz } from './xtz.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicXtz />);
  const rendered = getByTestId("xtz-container");
  expect(rendered).toBeTruthy();
});
