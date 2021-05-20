/* eslint-disable indent */
import React from 'react';
import { render, screen, waitFor} from '@testing-library/react';

describe('Detail custom hook', () => {
    it('fetches a character detail by id', async () => {
        render(
            <Detail
            />
        );
        screen.getByText('Loading...');

        return waitFor(() => {
            screen.getByAltText('Nancy');
            screen.getByText('Nancy', { exact: false });
        });
    });
});
