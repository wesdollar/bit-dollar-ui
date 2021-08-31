import React from 'react';
import { render } from '@testing-library/react';
import { BasicFil } from './fil.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicFil />);
  const rendered = getByTestId("fil-container");
  expect(rendered).toBeTruthy();
});
