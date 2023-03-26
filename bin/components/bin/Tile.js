import React, { createContext, useContext, useState } from "react";
import { Box, Card, CardContent, FormLabel, Typography } from "@mui/material";

import ArtistList from './ArtistList'

const RadioContext = createContext('');

const songs = [
    {
        title: "First song",
        actualArtist: "First Actual Artist",
        fakeArtist1: "First Fake Artist 1",
        fakeArtist2: "First Fake Artist 2",
    },
    {
        title: "Second song",
        actualArtist: "Second Actual Artist",
        fakeArtist1: "Second Fake Artist 1",
        fakeArtist2: "Second Fake Artist 2",
    },
    {
        title: "Third song",
        actualArtist: "Third Actual Artist",
        fakeArtist1: "Third Fake Artist 1",
        fakeArtist2: "Third Fake Artist 2",
    },
    {
        title: "Fourth song",
        actualArtist: "Fourth Actual Artist",
        fakeArtist1: "Fourth Fake Artist 1",
        fakeArtist2: "Fourth Fake Artist 2",
    },
    {
        title: "Five song",
        actualArtist: "Five Actual Artist",
        fakeArtist1: "Five Fake Artist 1",
        fakeArtist2: "Five Fake Artist 2",
    },
    {
        title: "Sixth song",
        actualArtist: "Sixth Actual Artist",
        fakeArtist1: "Sixth Fake Artist 1",
        fakeArtist2: "Sixth Fake Artist 2",
    }
];

export default function Tile() {
    const [value, setValue] = useState('');
    const [error, setError] = useState(false);
    const [helperText, setHelperText] = useState('Choose the artist');

    const rendered = songs.map((song, id) => {
        const { title, actualArtist, fakeArtist1, fakeArtist2 } = song;

        return (
            <RadioContext.Provider value="">
                <Card key={id} sx={{ width: 250 }}>
                    <CardContent>
                        <ArtistList
                            title={title}
                            actualArtist={actualArtist}
                            fakeArtist1={fakeArtist1}
                            fakeArtist2={fakeArtist2}
                            setValue={setValue}
                        />
                    </CardContent>
                </Card>
            </RadioContext.Provider>
    )
});

    return (
        <>{rendered}</>
    )
}