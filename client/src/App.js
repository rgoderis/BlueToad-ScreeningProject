import React, {useState} from 'react';
import './App.css';
import ImageDisplay from "./components/ImageDisplay";

// Flickr api 
// key: 558d44c427e351de9040cd0eb74be930
// secret: 31b0e5f1d3c94cfb


function App() {

  const [search, setSearch] = useState('')
  const [images, getImages] = useState([])

  const returnSearch = () =>{
      findImages(search)
      console.log(images)
  }

  const findImages = (searchPeram)=>{
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=558d44c427e351de9040cd0eb74be930&tags=${searchPeram}&safe_search=1&per_page=100&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(jsondata => {
      let cleanImages = []
      jsondata.photos.photo.forEach(photo=>{
        if(parseInt(photo.server) !==0 && parseInt(photo.farm) !==0 && cleanImages.length < 25){
          cleanImages.push(photo)
          console.log(photo)
        }
      })
      getImages(cleanImages)
    })
    .catch(err=>console.log(err))
  }

  return (
    <div className="App">
      <h1>Blue Toad Sample Project</h1>
      <input className="image-input" onChange={e=>setSearch(e.target.value)}/>
      <button className="image-search" onClick={()=>returnSearch()}>Search</button>
      <div id='img-container'>
        {images.map(image=>(
          <ImageDisplay
            farmId = {image.farm}
            serverId = {image.server}
            id = {image.id}
            secretId = {image.secret}
          />
        ))}
      </div>
      
    </div>
  );
}

export default App;
