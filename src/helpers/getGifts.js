export const getGifts = async (category) => {
    const url =`http://api.giphy.com/v1/gifs/search?api_key=SRdFIR0gCkKpYIywwoWlCsfomrz7RuAm&q=${category}&limit=20`
     const resp = await fetch(url);   
     const {data} = await resp.json();
     const gifts = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium
     }))     
     console.log(gifts);
     
     return gifts;
};