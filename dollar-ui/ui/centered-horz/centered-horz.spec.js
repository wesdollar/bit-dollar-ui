import React from 'react';
import { render } from '@testing-library/react';
import { BasicCenteredHorz } from './centered-horz.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicCenteredHorz />);
  const rendered = getByTestId("centered-horz-container");
  expect(rendered).toBeTruthy();
});
