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
  }
}

const res = document.querySelector(".result");
const scr = document.querySelector(".score");
let playerScore = 0,
  computerScore = 0;
const btn = document.querySelectorAll("button");

btn.forEach((key) =>
  key.addEventListener("click", (e) => {
    if (playerScore < 5 && computerScore < 5) {
      let player = e.target.innerText;

      computer = computerPlay();
      let decision = playRound(player, computer);
      if (decision === 0) {
        computerScore++;
        res.textContent = `You lose! ${computer} beats ${player}`;
      } else if (decision === 1) {
        playerScore++;
        res.textContent = `You win! ${player} beats ${computer}`;
      } else {
        res.textContent = "Draw!";
      }

      scr.textContent = `Player = ${playerScore} || Computer = ${computerScore}`;
    }
    if (
      playerScore + 1 !== computerScore + 1 &&
      (playerScore === 5 || computerScore === 5)
    ) {
      endgame(playerScore, computerScore);
    }
  })
);

function endgame(p, c) {
  btn.forEach((item) => (item.style.display = "none"));
  res.style.display = "none";
  const final = document.createElement("div");
  if (p > c) final.innerText = "You Won The Game!!";
  else final.innerText = "You Lost The Game!!";
  scr.appendChild(final);
  const re = document.createElement("button");
  re.innerText = "Replay?";
  re.style.height = "50px";
  re.style.borderRadius = '5px';
  re.style.fontSize = '0.8em';
  scr.appendChild(re);
  re.addEventListener("click", () => {
    (playerScore = 0), (computerScore = 0);
    btn.forEach((item) => (item.style.display = "inline"));
    res.style.display = "flex";
    final.remove();
    re.remove();
    res.textContent = '';
    scr.textContent = '';
  });
}