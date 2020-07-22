import { useState, useEffect } from "react";

export default function useFetch(url) {
    const [images, getImages] = useState('')

  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(jsondata => getImages(jsondata.photos.photo))
    .catch(err=>console.log(err))
  }, []);

  return data;
}