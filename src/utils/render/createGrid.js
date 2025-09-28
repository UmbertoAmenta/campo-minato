import { getTotalCells, setDifficulty } from "../settings/index.js";
import { revealCell } from "../cells/index.js";

export function createGrid(difficulty, bombPositions, gameState) {
  // selezione elemento .grid, reset di griglia e difficoltà, aggiunta difficoltà selezionata
  const grid = document.querySelector(".grid");
  grid.innerHTML = "";
  grid.classList.remove("easy", "medium", "hard");
  grid.classList.add(difficulty);

  // recupero difficoltà e numero di celle
  setDifficulty(difficulty);
  const totalCells = getTotalCells();

  // creazione delle celle
  for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.index = i.toString();

    // distinzione tra celle con/senza bomba
    if (bombPositions.includes(i)) {
      cell.dataset.bomb = "true";
    } else {
      cell.dataset.bomb = "false";
    }

    grid.appendChild(cell);
  }

  // aggiunta evento click sulla cella
  grid.querySelectorAll(".cell").forEach((cell) => {
    cell.addEventListener("click", () => {
      if (!gameState.isGameOver) {
        revealCell(cell, bombPositions, gameState);
      }
    });
  });

  return grid;
}
