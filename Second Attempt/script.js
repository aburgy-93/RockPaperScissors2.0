const player0El = document.querySelector(".player--0");
const computer1El = document.querySelector(".computer--1");
const winner = document.querySelector(".winner");
const modal = document.querySelector(".modal");
const player1ChoicePic = document.querySelector(".player1ChoicePic");
const computerChoicePic = document.querySelector(".computerChoicePic");

const rockBtn = document.querySelector(".btn--rock");
const paperBtn = document.querySelector(".btn--paper");
const scissorsBtn = document.querySelector(".btn--scissors");
const resetBnt = document.querySelector(".resetBtn");

let userScore, computerScore, playing, scores;
// playerSelection;
let roundWinner = "";

// 1) Initialize starting game
const init = function () {
  scores = [0, 0];
  userScore = 0;
  computerScore = 0;
  roundWinner;

  player0El.textContent = `Player: 0`;
  computer1El.textContent = `Computer: 0`;

  modal.style.display = "none";

  player1ChoicePic.textContent = "?";
  computerChoicePic.textContent = "?";
};

init();

// 2) Get computer choices
const getComputerChoice = function () {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  return computerChoice;
};

// 3) Send user and computer choices to playround
rockBtn.addEventListener("click", function () {
  handleClick("rock");
});
paperBtn.addEventListener("click", function () {
  handleClick("paper");
});
scissorsBtn.addEventListener("click", function () {
  handleClick("scissors");
});

const handleClick = function (playerSelection) {
  let computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);

  switch (playerSelection) {
    case "rock":
      player1ChoicePic.textContent = "✊";
      break;
    case "paper":
      player1ChoicePic.textContent = "📃";
      break;
    case "scissors":
      player1ChoicePic.textContent = "✂";
  }

  switch (computerSelection) {
    case "rock":
      computerChoicePic.textContent = "✊";
      break;
    case "paper":
      computerChoicePic.textContent = "📃";
      break;
    case "scissors":
      computerChoicePic.textContent = "✂";
  }
};

// 4) play round
const playRound = function (playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      computerScore++;
      roundWinner === "computer";
    } else {
      userScore++;
      roundWinner === "player";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      computerScore++;
      roundWinner === "computer";
    } else {
      userScore++;
      roundWinner === "player";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      computerScore++;
      roundWinner === "computer";
    } else {
      userScore++;
      roundWinner === "player";
    }
  }

  if (userScore >= 5) {
    console.log(`Player Wins!`);
    modal.style.display = "block";
    winner.textContent = `Player 1 Wins!`;

    // init();
  } else if (computerScore >= 5) {
    modal.style.display = "block";
    winner.textContent = `Computer Wins!`;

    // init();
  }
  updateScore();
  console.log(playerSelection, computerSelection);
  console.log(userScore);
  console.log(scores);
  updateGameScore();
};

const updateScore = function () {
  if (roundWinner === "tie") {
    // TEXT: 'It's a Tie!
  } else if (roundWinner == "player") {
    //
  } else if (roundWinner === "computer") {
  }
  player0El.textContent = `Player: ${userScore}`;
  computer1El.textContent = `Computer: ${computerScore}`;
};

const updateGameScore = function () {
  if (userScore >= 5) {
    scores[0] += 1;
  } else if (computerScore >= 5) {
    scores[1] += 1;
  } else {
  }
};

resetBnt.addEventListener("click", function () {
  init();
});
