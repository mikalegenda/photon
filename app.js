const auth = "563492ad6f91700001000001199eadf8ad9e415da695f6576d68d40d";
const gallery = document.querySelector(".gallery");
const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-btn");

let searchValue;

async function curatedPhotos() {
  const dataFetch = await fetch("https://api.pexels.com/v1/curated?per_page=15&page=1", {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: auth,
    },
  });
  const data = await dataFetch.json();
  data.photos.forEach((photo) => {
    const galleryImg = document.createElement("div");
    galleryImg.classList.add("gallery-img");
    galleryImg.innerHTML = `<p>${photo.photographer}</p>
    <img src=${photo.src.large}></img>
    `;
    gallery.appendChild(galleryImg);
  });
}

curatedPhotos();
