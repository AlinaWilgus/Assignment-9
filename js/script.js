console.log("script.js loaded");

const gifContainer = document.querySelector("#gif-container");
const fetchButton = document.querySelector("button");
const searchInput = document.querySelector("#search-input");

fetchButton.addEventListener("click", async () => {
  const searchTerm = searchInput.value;
  const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=GxcVtdu7vTvjKELu97m8Tv3smlXkA75t&q=${searchTerm}&limit=25&offset=0&rating=g&lang=en`;

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
    console.error("Error fetching GIFs:", error);
  }
});