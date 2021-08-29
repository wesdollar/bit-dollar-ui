import React from 'react';
import { render } from '@testing-library/react';
import { BasicHeadingPrimary } from './heading-primary.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicHeadingPrimary />);
  const rendered = getByTestId("heading-primary-container");
  expect(rendered).toBeTruthy();
});
