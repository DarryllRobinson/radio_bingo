import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation,
} from 'react-router-dom';
import { Container, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Home from './components/Home';

// Navigation components
import Navbar from './components/navigation/Navbar';
import SignIn from './components/navigation/SignIn';
import SignUp from './components/navigation/SignUp';
import Footer from './components/navigation/Footer';
import ScrollToTop from './components/navigation/ScrollToTop';
import { PrivateRoute } from './components/navigation/PrivateRoute';

// Play components
import Board from './components/Play/Board';
import Tile from './components/Play/Tile';
// use after user service is set up
//import PrivateRoute from './components/navigation/PrivateRoute'

const theme = createTheme();

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

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="lg">
        <Router>
          <CssBaseline />
          <ScrollToTop />
          <Switch>
            <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
            <Route exact path="/" component={Home} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <>
              <Navbar />
              <PrivateRoute exact path="/board" component={Board} />
              <Route exact path="/tile" component={Tile} />
            </>
            <Redirect from="*" to="/" />
          </Switch>
          <Footer />
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;
