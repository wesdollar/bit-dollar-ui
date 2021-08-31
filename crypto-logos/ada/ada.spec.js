import React from 'react';
import { render } from '@testing-library/react';
import { BasicAda } from './ada.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicAda />);
  const rendered = getByTestId("ada-container");
  expect(rendered).toBeTruthy();
});
