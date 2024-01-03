let playerChoice = prompt();
let computerChoice = getComputerChoice();

function getComputerChoice() {
  const gameChoices = ["rock", "paper", "scissors"];
  let randomChoice = Math.floor(Math.random() * gameChoices.length);
  return gameChoices[randomChoice];
}

function playGame(playerSelection, computerSelection) {
  const convertLower = playerSelection.toLowerCase();

  if (convertLower == "rock" && computerSelection == "rock") {
    console.log("It's a tie");
    return "tie";
  } else if (convertLower == "scissors" && computerSelection == "scissors") {
    console.log("It's a tie");
    return "tie";
  } else if (convertLower == "paper" && computerSelection == "paper") {
    console.log("It's a tie");
    return "tie";
  } else if (convertLower == "rock" && computerSelection == "scissors") {
    console.log("You WIN! Rock beats scissors");
    return "win";
  } else if (convertLower == "scissors" && computerSelection == "paper") {
    console.log("You WIN! Scissors beats paper");
    return "win";
  } else if (convertLower == "paper" && computerSelection == "rock") {
    console.log("You WIN! Paper beats rock");
    return "win";
  } else if (convertLower == "scissors" && computerSelection == "rock") {
    console.log("You LOSE! Rock beats scissors");
    return "lose";
  } else if (convertLower == "paper" && computerSelection == "scissors") {
    console.log("You LOSE! Scissors beats Paper");
    return "lose";
  } else if (convertLower == "rock" && computerSelection == "paper") {
    console.log("You LOSE! Paper beats rock");
    return "lose";
  } else {
    console.log("Invalid input. Try again.");
    return "Invalid input. Try again.";
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let result;
  // for (let i = 0; i < 5; i++) {}
  computerChoice = getComputerChoice();
  console.log(`Game ${i + 1}:`);
  result = playGame(playerChoice, computerChoice);
  console.log(result);
  if (result.includes("win")) {
    playerScore++;
  } else if (result.includes("lose")) {
    computerScore++;
  }
  if (playerScore > computerScore) {
    console.log("Congratulations! You are the winner!");
  } else if (playerScore < computerScore) {
    console.log("Sorry! You lost to the computer.");
  } else {
    console.log("=====================================");
    console.log("ITS A TIE OVERALL");
  }
}

game();
