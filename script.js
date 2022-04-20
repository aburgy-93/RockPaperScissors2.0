"use strict";

// Selecting Elements //
const btnNew = document.querySelector(".btn--new");
const btnRock = document.querySelector(".btn--rock");
const btnPaper = document.querySelector(".btn--paper");
const btnScissors = document.querySelector(".btn--scissors");

const player0El = document.querySelector(".player--0");
const computer1El = document.querySelector(".computer--1");
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const scoresPlayers = document.querySelector(".scores");

let userScore, comupterScore, scores, playing, playerSelection;
let roundWinner = "";
// define playing

// Starting Conditions //
const init = function () {
  scores = [0, 0];
  userScore = 0;
  comupterScore = 0;
  playing = true;
  player0El.textContent = `Player: 0`;
  computer1El.textContent = `Computer: 0`;
};

init();

// Computer Selection //
const choices = ["rock", "paper", "scissors"];
const randomChoice = function () {
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
};

// Button Inputs //
btnRock.addEventListener("click", function () {
  handleClick("rock");
});
btnPaper.addEventListener("click", function () {
  handleClick("paper");
});
btnScissors.addEventListener("click", function () {
  handleClick("scissors");
});

function handleClick(playerSelection) {
  console.log(playerSelection);

  const computerSelection = randomChoice();
  playRound(playerSelection, computerSelection);
  updateScore();
}

// Play Round //
const playRound = function (playerSelection, computerSelection) {
  // const computerSelection = computerPlay();
  // let playerSelection = prompt(
  //   "Please choose one: rock, paper or scissors"
  // ).toLocaleLowerCase();

  if (playing) {
    if (playerSelection === computerSelection) {
    } else if (playerSelection === "rock") {
      if (computerSelection === "paper") {
        comupterScore++;
        roundWinner === "computer";
      } else {
        userScore++;
        roundWinner === "player";
      }
    } else if (playerSelection === "paper") {
      if (computerSelection === "scissors") {
        comupterScore++;
        roundWinner === "computer";
      } else {
        userScore++;
        roundWinner === "player";
      }
    } else if (playerSelection === "scissors") {
      if (computerSelection === "rock") {
        comupterScore++;
        roundWinner === "computer";
      } else {
        userScore++;
        roundWinner === "player";
      }
    }
  }
  if (userScore >= 5) {
    console.log(`Player Wins!`);
    init();
  } else if (comupterScore >= 5) {
    console.log(`Computer Wins!`);
    init();
  }
};

const updateScore = function () {
  if (roundWinner === "tie") {
    // TEXT: 'It's a Tie!
  } else if (roundWinner == "player") {
    // TEXT: 'You Won!'
  } else if (roundWinner === "computer") {
    // TEXT: 'You Lost!'
  }

  player0El.textContent = `Player: ${userScore}`;
  computer1El.textContent = `Computer: ${comupterScore}`;
};

// Restart Game //
btnNew.addEventListener("click", function () {
  init();
});

// End Game //
// const gameOver = function () {
//   if (userScore === 5 || comupterScore === 5) {
//     // code here
//   }
// };

// for (let i = 0; i < 5; i++) {
//   const computerSelection = computerPlay();
//   let playerSelection = prompt(
//     "Please choose one: rock, paper or scissors"
//   ).toLocaleLowerCase();
//   playRound(playerSelection, computerSelection);
//   console.log(`Player 1's score = ${userScore}`);
//   console.log(`Computer's score = ${comupterScore}`);
//   if (userScore > comupterScore) {
//     console.log(`Player 1 WINS!`);
//   } else if (comupterScore > userScore) {
//     console.log(`Computer WINS!`);
//   } else {
//     console.log(`TIE!`);
//   }
// }

/////////////////////////////TESTING///////////////////////////////////////

// Git commits:
// git push origin rps-ui instead of git push origin main.
