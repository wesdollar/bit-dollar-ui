import React from 'react';
import { render } from '@testing-library/react';
import { BasicAtom } from './atom.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicAtom />);
  const rendered = getByTestId("atom-container");
  expect(rendered).toBeTruthy();
});
