import React from 'react';
import './style.css'

function ImageDisplay(props){
    return (
        <div className='img-display'>
            <img className='img' src= {`https://farm${props.farmId}.staticflickr.com/${props.serverId}/${props.id}_${props.secretId}.jpg`}/>
        </div>
    )

}

export default ImageDisplay;