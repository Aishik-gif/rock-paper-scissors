function computerPlay() {
  let choice = Math.floor(Math.random() * 3 + 1);
  switch (choice) {
    case 1:
      return "Rock";
      break;
    case 2:
      return "Paper";
      break;
    case 3:
      return "Scissors";
      break;
  }
}

function playRound(player, computer) {
  switch (player) {
    case "Rock":
      if (computer === "Paper") {
        return 0;
      } else if (computer === "Scissors") {
        return 1;
      } else if (computer === "Rock") {
        return 2;
      }
      break;
    case "Paper":
      if (computer === "Scissors") {
        return 0;
      } else if (computer === "Rock") {
        return 1;
      } else if (computer === "Paper") {
        return 2;
      }
      break;
    case "Scissors":
      if (computer === "Rock") {
        return 0;
      } else if (computer === "Paper") {
        return 1;
      } else if (computer === "Scissors") {
        return 2;
      }
      break;
    case undefined:
    case null:
      return 3;
      break;
    default:
      return 4;
  }
}

function game() {
  let playerScore = 0,
    computerScore = 0;
  for (let i = 0; i < 5; i++) {
    let player = prompt("Enter your choice");
    if (player != null) {
      player = player.toUpperCase();
      player = player[0] + player.slice(1).toLowerCase();
    }
    computer = computerPlay();
    let decision = playRound(player, computer);
    if (decision === 0) {
      alert(`You lose! ${computer} beats ${player}`);
      computerScore++;
    } else if (decision === 1) {
      alert(`You win! ${player} beats ${computer}`);
      playerScore++;
    } else if (decision === 2) {
      alert("Draw!");
    } else if (decision === 4) {
      alert("Enter rock, paper, scissors");
      i--;
    } else {
      return;
    }
  }
  if (playerScore > computerScore) {
    alert(`You Win. \nScore: ${playerScore} : ${computerScore}`);
  } else if (computerScore > playerScore) {
    alert(`You Lose. \nScore: ${playerScore} : ${computerScore}`);
  } else {
    alert("Draw");
  }
}

game();