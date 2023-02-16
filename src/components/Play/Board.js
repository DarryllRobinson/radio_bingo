import React from 'react';
import { Box, Card, CardContent, Grid } from '@mui/material';

const songs = [
  {
    title: 'First song',
    actualArtist: 'First Actual Artist',
    fakeArtist1: 'First Fake Artist 1',
    fakeArtist2: 'First Fake Artist 2',
  },
  {
    title: 'Second song',
    actualArtist: 'Second Actual Artist',
    fakeArtist1: 'Second Fake Artist 1',
    fakeArtist2: 'Second Fake Artist 2',
  },
  {
    title: 'Third song',
    actualArtist: 'Third Actual Artist',
    fakeArtist1: 'Third Fake Artist 1',
    fakeArtist2: 'Third Fake Artist 2',
  },
  {
    title: 'Fourth song',
    actualArtist: 'Fourth Actual Artist',
    fakeArtist1: 'Fourth Fake Artist 1',
    fakeArtist2: 'Fourth Fake Artist 2',
  },
  {
    title: 'Five song',
    actualArtist: 'Five Actual Artist',
    fakeArtist1: 'Five Fake Artist 1',
    fakeArtist2: 'Five Fake Artist 2',
  },
  {
    title: 'Sixth song',
    actualArtist: 'Sixth Actual Artist',
    fakeArtist1: 'Sixth Fake Artist 1',
    fakeArtist2: 'Sixth Fake Artist 2',
  },
];

const renderSongs = songs.map((song, id) => {
  const { title, actualArtist, fakeArtist1, fakeArtist2 } = song;

  return (
    <Grid key={id} item xs="auto">
      <Card variant="outlined">
        <CardContent>{title}</CardContent>
      </Card>
    </Grid>
  );
});

export default function Board() {
  return (
    <Box sx={{ border: 1, flexGrow: 1 }}>
      <Grid
        columns={{ xs: 4, sm: 8, md: 12 }}
        container
        spacing={{ xs: 2, md: 3 }}
      >
        {renderSongs}
      </Grid>
    </Box>
  );
}
