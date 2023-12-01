const rock = document.getElementById("rock");
const paper = document.getElementsByClassName("paper");
const scissors = document.getElementsByClassName("scissors");
const result = document.getElementById("result");

function computerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * choices.length);
  return choices[random];
}

function comparison() {
  let com = computerChoice();
  let playerRock = "rock";
  if (com == playerRock) {
    result.innerHTML = "It is a Tie";
    console.log("so e problemot");
  } else {
    console.log("negde ima problem");
    result.innerHTML = "";
  }
}

rock.addEventListener("click", comparison);
