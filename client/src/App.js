import React from 'react';
import './App.css';
import ImageSearch from './components/ImageSearch';
import ImageDisplay from "./components/ImageDisplay";

// Flickr api 
// key: 558d44c427e351de9040cd0eb74be930
// secret: 31b0e5f1d3c94cfb


function App() {
  return (
    <div className="App">
      <h1>Blue Toad Sample Project</h1>
      <ImageSearch/>
      <ImageDisplay/>
    </div>
  );
}

export default App;
