import React from 'react';
import { render } from '@testing-library/react';
import { BasicKeep } from './keep.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicKeep />);
  const rendered = getByTestId("keep-container");
  expect(rendered).toBeTruthy();
});
