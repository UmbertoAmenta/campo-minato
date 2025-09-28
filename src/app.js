import { createGrid } from "./utils/render/index.js";
import { generateBombPositions } from "./utils/cells/index.js";
import { bombCount, getTotalCells } from "./utils/settings/index.js";

export function startGame(difficulty) {
  const gameState = {
    isGameOver: false,
    difficulty: difficulty,
  };

  // recupero numero di celle in base alla difficoltà corrente
  const totalCells = getTotalCells(difficulty);

  // generazione array di indici delle bombe
  const bombs = generateBombPositions(bombCount, totalCells);

  // creazione griglia e passaggio posizioni bombe
  const grid = createGrid(difficulty, bombs, gameState);

  return { grid, bombs, gameState };
}

const gameState = startGame("medium");
