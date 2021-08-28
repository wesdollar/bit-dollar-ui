import React from 'react';
import { render } from '@testing-library/react';
import { BasicLogout } from './logout.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicLogout />);
  const rendered = getByTestId("logout-container");
  expect(rendered).toBeTruthy();
});
