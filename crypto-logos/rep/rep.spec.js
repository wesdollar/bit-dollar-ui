import React from 'react';
import { render } from '@testing-library/react';
import { BasicRep } from './rep.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicRep />);
  const rendered = getByTestId("rep-container");
  expect(rendered).toBeTruthy();
});
