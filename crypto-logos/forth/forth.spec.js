import React from 'react';
import { render } from '@testing-library/react';
import { BasicForth } from './forth.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicForth />);
  const rendered = getByTestId("forth-container");
  expect(rendered).toBeTruthy();
});
