import { getGridSize } from "../settings/index.js";
import { revealCell } from "./index.js";

export function revealAdjacentCells(cellIndex, bombs, gameState) {
  const gridSize = getGridSize();

  // **refact** calcolo posizione e indici celle adiacenti
  // calcola riga e colonna correnti
  const currentRow = Math.floor(cellIndex / gridSize);
  const currentCol = cellIndex % gridSize;

  // indici delle celle situate in prossimità
  const indexOfProximityCells = [
    -gridSize - 1, // alto-sinistra
    -gridSize, // alto
    -gridSize + 1, // alto-destra
    -1, // sinistra
    1, // destra
    gridSize - 1, // basso-sinistra
    gridSize, // basso
    gridSize + 1, // basso-destra
  ];

  indexOfProximityCells.forEach((offset) => {
    const neighborIndex = cellIndex + offset;
    const neighborRow = Math.floor(neighborIndex / gridSize);
    const neighborCol = neighborIndex % gridSize;

    // Verifica che la cella sia valida e nella riga/colonna corretta
    const isValid =
      neighborIndex >= 0 &&
      neighborIndex < gridSize * gridSize &&
      Math.abs(neighborRow - currentRow) <= 1 &&
      Math.abs(neighborCol - currentCol) <= 1;

    if (isValid) {
      const neighborCell = document.querySelector(
        `[data-index="${neighborIndex}"]`
      );
      if (neighborCell && !neighborCell.classList.contains("revealed")) {
        revealCell(neighborCell, bombs, gameState);
      }
    }
  });
}
