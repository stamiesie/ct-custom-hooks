import React from 'react';
import { render, screen } from '@testing-library/react';

describe('AllCharacters custom hook', () => {
  it('renders a list of characters to the page', async () => {
    render(
      <AllCharacters />
    )
  })
});