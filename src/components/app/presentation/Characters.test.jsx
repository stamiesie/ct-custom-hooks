import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import mockCharacterData from '../../../../fixtures/AllCharacters.json';
import Characters from './Characters';
import { MemoryRouter } from 'react-router-dom';

const server = setupServer(
  rest.get('https://hey-arnold-api.herokuapp.com/api/v1/characters', 
    (req, res, ctx) => {
      return res(ctx.json(mockCharacterData));
    })
);

describe('All Characters custom hook', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('renders a list of characters to the page', async () => {
    render(
      <MemoryRouter>
        <Characters />
      </MemoryRouter>
    );

    screen.getByText('Loading...');

    const ul = await screen.findByRole('list', { name: 'characters' });
    expect(ul).not.toBeEmptyDOMElement();
    expect(ul).toMatchSnapshot();

    return waitFor(() => {
      screen.getByText('Nancy', { exact: false });
    });
  });
});
