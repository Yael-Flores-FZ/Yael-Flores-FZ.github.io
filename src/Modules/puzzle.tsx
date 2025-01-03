import React, { useState, useEffect } from "react";

type Tile = {
  id: number;
  position: number;
  backgroundPosition: string;
};

const shuffleArray = (array: Tile[]): Tile[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.map((tile, index) => ({ ...tile, position: index }));
};

const imageTiles: Tile[] = Array.from({ length: 16 }, (_, i) => ({
  id: i + 1,
  position: i,
  backgroundPosition: `${-(i % 4) * 100}% ${-Math.floor(i / 4) * 100}%`,
}));

const Puzzle = () => {
  const [tiles, setTiles] = useState<Tile[]>([]);
  const [isSolved, setIsSolved] = useState(false);

  useEffect(() => {
    const shuffledTiles = shuffleArray(imageTiles);
    setTiles(shuffledTiles);
  }, []);

  const moveTile = (position: number) => {
    const emptyTile = tiles.find((tile) => tile.id === 16);
    if (!emptyTile) return;

    const validMoves = [
      emptyTile.position - 4, // Above
      emptyTile.position + 4, // Below
      emptyTile.position - 1, // Left
      emptyTile.position + 1, // Right
    ];

    if (validMoves.includes(position)) {
      const updatedTiles = tiles.map((tile) => {
        if (tile.position === position) return { ...tile, position: emptyTile.position };
        if (tile.id === 16) return { ...tile, position };
        return tile;
      });
      setTiles(updatedTiles);

      // Check if the puzzle is solved
      const solved = updatedTiles.every((tile, index) => tile.position === index);
      setIsSolved(solved);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Rompecabezas</h1>
      <div className="grid grid-cols-4 gap-1 w-[400px] h-[400px] mx-auto">
        {tiles
          .sort((a, b) => a.position - b.position)
          .map((tile) => (
            <div
              key={tile.id}
              className={`w-[100px] h-[100px] border cursor-pointer ${
                tile.id === 16 ? "bg-gray-300" : "bg-cover"
              }`}
              style={{
                backgroundImage: tile.id !== 16 ? "url('/images/puzzle.jpeg')" : undefined,
                backgroundSize: "400% 400%",
                backgroundPosition: tile.backgroundPosition,
              }}
              onClick={() => moveTile(tile.position)}
            ></div>
          ))}
      </div>
      {isSolved && <p className="text-black text-center font-semibold mt-4">¡Felicidades, resolviste el rompecabezas!</p>}
    </div>
  );
};

export default Puzzle;