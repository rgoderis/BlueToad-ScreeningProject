import React, {useState} from 'react';
import API from '../utils/API';

function ImageSearch(){

    const [search, setSearch] = useState('')

    const returnSearch = () =>{
        API.findImages(search)
    }

    return(
        <div>
            <p>image search</p>
            <input className="image-input" onChange={e=>setSearch(e.target.value)}/>
            <button className="image-search" onClick={()=>returnSearch()}>Search</button>
        </div>
    )
}

export default ImageSearch;