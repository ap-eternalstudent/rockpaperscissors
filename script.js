function computerPlay() {
  const move = ["Rock", "Paper", "Scissors"];
  return move[Math.floor(Math.random() * move.length)];
}

function playerSelection() {
  let string = prompt(`Enter "Rock", "Paper" or "Scissors" `).toLowerCase();
  let normalizedString = string.slice(0, 1).toUpperCase() + string.slice(1);
  return normalizedString;
}

function game() {
  function playRound(playerSelection, computerPlay) {
    let outcome = "";
    console.log(outcome);
    if (
      (playerSelection === "Paper" && computerPlay === "Rock") ||
      (playerSelection === "Rock" && computerPlay === "Scissors") ||
      (playerSelection === "Scissors" && computerPlay === "Paper")
    ) {
      outcome = "Win";
    } else if (
      (playerSelection === "Rock" && computerPlay === "Paper") ||
      (playerSelection === "Scissors" && computerPlay === "Rock") ||
      (playerSelection === "Paper" && computerPlay === "Scissors")
    ) {
      outcome = "Lost";
    } else {
      outcome = "Draw";
    }

    function whoWon() {
      if (outcome === "Lost") {
        return alert(`You Lose! ${computerPlay} beats ${playerSelection}
        `);
      } else if (outcome === "Win") {
        return alert(`You Won! ${playerSelection} beats ${computerPlay}`);
      } else {
        return alert("Draw!!!! Rematch");
      }
    }

    whoWon();
  }
  playRound(playerSelection(), computerPlay());
}

function runFiveTimes() {
  for (let i = 0; i < 5; i++) {
    game();
  }
}
