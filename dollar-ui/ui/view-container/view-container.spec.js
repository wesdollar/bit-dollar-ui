import React from 'react';
import { render } from '@testing-library/react';
import { BasicViewContainer } from './view-container.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicViewContainer />);
  const rendered = getByTestId("view-container-container");
  expect(rendered).toBeTruthy();
});
