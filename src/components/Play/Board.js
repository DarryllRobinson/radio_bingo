import React, { useEffect, useState } from 'react';
import { Box, Card, CardContent, Grid } from '@mui/material';

// Check if new board must be created
// If not, retrieve board and tiles from db
// If yes, create new board with stipulated number of tiles
// Retrieve song title and artist from radio db/api

// Mocked data
const numTiles = 4;
const numArtists = 2;

const songsDb = [
  {
    id: 0,
    title: 'First song',
    artist: 'First Actual Artist',
  },
  {
    id: 1,
    title: 'Second song',
    artist: 'Second Actual Artist',
  },
  {
    id: 2,
    title: 'Third song',
    artist: 'Third Actual Artist',
  },
  {
    id: 3,
    title: 'Fourth song',
    artist: 'Fourth Actual Artist',
  },
  {
    id: 4,
    title: 'Fifth song',
    actualArtist: 'Five Actual Artist',
  },
  {
    id: 5,
    title: 'Sixth song',
    artist: 'Sixth Actual Artist',
  },
];

const fakeArtistsDb = [
  {
    id: 0,
    artist: 'Fake Artist 0',
  },
  {
    id: 1,
    artist: 'Fake Artist 1',
  },
  {
    id: 2,
    artist: 'Fake Artist 2',
  },
  {
    id: 3,
    artist: 'Fake Artist 3',
  },
  {
    id: 4,
    artist: 'Fake Artist 4',
  },
  {
    id: 5,
    artist: 'Fake Artist 5',
  },
  {
    id: 6,
    artist: 'Fake Artist 6',
  },
  {
    id: 7,
    artist: 'Fake Artist 7',
  },
  {
    id: 8,
    artist: 'Fake Artist 8',
  },
  {
    id: 9,
    artist: 'Fake Artist 9',
  },
  {
    id: 10,
    artist: 'Fake Artist 10',
  },
  {
    id: 11,
    artist: 'Fake Artist 11',
  },
  {
    id: 12,
    artist: 'Fake Artist 12',
  },
  {
    id: 13,
    artist: 'Fake Artist 13',
  },
  {
    id: 14,
    artist: 'Fake Artist 14',
  },
  {
    id: 15,
    artist: 'Fake Artist 15',
  },
  {
    id: 16,
    artist: 'Fake Artist 16',
  },
  {
    id: 17,
    artist: 'Fake Artist 17',
  },
  {
    id: 18,
    artist: 'Fake Artist 18',
  },
  {
    id: 19,
    artist: 'Fake Artist 19',
  },
];

export default function Board() {
  // Need to record which songs have been chosen already
  const [songs, setSongs] = useState([]);
  const [artists, setArtists] = useState([]);

  // Check if new board must be created
  // Assume yes for dev purposes
  useEffect(() => {
    const create = true;

    if (create) {
      const createBoard = () => {
        // Call <Tile /> and send title, artists
        // Fetch randon song title and artist per numTiles
        setSongs(selectRandomSongs());

        // Fetch two fake artists, making sure they're not the same as the artist provided
        setArtists(fetchFakeArtists());

        // Save in db
        saveTile();
      };

      const selectRandomSongs = () => {
        let songIds = [];
        for (let tile = 0; songIds.length < numTiles; tile++) {
          const songId = getRandomId(numTiles);
          const found = songIds.includes(songId);
          if (!found) {
            // Insert song object into state
            songIds.push(findArrayElementById(songsDb, songId));
          }
        }
        return songIds;
      };

      const getRandomId = (max) => {
        return Math.floor(Math.random() * max);
      };

      const findArrayElementById = (array, id) => {
        return array.find((element) => {
          return element.id === id;
        });
      };

      const findArrayElementByTitle = (array, title) => {
        return array.find((element) => {
          return element.title === title;
        });
      };

      const fetchFakeArtists = () => {
        console.log('fetchFakeArtists');
        let artistIds = [];
        for (let artist = 0; artistIds.length; artist++) {
          const artistId = getRandomId(numArtists);
          const found = artistIds.includes(artistId);
          if (!found) {
            // Insert artist object into state
            artistIds.push(findArrayElementById(fakeArtistsDb, artistId));
          }
        }
      };

      const saveTile = () => {
        console.log('saveTile');
      };

      createBoard();
      fetchFakeArtists();
      saveTile();
    } else {
      const retrieveBoard = () => {
        console.log('Retrieve');
      };

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
