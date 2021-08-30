const appElement: HTMLElement | null = document.querySelector("#app");
const boardElemenmt = document.querySelector("#board");

const rowCount: number = 3;
const columnCount: number = 3;

type singleCell = "X" | "O" | "";

type singleRow = [singleCell, singleCell, singleCell];

type boardState = [singleRow, singleRow, singleRow];

const boardState: boardState = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

let currentMove: "X" | "O" = "X";

function createCell(row: number, col: number, content: singleCell = "") {
  const cell = document.createElement("button");
  cell.setAttribute("data-row", row.toString());
  cell.setAttribute("data-col", col.toString());
  cell.setAttribute("data-content", content);

  cell.addEventListener("click", () => {
    if (boardState[row][col] !== "") throw new Error("Already occupied");

    boardState[row][col] = currentMove;
    currentMove = currentMove === "X" ? "O" : "X";
    renderBoard();
  });

  return cell;
}

function renderBoard() {
  if (!appElement) throw new Error("No App");
  if (!boardElemenmt) throw new Error("No Board");

  boardElemenmt.innerHTML = "";
  for (let i = 0; i < rowCount; i++) {
    for (let j = 0; j < columnCount; j++) {
      boardElemenmt.appendChild(createCell(i, j, boardState[i][j]));
    }
  }

  const oldMoveEl = document.querySelector("#move-element");

  if (oldMoveEl) {
    oldMoveEl.remove();
  }

  const moveEl = document.createElement("p");
  moveEl.setAttribute("id", "move-element");
  moveEl.innerText = `Next Move: ${currentMove}`;

  appElement.appendChild(moveEl);
}

(() => {
  renderBoard();
})();
