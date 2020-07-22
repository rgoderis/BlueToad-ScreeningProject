import React from 'react';

function ImageDisplay(props){
    return (
        <div>
            <img src= {`https://farm${props.farmId}.staticflickr.com/${props.serverId}/${props.id}_${props.secretId}.jpg`}/>
        </div>
    )

}

export default ImageDisplay;