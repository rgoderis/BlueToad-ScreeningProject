import React, {useState} from 'react';
import './App.css';
// import ImageSearch from './components/ImageSearch';
import ImageDisplay from "./components/ImageDisplay";
// import API from './utils/API';

// Flickr api 
// key: 558d44c427e351de9040cd0eb74be930
// secret: 31b0e5f1d3c94cfb


function App() {

  const [search, setSearch] = useState('')
  const [images, getImages] = useState('')

  const returnSearch = () =>{
      findImages(search)
      console.log(images)
  }

  const findImages = (searchPeram)=>{
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=558d44c427e351de9040cd0eb74be930&per_page=25&safe_search=1&text=${searchPeram}&format=json&nojsoncallback=1`) 
    .then(response => response.json())
    .then(jsondata => getImages(jsondata.photos.photo))
    .catch(err=>console.log(err))
  }

  return (
    <div className="App">
      <h1>Blue Toad Sample Project</h1>
      <input className="image-input" onChange={e=>setSearch(e.target.value)}/>
      <button className="image-search" onClick={()=>returnSearch()}>Search</button>
      <ImageDisplay/>
    </div>
  );
}

export default App;
