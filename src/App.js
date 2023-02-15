import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Container, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Home from './components/Home';
import Navbar from './components/navigation/Navbar';
import SignIn from './components/navigation/SignIn';
import SignUp from './components/navigation/SignUp';
import Footer from './components/navigation/Footer';
import ScrollToTop from './components/navigation/ScrollToTop';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="lg">
        <Router>
          <CssBaseline />
          <ScrollToTop />
          <Switch>
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
