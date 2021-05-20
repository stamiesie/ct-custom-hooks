/* eslint-disable max-len */
/* eslint-disable indent */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Detail from './Detail';
import { MemoryRouter, Route } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import DetailCharacter from '../../../../fixtures/DetailCharacter.json';

const server = setupServer(
    rest.get('https://hey-arnold-api.herokuapp.com/api/v1/characters/5da237699734fdcb7bef8f5c', 
    (req, res, ctx) => {
        return res(ctx.json(DetailCharacter));
    })
);

describe('Detail custom hook', () => {
    beforeAll(() => server.listen());
    afterAll(() => server.close());
    
    it('fetches a character detail by id', async () => {
        render(
            <MemoryRouter initialEntries={['/5da237699734fdcb7bef8f5c']}>
                <Route path="/:id">
            <Detail />
            </Route>
            </MemoryRouter>
        );
        screen.getByText('Loading...');

        return waitFor(() => {
            screen.getByAltText('Nancy');
            screen.getByText('Nancy', { exact: false });
        });
    });
});
