import { getTotalCells } from "../settings/index.js";
import { gameMessage } from "./index.js";

export function checkWin(bombs, gameState) {
  const totalCells = getTotalCells(gameState.difficulty);
  const revealedCells = document.querySelectorAll(".cell.revealed").length;

  if (revealedCells === totalCells - bombs.length && !gameState.isGameOver) {
    gameState.isGameOver = true;
    gameMessage(
      "Hai evitato ogni mina, stavolta sei salvo, complimenti soldato!"
    );
  }
}
