// App.js
import React, { useState, useEffect } from 'react';
import GiphyDisplay from './GiphyDisplay';
import GiphyButton from './GiphyButton';
import { Card, Typography } from '@mui/material';

function App() {
  const [gifUrl, setGifUrl] = useState('');

  useEffect(() => {
    fetchRandomGif();
  }, []);

  const fetchRandomGif = async () => {
    try {
      const response = await fetch('https://api.giphy.com/v1/gifs/random?api_key=SPvpUVoz1FltPs42RZupIiPChMN6RdaX&tag=&rating=g');
      const data = await response.json();
      const imageUrl = data.data.images.original.url;
      setGifUrl(imageUrl);
    } catch (error) {
      console.error('There is an error fetching GIF', error);
    }
  };

  return (
    <div className="App">
      <Card variant="outlined" className="card">
        <Typography variant="h4" component="h1" gutterBottom>
          GIPHY
        </Typography>
        <GiphyButton fetchRandomGif={fetchRandomGif} />
        <GiphyDisplay gifUrl={gifUrl} />
      </Card>
    </div>
  );
}

export default App;
