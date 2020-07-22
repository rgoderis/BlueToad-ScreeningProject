const API = {
    findImages (searchPeram){
        fetch(`https://cors-anywhere.herokuapp.com/https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=558d44c427e351de9040cd0eb74be930&per_page=25&safe_search=1&text=${searchPeram}&format=json&nojsoncallback=1`)
        .then(res=>{
            console.log(res)
        })
        .catch(err=>console.log(err))
        
    }
}

export default API;