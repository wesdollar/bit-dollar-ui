import React from 'react';
import { render } from '@testing-library/react';
import { BasicWsLogin } from './ws-login.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicWsLogin />);
  const rendered = getByTestId("ws-login-container");
  expect(rendered).toBeTruthy();
});
