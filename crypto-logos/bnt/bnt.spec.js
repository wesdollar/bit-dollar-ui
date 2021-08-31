import React from 'react';
import { render } from '@testing-library/react';
import { BasicBnt } from './bnt.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicBnt />);
  const rendered = getByTestId("bnt-container");
  expect(rendered).toBeTruthy();
});
