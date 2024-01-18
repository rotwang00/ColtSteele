const getDadJoke = async () => {
  const config = { headers: { Accept: "application/json" } };
  const res = await axios.get("https://icanhazdadjoke.com/", config);
  jokeDisplay.innerText = res.data.joke;
};

const button = document.querySelector("#newJokeButton");
button.addEventListener("click", () => {
  getDadJoke();
});

const jokeDisplay = document.querySelector("#joke");
