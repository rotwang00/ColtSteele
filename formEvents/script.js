const inputBox = document.querySelector("#username");
const header = document.querySelector("h1");

inputBox.addEventListener("input", function (e) {
  if (inputBox.value === "") {
    header.innerText = "Enter Your Username";
  } else {
    header.innerText = `Welcome, ${inputBox.value}`;
  }
});
