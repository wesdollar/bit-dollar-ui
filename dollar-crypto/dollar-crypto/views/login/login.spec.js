import React from 'react';
import { render } from '@testing-library/react';
import { BasicLogin } from './login.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicLogin />);
  const rendered = getByTestId("login-container");
  expect(rendered).toBeTruthy();
});
