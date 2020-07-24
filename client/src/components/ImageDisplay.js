import React from 'react';
import './style.css'

function ImageDisplay(props){
    return (
        <div className='img-display'>
            <img className='img' src= {props.url} alt={props.alt}/>
        </div>
    )

}

export default ImageDisplay;