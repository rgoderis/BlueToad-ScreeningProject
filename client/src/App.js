import React, {useState} from 'react';
import './App.css';
import ImageDisplay from "./components/ImageDisplay";

// ES Modules syntax
import Unsplash, { toJson } from "unsplash-js";
// require syntax
const unsplash = new Unsplash({
  accessKey: 'rlZeOgPeOeRkfHFGxIsAY89BvxcJNLiq9mjM86mb4vQ'
});


function App() {

  const [search, setSearch] = useState('')
  const [images, getImages] = useState([])

  const returnSearch = () =>{
      findImages(search)
      console.log(images)
  }

const findImages = (searchPeram)=>{
  unsplash.search.photos(searchPeram, 1, 25, { orientation: "portrait" }, {content_filter: "high"})
  .then(toJson)
  .then(json => {
    let images = []
    json.results.forEach(res=>{
      images.push(res)
    })
    getImages(images)
  });
}


  return (
    <div className="App">
      <h1>Blue Toad Sample Project</h1>
      <input className="image-input" onChange={e=>setSearch(e.target.value)}/>
      <button className="image-search" onClick={()=>returnSearch()}>Search</button>
      <div id='img-container'>
        {images.map(image=>(
          <ImageDisplay
            desc = {image.alt_description}
            url = {image.urls.regular}
          />
        ))}
      </div>
      
    </div>
  );
}

export default App;
