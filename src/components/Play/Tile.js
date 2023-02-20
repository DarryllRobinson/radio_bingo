import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { CancelSharp } from '@mui/icons-material/';

import './Tile.css';

export default function Tile(props) {
  const { title, artists } = props;
  const [flipped, setFlipped] = useState(false);
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState("Who's singing?");
  const [submitted, setSubmitted] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
    setHelperText('');
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === '') {
      setHelperText('Please choose an artist');
      setError(true);
    } else {
      setHelperText('');
      setError(false);

      setSubmitted(true);
      handleClick();
    }
  };

  const renderArtists = artists.map((artist, id) => {
    return (
      <FormControlLabel
        key={id}
        value={artist}
        control={<Radio size="small" />}
        label={artist}
        onChange={handleChange}
        size="small"
      />
    );
  });

  return (
    <Box className={`flip-container ${flipped ? 'flipped' : ''}`}>
      <form onSubmit={handleSubmit}>
        <div className="flipper">
          <div className="front" onClick={handleClick}>
            <Card
              sx={{
                border: 1,
                borderRadius: 3,
                fontWeight: 'bold',
                fontSize: 14,
                height: 250,
                width: 200,
              }}
            >
              <CardContent>
                {title}
                {submitted && <CancelSharp fontSize="large" />}
              </CardContent>
            </Card>
          </div>
          <div className="back">
            <Card
              sx={{
                border: 1,
                borderRadius: 3,
                fontWeight: 'bold',
                fontSize: 14,
                height: 250,
                width: 200,
              }}
            >
              <CardContent>
                <FormControl error={error}>
                  <FormLabel id="tile-song-title">{title}</FormLabel>
                  <RadioGroup
                    aria-labelledby="artists-radio-group-label"
                    name="radio-buttons-group"
                  >
                    {renderArtists}
                  </RadioGroup>
                  <FormHelperText>{helperText}</FormHelperText>
                </FormControl>
              </CardContent>
              <CardActions>
                <Button disabled={submitted} type="submit" variant="contained">
                  Submit
                </Button>
                <Button variant="outlined" onClick={handleClick}>
                  Cancel
                </Button>
              </CardActions>
            </Card>
          </div>
        </div>
      </form>
    </Box>
  );
}
