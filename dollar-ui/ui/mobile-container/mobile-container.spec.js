import React from 'react';
import { render } from '@testing-library/react';
import { BasicMobileContainer } from './mobile-container.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicMobileContainer />);
  const rendered = getByTestId("mobile-container-container");
  expect(rendered).toBeTruthy();
});
