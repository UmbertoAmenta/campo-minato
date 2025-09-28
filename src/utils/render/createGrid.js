import { getTotalCells, setDifficulty } from "../settings/index.js";

export function createGrid(difficulty, bombPositions) {
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

    // distinzione tra celle con/senza bomba
    if (bombPositions.includes(i)) {
      cell.dataset.bomb = "true";
    } else {
      cell.dataset.bomb = "false";
    }

    grid.appendChild(cell);
  }

  return grid;
}
