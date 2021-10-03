const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const restartGame = document.querySelector(".restart-game");

const playerScoreDisp = document.getElementById("player-score");
const computerScoreDisp = document.getElementById("computer-score");

const playerWonGamesDisp = document.getElementById("player-games-won");
const computerWonGamesDisp = document.getElementById("computer-games-won");

let playerChoice = "";
let playerScore = 0;
let computerScore = 0;
let playerWonGames = 0;
let computerWonGames = 0;

restartGame.addEventListener("click", newGame);

rock.addEventListener("click", function () {
  playerChoice = "Rock";
  game();
});

paper.addEventListener("click", function () {
  playerChoice = "Paper";
  game();
});
scissors.addEventListener("click", function () {
  playerChoice = "Scissors";
  game();
});

function computerPlay() {
  const move = ["Rock", "Paper", "Scissors"];
  return move[Math.floor(Math.random() * move.length)];
}

function selectRock() {
  playerChoice = "Rock";
}
function selectPaper() {
  playerChoice = "Paper";
}
function selectScissors() {
  playerChoice = "Scissors";
}

function newGame() {
  resetGame();
  playerWonGames = 0;
  playerWonGamesDisp.textContent = 0;
  computerWonGames = 0;
  computerWonGamesDisp.textContent = 0;
}

function resetGame() {
  playerScore = 0;
  playerScoreDisp.textContent = playerScore;
  computerScore = 0;
  computerScoreDisp.textContent = computerScore;
}

function game() {
  function playRound(computerPlay) {
    let outcome = "";
    if (
      (playerChoice === "Paper" && computerPlay === "Rock") ||
      (playerChoice === "Rock" && computerPlay === "Scissors") ||
      (playerChoice === "Scissors" && computerPlay === "Paper")
    ) {
      outcome = "Win";
    } else if (
      (playerChoice === "Rock" && computerPlay === "Paper") ||
      (playerChoice === "Scissors" && computerPlay === "Rock") ||
      (playerChoice === "Paper" && computerPlay === "Scissors")
    ) {
      outcome = "Lost";
    } else {
      outcome = "Draw";
    }

    function whoWon() {
      if (outcome === "Lost") {
        computerScore += 1;
        computerScoreDisp.textContent = computerScore;
        if (computerScore == 3) {
          computerWonGames += 1;
          computerWonGamesDisp.textContent = computerWonGames;
          resetGame();
          alert("Computer won the game");
        } else {
          return alert(`You Lose! ${computerPlay} beats ${playerChoice} this round
            `);
        }
      } else if (outcome === "Win") {
        playerScore += 1;
        playerScoreDisp.textContent = playerScore;
        if (playerScore == 3) {
          playerScore += 1;
          playerWonGames += 1;
          playerWonGamesDisp.textContent = playerWonGames;
          resetGame();
          alert("Player won the game");
        } else {
          return alert(
            `You Won! ${playerChoice} beats ${computerPlay} this round`
          );
        }
      } else {
        return alert("Draw!!!! Rematch");
      }
    }
    whoWon();
  }
  playRound(computerPlay());
}
