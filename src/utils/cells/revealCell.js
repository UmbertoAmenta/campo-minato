import {
  countAdjacentBombs,
  revealAllBombs,
  revealAdjacentCells,
} from "./index.js";
import { gameMessage, checkWin } from "../render/index.js";

export function revealCell(cell, bombs, gameState) {
  // nessun effetto se cella già aperta o partita finita
  if (cell.classList.contains("revealed") || gameState.isGameOver) {
    return;
  }

  const cellIndex = parseInt(cell.dataset.index);

  // cella con bomba
  if (bombs.includes(cellIndex)) {
    cell.classList.add("revealed", "bomb");
    gameState.isGameOver = true;
    revealAllBombs(bombs);
    gameMessage("KABOOM!!! Attento ai piedi!");
    return;
  }

  // cella sicura
  cell.classList.add("revealed", "safe");

  // conteggio delle bombe vicine
  const nearByBombs = countAdjacentBombs(cellIndex, bombs);

  // in assenza di bombe adiacenti rivela le celle in prossimità
  if (nearByBombs === 0) {
    revealAdjacentCells(cellIndex, bombs, gameState);
  } else {
    cell.classList.add(`nearBy-${nearByBombs}`);
  }

  checkWin(bombs, gameState);
}
