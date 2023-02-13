import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { Box, Container, CssBaseline } from "@mui/material";

import Board from "./components/Board";
import OutlinedCard from './components/OutlinedCard'
import Tile from "./components/Tile";

function App() {
    return (
        <>
            <CssBaseline />
            <Container maxWidth="lg">
               <Tile />
            </Container>
        </>
    )
}

export default App