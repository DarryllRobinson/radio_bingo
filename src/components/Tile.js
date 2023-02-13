import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";

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

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Tile() {
    const rendered = songs.map((song, id) => {
        return (
            <Card key={id} sx={{ width: 200 }}>
                <CardContent>
                    <Typography>
                        {song.title}
                    </Typography>
                    <Typography>
                        {bull}{song.actualArtist}
                        <br />
                        {bull}{song.fakeArtist1}
                        <br />
                        {bull}{song.fakeArtist2}
                        <br />
                    </Typography>
                </CardContent>
            </Card>
        
    )
});

    return (
        <>{rendered}</>
    )
}