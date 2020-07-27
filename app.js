const auth = "563492ad6f91700001000001199eadf8ad9e415da695f6576d68d40d";
const gallery = document.querySelector(".gallery");
const searchInput = document.querySelector(".search-input");
const searchForm = document.querySelector(".search-form");

let searchValue;

("https://api.pexels.com/v1/curated?per_page=15&page=1");
`https://api.pexels.com/v1/search?query=${query}&per_page=15&page=1`;

//Event Listeners
searchInput.addEventListener("input", updateInput);
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchPhotos(searchValue);
});

function updateInput(e) {
  searchValue = e.target.value;
}

async function fetchApi(url) {
  const dataFetch = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: auth,
    },
  });
  const data = await dataFetch.json();
  return data;
}

function generateImageGallery(data) {
  data.photos.forEach((photo) => {
    const galleryImg = document.createElement("div");
    galleryImg.classList.add("gallery-img");
    galleryImg.innerHTML = `<p>${photo.photographer}</p>
    <img src=${photo.src.large}></img>
    `;
    gallery.appendChild(galleryImg);
  });
}

async function curatedPhotos() {
  const data = await fetchApi("https://api.pexels.com/v1/curated?per_page=15&page=1");
  generateImageGallery(data);
}

async function searchPhotos(query) {
  const data = await fetchApi(`https://api.pexels.com/v1/search?query=${query}&per_page=15&page=1`);
  generateImageGallery(data);
}

curatedPhotos();
