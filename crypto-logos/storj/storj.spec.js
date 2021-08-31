import React from 'react';
import { render } from '@testing-library/react';
import { BasicStorj } from './storj.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicStorj />);
  const rendered = getByTestId("storj-container");
  expect(rendered).toBeTruthy();
});
