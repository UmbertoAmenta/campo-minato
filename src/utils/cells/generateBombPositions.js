export function generateBombPositions(numberOfBombs, totalCells) {
  // creazione di un set per evitare che la stessa casella possa contenere più bombe
  const bombPositions = new Set();

  // generazione casuale dell'indice che identifica la cella che conterrà la bomba
  const chooseRandomCell = (numberOfCells) => {
    return Math.floor(Math.random() * numberOfCells);
  };

  // creazione dell'array di indici
  while (bombPositions.size < numberOfBombs) {
    bombPositions.add(chooseRandomCell(totalCells));
  }
  console.log("BombPositions", [...bombPositions]);

  return [...bombPositions];
}
