export const getgif = async(category )=>{
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=e0DS6CXLrn9ECiqXsoGsiB4M6Ufw5Gb6&limit=10&q=${ encodeURI(category) }`
    const resp = await fetch (URL);
    const {data} = await resp.json();
   
    const gifs = data.map(img=>{
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    
    return gifs;
}