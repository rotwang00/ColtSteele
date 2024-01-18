const heading = document.querySelector("#header");
const button = document.querySelector("#btn");

const changeColor = function () {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  heading.innerText = `RGB: (${r}, ${g}, ${b})`;
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  if (r + b + g < 200) {
    heading.style.color = "white";
  } else {
    heading.style.color = "black";
  }
};

button.addEventListener("click", changeColor);
