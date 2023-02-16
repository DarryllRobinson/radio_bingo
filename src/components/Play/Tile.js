import React, { useState } from 'react';
import { Box, Card, CardContent } from '@mui/material';

import './Tile.css';

export default function Tile() {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <Box
      className={`flip-container ${flipped ? 'flipped' : ''}`}
      onClick={handleClick}
    >
      <div className="flipper">
        <div className="front">
          <Card>
            <CardContent>This is the front of the div.</CardContent>
          </Card>
        </div>
        <div className="back">
          <Card>
            <CardContent>This is the back of the div.</CardContent>
          </Card>
        </div>
      </div>
    </Box>
  );
}
