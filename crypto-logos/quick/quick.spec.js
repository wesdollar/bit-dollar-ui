import React from 'react';
import { render } from '@testing-library/react';
import { BasicQuick } from './quick.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicQuick />);
  const rendered = getByTestId("quick-container");
  expect(rendered).toBeTruthy();
});
