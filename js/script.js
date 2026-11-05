console.log("script.js loaded");
const endpoint = "https://api.giphy.com/v1/gifs/search?api_key=GxcVtdu7vTvjKELU97m8Tv3smIXKA75t&q=this+is+fine+dog&limit=25&rating=g";

const gifContainer = document.querySelector("#gif-container");
const fetchButton = document.querySelector("button"); 

fetchButton.addEventListener("click" , async () => {
    try {
        const response = await fetch(endpoint);
        const data = await response.json();

        const images = data.data.map(gif => gif.images.original.url);
        console.log(images);

        gifContainer.innerHTML = "";

        images.forEach(url => {
            gifContainer.innerHTML += `<img src="${url}" class="col-3 mb-3">`;
    }); 
    } catch (error) {
        console.error("Error fetching GIFs:" , error);
    }
})

