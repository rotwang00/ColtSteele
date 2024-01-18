// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", () => {
  alert("You clicked it. Good job.");
});

const container = document.querySelector("#container");

for (let i = 1; i <= 153; i++) {
  const pokemon = document.createElement("div");

  const newCaption = document.createElement("span");
  newCaption.innerText = `#${i}`;
  pokemon.appendChild(newCaption);

  const newPoke = document.createElement("img");
  newPoke.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
  pokemon.appendChild(newPoke);
  pokemon.classList.add("pokemon");

  container.appendChild(pokemon);
}
