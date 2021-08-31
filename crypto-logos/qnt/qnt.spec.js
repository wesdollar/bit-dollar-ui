import React from 'react';
import { render } from '@testing-library/react';
import { BasicQnt } from './qnt.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicQnt />);
  const rendered = getByTestId("qnt-container");
  expect(rendered).toBeTruthy();
});
