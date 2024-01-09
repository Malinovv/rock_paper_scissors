let computerChoice = getComputerChoice();
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
let playerChoice = ["rock", "paper", "scissors"];
let resultText = document.querySelector("#result");

let playerScore = 0;
let computerScore = 0;

const rockButton = rock.addEventListener("click", function () {
  playGame("rock", getComputerChoice());
});

const paperButton = paper.addEventListener("click", function () {
  playGame("paper", getComputerChoice());
});

const scissorsButton = scissors.addEventListener("click", function () {
  playGame("scissors", getComputerChoice());
});

function getComputerChoice() {
  const gameChoices = ["rock", "paper", "scissors"];
  let randomChoice = Math.floor(Math.random() * gameChoices.length);
  return gameChoices[randomChoice];
}

function playGame(playerSelection, computerSelection) {
  resultText.innerHTML = `You chose: ${playerSelection}<br>`;
  resultText.innerHTML += `Computer chose: ${computerSelection}<br>`;

  if (playerSelection === computerSelection) {
    resultText.innerHTML += "It's a tie!<br>";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    resultText.innerHTML += `You WIN! ${playerSelection} beats ${computerSelection}<br>`;
    playerScore++;
  } else {
    resultText.innerHTML += `You LOSE! ${computerSelection} beats ${playerSelection}<br>`;
    computerScore++;
  }

  resultText.innerHTML += `Player Score: ${playerScore} | Computer Score: ${computerScore}`;

  if (playerScore + computerScore === 5) {
    determineWinner();
  }
}

function determineWinner() {
  if (playerScore > computerScore) {
    resultText.innerHTML += "<br>Congratulations! You are the overall winner!";
  } else if (playerScore < computerScore) {
    resultText.innerHTML += "<br>Sorry! You lost to the computer overall.";
  } else {
    resultText.innerHTML += "<br>It's a tie overall!";
  }
  playerScore = 0;
  computerScore = 0;
}
