let currentPlayer = "X";
let gameActive = true;
const statusDisplay = document.getElementById("status");

function handleClick(cell) {
  if (!gameActive || cell.textContent !== "") return;

  cell.textContent = currentPlayer;
  if (checkWinner()) {
    statusDisplay.textContent = `Player ${currentPlayer} Wins!`;
    gameActive = false;
    return;
  }

  if (isDraw()) {
    statusDisplay.textContent = "It's a Draw!";
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  statusDisplay.textContent = `Player ${currentPlayer}'s Turn`;
}

function checkWinner() {
  const cells = Array.from(document.getElementsByClassName("cell"));
  const winConditions = [
    [0,1,2], [3,4,5], [6,7,8], // rows
    [0,3,6], [1,4,7], [2,5,8], // columns
    [0,4,8], [2,4,6]           // diagonals
  ];

  return winConditions.some(condition => {
    const [a,b,c] = condition;
    return cells[a].textContent &&
           cells[a].textContent === cells[b].textContent &&
           cells[b].textContent === cells[c].textContent;
  });
}

function isDraw() {
  const cells = Array.from(document.getElementsByClassName("cell"));
  return cells.every(cell => cell.textContent !== "");
}

function resetGame() {
  const cells = document.getElementsByClassName("cell");
  for (let cell of cells) {
    cell.textContent = "";
  }
  currentPlayer = "X";
  gameActive = true;
  statusDisplay.textContent = "Player X's Turn";
}
