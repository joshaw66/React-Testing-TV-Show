import React from 'react';
import { render, queryByTestId } from '@testing-library/react';
import Episodes from './Episodes';


// Test written to make sure render order is correct //

test("Episodes are in the correct place", () => {
    const {queryAllByTestId} = 
        render(<Episodes episodes={[
            {
                id: 1,
                season: 1,
                number: 1,
                name: "",
                summary: "",
            },
            {
                id: 2,
                season: 1,
                number: 2,
                name: "",
                summary: "",
            }
        ]} />);
    const episodeNumberElements = queryAllByTestId(/episode-number-id/i);
    expect(episodeNumberElements).toHaveLength(2);
    expect(episodeNumberElements[0]).toHaveTextContent("Season 1, Episode 1");
    expect(episodeNumberElements[1]).toHaveTextContent("Season 1, Episode 2");

}); 

// Test written to fail if there is no data //

test("Renders with data", () => {
    const {queryByTestId} = 
        render(<Episodes episodes={[]} />);
    const element = queryByTestId(/episodes-id/i);
    expect(element.childNodes).toHaveLength(0);
});