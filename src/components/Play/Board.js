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
    artist: 'Five Actual Artist',
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

        // Save in db
        saveTile();
      };

      const selectRandomSongs = () => {
        let tiles = [];
        let songIds = [];
        for (let tile = 0; songIds.length < numTiles; tile++) {
          const songId = getRandomId(songsDb.length);
          const found = songIds.includes(songId);
          if (!found) {
            // Fetch two fake artists, making sure they're not the same as the artist provided
            const { artist } = findArrayElementById(songsDb, songId);
            //console.log('actual artist: ', artist);
            //setArtists(fetchFakeArtists(artist));
            let artists = fetchFakeArtists(artist);
            artists.push(artist);
            //console.log('artists: ', artists);
            artists = artists.sort(() => Math.random() - 0.5);
            //console.log('artists shuffled: ', artists);

            // Insert song object, songId into arrays
            songIds.push(songId);
            const { title } = findArrayElementById(songsDb, songId);
            //console.log('title: ', title, artist);

            tiles.push({
              title,
              artists,
            });
            //console.log('tiles: ', tiles);
          }
        }
        console.log('tiles: ', tiles);
        return tiles;
      };

      const getRandomId = (max) => {
        return Math.floor(Math.random() * max);
      };

      const findArrayElementById = (array, id) => {
        return array.find((element) => {
          return element.id === id;
        });
      };

      const fetchFakeArtists = (actualArtist) => {
        //console.log('fetchFakeArtists');
        let artistList = [];
        let artistIds = [];
        for (let artistLoop = 0; artistIds.length < numArtists; artistLoop++) {
          const artistId = getRandomId(fakeArtistsDb.length);
          //console.log('artistId: ', artistId);
          //console.log('artistList: ', artistList);

          // Check to make sure the artist hasn't already been chosen for this tile - small chance but definitely non-zero
          const found = artistIds.includes(artistId);
          //console.log('found: ', found);

          if (!found) {
            // Now check to make sure the artist hasn't the same as the actual artist - again, small chance but definitely non-zero
            const { artist } = findArrayElementById(fakeArtistsDb, artistId);
            //console.log('artist: ', artist);
            if (artist !== actualArtist) {
              //console.log('no match');

              // Insert artist object, artistId into arrays
              //artistList.push(findArrayElementById(fakeArtistsDb, artistId));
              artistList.push(artist);
              artistIds.push(artistId);
              //console.log('artistList: ', artistList);
            }
          }
        }
        return artistList;
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
