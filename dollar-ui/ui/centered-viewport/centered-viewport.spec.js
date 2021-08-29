import React from 'react';
import { render } from '@testing-library/react';
import { BasicCenteredViewport } from './centered-viewport.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicCenteredViewport />);
  const rendered = getByTestId("centered-viewport-container");
  expect(rendered).toBeTruthy();
});
