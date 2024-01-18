const form = document.querySelector("#searchForm");
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const searchTerm = form.elements.query.value;
  const config = { params: { q: searchTerm } };
  const res = await axios.get(`https://api.tvmaze.com/search/shows?`, config);
  displayImages(res.data);
  form.elements.query.value = "";
});

const displayImages = (shows) => {
  for (let show of shows) {
    if (show.show.image) {
      const img = document.createElement("img");
      img.src = show.show.image.medium;
      document.body.append(img);
    }
  }
};
