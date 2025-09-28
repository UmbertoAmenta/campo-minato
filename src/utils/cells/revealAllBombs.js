export function revealAllBombs(bombs) {
  bombs.forEach((bombIndex) => {
    const bombCell = document.querySelector(`[data-index="${bombIndex}"]`);
    if (bombCell) {
      bombCell.classList.add("revealed", "bomb");
    }
  });
}
