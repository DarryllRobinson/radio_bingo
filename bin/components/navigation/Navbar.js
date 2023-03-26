import React from 'react';
import { Box } from '@mui/material';

export default function Navbar(props) {
  const { changeTheme } = props;
  console.log(props);
  return <Box sx={{ mb: 5 }}>Home</Box>;
}
