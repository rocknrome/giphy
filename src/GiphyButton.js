// GiphyButton.js
import React from "react";
import Button from '@mui/material/Button';

function GiphyButton({ fetchRandomGif }) {
    return (
        <Button variant="contained" onClick={fetchRandomGif} fullWidth>
          Get Random GIF
        </Button>
    );
}

export default GiphyButton;
