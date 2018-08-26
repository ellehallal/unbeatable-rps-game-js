let userScore = 0;
let computerScore = 0;

const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
const scoresDiv = document.querySelector(".scores");
const resultDiv = document.querySelector(".result > p");
const resetButton = document.getElementById("reset-button")

const rockDiv = document.getElementById("rock");
const paperDiv = document.getElementById("paper");
const scissorsDiv = document.getElementById("scissors");


// Generating computer choice
const getComputerChoice = (userChoice) => {
  switch(userChoice) {
    case "rock":
      return "paper";
      break;
    case "paper":
      return "scissors";
      break;
    case "scissors":
      return "rock";
      break;
  }
};


// Convert lowercase choice to uppercase
const convertToUp = (word) => {
  switch(word) {
    case "rock":
      return "Rock";
      break;
    case "paper":
      return "Paper";
      break;
    case "scissors":
      return "Scissors";
      break;
  }
};


// Output for user lose / computer win
const lose = (userChoice, computerChoice) => {
  computerScore++;
  computerScoreSpan.innerHTML = computerScore;
  const randomWin = ["beats", "smashes", "destroys", "obliterates"];
  const randomNumber = Math.floor(Math.random() * 4);
  const loseEmojis = ["😩", "😾", "💩", "😭", "😡", "🤨", "🤦🏽"]
  const randomNumberEmoji = Math.floor(Math.random() * 7);
  resultDiv.innerHTML = `${convertToUp(computerChoice)} ${randomWin[randomNumber]} ${convertToUp(userChoice)}. You lose! ${loseEmojis[randomNumberEmoji]}`;

  document.getElementById(userChoice).classList.add('lose-border');
  setTimeout(() => document.getElementById(userChoice).classList.remove('lose-border'), 600);

};


// Comparing computerChoice and userChoice
const game = (userChoice) => {
  const computerChoice = getComputerChoice(userChoice);

  switch (userChoice + computerChoice) {
    case "rockpaper":
    case "scissorsrock":
    case "paperscissors":
      lose(userChoice, computerChoice);
      break;
  }

};


const resetScores = () => {
  computerScore = 0;
  computerScoreSpan.innerHTML = computerScore
  userScore = 0;
  userScoreSpan.innerHTML = userScore;
};

const main = () => {
  rockDiv.addEventListener('click', () => game("rock"));

  paperDiv.addEventListener('click', () => game("paper"));

  scissorsDiv.addEventListener('click', () => game("scissors"));

  resetButton.addEventListener('click', () => resetScores());
};


main();
