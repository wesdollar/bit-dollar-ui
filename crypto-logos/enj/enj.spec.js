import React from 'react';
import { render } from '@testing-library/react';
import { BasicEnj } from './enj.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicEnj />);
  const rendered = getByTestId("enj-container");
  expect(rendered).toBeTruthy();
});
