import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import GiphyButton from './GiphyButton'; {/*importing Gyphy button component*/}


function App() {

  const fetchRandomGif = null; //placeholder for now

  return (
    <div className="App">
      <h1>GIPHY</h1>
      <GiphyButton fetchRandomGif={fetchRandomGif}/>  {/*Giphy button component*/}
      
    </div>
  );
}

export default App;
