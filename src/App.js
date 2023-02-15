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
import Navbar from './components/navigation/Navbar';
import SignIn from './components/navigation/SignIn';
import SignUp from './components/navigation/SignUp';
import Footer from './components/navigation/Footer';
import ScrollToTop from './components/navigation/ScrollToTop';
// use after user service is set up
//import PrivateRoute from './components/navigation/PrivateRoute'

const theme = createTheme();

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
            <Navbar />
          </Switch>
          <Footer />
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;
