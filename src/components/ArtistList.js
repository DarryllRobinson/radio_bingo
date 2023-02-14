import React from "react";
import { Button, FormControl, FormControlLabel, FormHelperText,Radio, RadioGroup } from "@mui/material";

export default function ArtistList(props) {
    const { actualArtist, fakeArtist1, fakeArtist2 } = props;
    const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('Choose the artist');

    const handleSubmit = (event) => {
        event.preventDefault();

    if (value !== '') {
      setHelperText('You got it!');
      setError(false);
    } else if (value === 'worst') {
      setHelperText('Sorry, wrong answer!');
      setError(true);
    } else {
      setHelperText('Please select an option.');
      setError(true);
    }
    }

    const handleRadioChange = (event) => {
        setValue(event.target.value);
        setHelperText('');
        setError(false);
    }

    return (
        <form onSubmit={handleSubmit}>
            <FormControl error={error}>
                <RadioGroup aria-label="artist-list" name="radio-bingo" value={value} onChange={handleRadioChange}>
                    <FormControlLabel value={actualArtist} control={<Radio />} label={actualArtist} />
                </RadioGroup>
                <FormHelperText>{helperText}</FormHelperText>
                <Button type="submit" variant="outlined">Lock it in!</Button>
            </FormControl>
        </form>
    );
}