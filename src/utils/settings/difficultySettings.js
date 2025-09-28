// numero di celle della griglia in base alla difficoltà
const difficultyLevels = {
  easy: 100,
  medium: 81,
  hard: 49,
};

// difficoltà di default
let currentDifficulty = "hard";

// numero di celle per lato (griglia quadrata) in base alla difficoltà
const gridDimensions = {
  easy: Math.sqrt(difficultyLevels["easy"]),
  medium: Math.sqrt(difficultyLevels["medium"]),
  hard: Math.sqrt(difficultyLevels["hard"]),
};

// recupera numero di celle della griglia in base alla difficoltà selezionata
function getTotalCells() {
  return difficultyLevels[currentDifficulty];
}

// recupera numero di celle per lato (griglia quadrata) in base alla difficoltà selezionata
function getGridSize() {
  return gridDimensions[currentDifficulty];
}

// numero di bombe (al momento numero fisso)
const bombCount = 16;

// modifica difficoltà di gioco (dimensioni griglia)
function setDifficulty(level) {
  currentDifficulty = level;
}

export {
  difficultyLevels,
  bombCount,
  setDifficulty,
  getTotalCells,
  getGridSize,
};
