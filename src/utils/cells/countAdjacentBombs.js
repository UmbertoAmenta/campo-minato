import { getGridSize } from "../settings/index.js";

export function countAdjacentBombs(index, bombPositions) {
  const cellsPerRow = getGridSize();
  const totalCells = cellsPerRow * cellsPerRow;
  // indici delle celle situate in prossimità
  const indexOfProximityCells = [
    -cellsPerRow - 1, // alto-sinistra
    -cellsPerRow, // alto
    -cellsPerRow + 1, // alto-destra
    -1, // sinistra
    1, // destra
    cellsPerRow - 1, // basso-sinistra
    cellsPerRow, // basso
    cellsPerRow + 1, // basso-destra
  ];

  // calcola riga e colonna correnti
  const currentRow = Math.floor(index / cellsPerRow);
  const currentCol = index % cellsPerRow;

  return indexOfProximityCells.reduce((count, direction) => {
    const neighborIndex = index + direction;
    const neighborRow = Math.floor(neighborIndex / cellsPerRow);
    const neighborCol = neighborIndex % cellsPerRow;

    // verifica che la cella adiacente sia nella griglia e nella riga/colonna corretta
    const isValid =
      neighborIndex >= 0 &&
      neighborIndex < totalCells &&
      Math.abs(neighborRow - currentRow) <= 1 &&
      Math.abs(neighborCol - currentCol) <= 1;

    return count + (isValid && bombPositions.includes(neighborIndex) ? 1 : 0);
  }, 0);
}
