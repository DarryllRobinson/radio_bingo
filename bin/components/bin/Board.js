import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Grid, Paper } from '@mui/material';

import OutlinedCard from './OutlinedCard';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

export default function Board() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs="auto">
          <Item><OutlinedCard /></Item>
        </Grid>
         <Grid item xs="auto">
          <Item><OutlinedCard /></Item>
        </Grid>
         <Grid item xs="auto">
          <Item><OutlinedCard /></Item>
        </Grid>
         <Grid item xs="auto">
          <Item><OutlinedCard /></Item>
        </Grid>
      </Grid>
    </Box>
  );
}