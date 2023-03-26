import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Box, Container, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Generic components
import Home from './components/generic/Home';
import Copyright from './components/generic/Copyright';

// Navigation components
import Navbar from './components/navigation/Navbar';
import SignIn from './components/navigation/SignIn';
import SignUp from './components/navigation/SignUp';
//import ScrollToTop from './components/navigation/ScrollToTop';
import { PrivateRoute } from './components/navigation/PrivateRoute';

// Play components
import Board from './components/Play/Board';
import Tile from './components/Play/Tile';
// use after user service is set up
//import PrivateRoute from './components/navigation/PrivateRoute'

// Define theme settings
const light = { palette: { mode: 'light' } };
const dark = { palette: { mode: 'dark' } };

// Index.js has checked user is logged in with
// a silent token refresh
// Buttons and the rest of the display to be determined
// based on sign-in status

function App() {
  const { pathname } = useLocation();
  //const [user, setUser] = useState({});

  // Get proper user authentication from react-signup-verification project
  //   useEffect(() => {
  //     const subscription = userService.user.subscribe((x) => setUser(x));
  //     return subscription.unsubscribe;
  //   }, []);

  // Theme state set up
  // Light theme is default theme
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Getting device scheme settings to use as default for App
  useEffect(() => {
    // Update the default theme with device setting
    setIsDarkTheme(window.matchMedia('(prefers-color-scheme: dark)').matches);
  }, []);

  useEffect(() => {
    // Check to see if it changes at any point
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (event) => {
        setIsDarkTheme(
          window.matchMedia('(prefers-color-scheme: dark)').matches
        );
      });
  }, [isDarkTheme]);

  // Toggling theme
  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
      <CssBaseline />
      <Box
        aria-label="box-outline"
        sx={{
          //border: '1px solid black',
          display: 'flex',
          flexDirection: 'column',
          p: '8px',
          minHeight: '100vh',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Routes>
          {/*<ScrollToTop />*/}
          <Route
            path="/:url*(/+)"
            element={<Navigate to={pathname.slice(0, -1)} replace />}
          />
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <>
            <Navbar checked={isDarkTheme} onChange={changeTheme} />
            <PrivateRoute exact path="/board" component={Board} />
            <Route exact path="/tile" component={Tile} />
          </>
        </Routes>
        <Box
          component="footer"
          sx={{
            py: 1,
            px: 2,
            mt: 'auto',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[300]
                : theme.palette.grey[900],
          }}
        >
          <Container maxWidth="sm">
            <Copyright sx={{ pt: 2 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
