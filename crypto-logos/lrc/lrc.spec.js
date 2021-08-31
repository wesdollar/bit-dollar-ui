import React from 'react';
import { render } from '@testing-library/react';
import { BasicLrc } from './lrc.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicLrc />);
  const rendered = getByTestId("lrc-container");
  expect(rendered).toBeTruthy();
});
