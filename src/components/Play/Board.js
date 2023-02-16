import React, { useEffect, useState } from 'react';
import { Box, Card, CardContent, Grid } from '@mui/material';

// Check if new board must be created
// If not, retrieve board and tiles from db
// If yes, create new board with stipulated number of tiles
// Retrieve song title and artist from radio db/api

// Mocked data
const numTiles = 4;

const songsDb = [
  {
    id: 0,
    title: 'First song',
    actualArtist: 'First Actual Artist',
    fakeArtist1: 'First Fake Artist 1',
    fakeArtist2: 'First Fake Artist 2',
  },
  {
    id: 1,
    title: 'Second song',
    actualArtist: 'Second Actual Artist',
    fakeArtist1: 'Second Fake Artist 1',
    fakeArtist2: 'Second Fake Artist 2',
  },
  {
    id: 2,
    title: 'Third song',
    actualArtist: 'Third Actual Artist',
    fakeArtist1: 'Third Fake Artist 1',
    fakeArtist2: 'Third Fake Artist 2',
  },
  {
    id: 3,
    title: 'Fourth song',
    actualArtist: 'Fourth Actual Artist',
    fakeArtist1: 'Fourth Fake Artist 1',
    fakeArtist2: 'Fourth Fake Artist 2',
  },
  {
    id: 4,
    title: 'Fifth song',
    actualArtist: 'Five Actual Artist',
    fakeArtist1: 'Five Fake Artist 1',
    fakeArtist2: 'Five Fake Artist 2',
  },
  {
    id: 5,
    title: 'Sixth song',
    actualArtist: 'Sixth Actual Artist',
    fakeArtist1: 'Sixth Fake Artist 1',
    fakeArtist2: 'Sixth Fake Artist 2',
  },
];

export default function Board() {
  // Need to record which songs have been chosen already
  const [songs, setSongs] = useState([]);

  // Check if new board must be created
  // Assume yes for dev purposes
  useEffect(() => {
    const create = true;
    if (create) {
      console.log('Create');
      // Fetch randon song title and artist per numTiles
      // Fetch two fake artists, making sure they're not the same as the artist provided
      // Save in db
      // Call <Tile /> and send title, artists
      let songIds = [];
      for (let tile = 0; songIds.length < numTiles; tile++) {
        const songId = getRandomSongId(numTiles);
        //setSongs([...songs, songId]);
        console.log('songId: ', songId);
        const found = songIds.includes(songId);
        if (!found) songIds.push(songId);
        console.log(songIds);
        fetchFakeArtists();
        saveTile();
      }
    } else {
      retrieveBoard();
    }
  }, []);

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

  const retrieveBoard = () => {
    console.log('Retrieve');
  };

  const getRandomSongId = (max) => {
    return Math.floor(Math.random() * max);
  };

  const fetchFakeArtists = () => {
    console.log('fetchFakeArtists');
  };

  const saveTile = () => {
    console.log('saveTile');
  };

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
