let score1 = 0;
let score2 = 0;
let winningScore = 5;

const container = document.querySelector("#container");
const score = document.querySelector("#score");
const player1button = document.querySelector("#player1");
const player2button = document.querySelector("#player2");
const resetbutton = document.querySelector("#reset");
const player1digit = document.querySelector("#player1digit");
const player2digit = document.querySelector("#player2digit");
function player1click() {
  score1++;
  refreshDisplay();
}

function player2click() {
  score2++;
  refreshDisplay();
}

function reset() {
  score1 = 0;
  score2 = 0;
  refreshDisplay();
}

function checkForWin() {
  console.log(player1digit.classList);
  player1digit.classList.add("win");
  player1digit.style.color = "green";
  if (score1 == winningScore) {
    player1digit.classList.add("win");
  }
}

function refreshDisplay() {
  const displayText = `${score1} to ${score2}`;
  score.innerText = displayText;
  checkForWin();
}

player1button.addEventListener("click", player1click);
player2button.addEventListener("click", player2click);
resetbutton.addEventListener("click", reset);
