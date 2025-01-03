// Archivo TypeScript para una sopa de letras interactiva en React con TailwindCSS
import React, { useState } from "react";

type Cell = {
  row: number;
  col: number;
};

type FoundWord = {
  word: string;
  positions: Cell[];
};

const wordsToFind = [
  "cazo",
  "fogón",
  "pala",
  "colador",
  "cuchillo",
  "tenedor",
  "tina",
  "tabla",
  "servilletas",
  "pinzas",
  "tortillero",
  "salsas",
];

const grid = Array.from({ length: 19 }, () => Array.from({ length: 15 }, () => ""));

// Función para insertar palabras en la cuadrícula
const placeWordsInGrid = (grid: string[][], words: string[]): string[][] => {
  const directions = [
    [0, 1], // Horizontal
    [1, 0], // Vertical
    [1, 1], // Diagonal hacia abajo
    [-1, 1], // Diagonal hacia arriba
  ];

  const placeWord = (word: string): boolean => {
    const maxAttempts = 100;
    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      const direction = directions[Math.floor(Math.random() * directions.length)];
      const startRow = Math.floor(Math.random() * 19);
      const startCol = Math.floor(Math.random() * 15);

      if (
        canPlaceWord(grid, word, startRow, startCol, direction[0], direction[1])
      ) {
        for (let i = 0; i < word.length; i++) {
          const newRow = startRow + i * direction[0];
          const newCol = startCol + i * direction[1];
          grid[newRow][newCol] = word[i];
        }
        return true;
      }
    }
    return false;
  };

  const canPlaceWord = (
    grid: string[][],
    word: string,
    row: number,
    col: number,
    rowDir: number,
    colDir: number
  ): boolean => {
    for (let i = 0; i < word.length; i++) {
      const newRow = row + i * rowDir;
      const newCol = col + i * colDir;
      if (
        newRow < 0 ||
        newRow >= 19 ||
        newCol < 0 ||
        newCol >= 15 ||
        (grid[newRow][newCol] !== "" && grid[newRow][newCol] !== word[i])
      ) {
        return false;
      }
    }
    return true;
  };

  words.forEach((word) => {
    if (!placeWord(word)) {
      console.warn(`No se pudo colocar la palabra: ${word}`);
    }
  });

  return grid;
};

const fillEmptySpaces = (grid: string[][]): string[][] => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return grid.map((row) =>
    row.map((cell) => (cell === "" ? alphabet[Math.floor(Math.random() * alphabet.length)] : cell))
  );
};

const filledGrid = fillEmptySpaces(placeWordsInGrid(grid, wordsToFind));

const WordSearch: React.FC = () => {
  const [selectedCells, setSelectedCells] = useState<Cell[]>([]);
  const [foundWords, setFoundWords] = useState<FoundWord[]>([]);

  const handleMouseDown = (row: number, col: number) => {
    setSelectedCells([{ row, col }]);
  };

  const handleMouseOver = (row: number, col: number) => {
    if (selectedCells.length > 0) {
      setSelectedCells([...selectedCells, { row, col }]);
    }
  };

  const handleMouseUp = () => {
    const selectedWord = selectedCells
      .map((cell) => filledGrid[cell.row][cell.col])
      .join("");

    if (wordsToFind.includes(selectedWord)) {
      setFoundWords((prev) => [
        ...prev,
        { word: selectedWord, positions: [...selectedCells] },
      ]);
    }

    setSelectedCells([]);
  };

  const isHighlighted = (row: number, col: number) => {
    return selectedCells.some((cell) => cell.row === row && cell.col === col);
  };

  const isFoundCell = (row: number, col: number) => {
    return foundWords.some((foundWord) =>
      foundWord.positions.some((pos) => pos.row === row && pos.col === col)
    );
  };

  const isFound = (word: string) => foundWords.some((foundWord) => foundWord.word === word);

  return (
    <div className="p-4 select-none">

      <h1 className="text-2xl font-bold mb-4">Sopa de Letras</h1>

      <div className='flex flex-col md:flex-row gap-4'>
        <div className="flex flex-col gap-2">
          {filledGrid.map((row, rowIndex) => (
            <div key={rowIndex} className="flex gap-2">
              {row.map((letter, colIndex) => (
                <div
                  key={colIndex}
                  className={`w-10 h-10 flex items-center justify-center border text-lg font-semibold cursor-pointer ${isHighlighted(rowIndex, colIndex) || isFoundCell(rowIndex, colIndex)
                    ? "bg-yellow-300"
                    : ""
                    }`}
                  onMouseDown={() => handleMouseDown(rowIndex, colIndex)}
                  onMouseOver={() => handleMouseOver(rowIndex, colIndex)}
                  onMouseUp={handleMouseUp}
                >
                  {letter}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-2">Palabras a Encontrar:</h2>
          <ul>
            {wordsToFind.map((word) => (
              <li
                key={word}
                className={`text-lg ${isFound(word) ? "line-through text-gray-500" : ""}`}
              >
                {word}
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  );
};

export default WordSearch;
