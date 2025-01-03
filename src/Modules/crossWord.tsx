import React from "react";

const crosswordGrid = [
  ["", "", "", "C", "A", "Z", "O", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "F", "O", "G", "Ó", "N", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "P", "A", "L", "A", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["C", "O", "L", "A", "D", "O", "R", ""],
  ["", "", "", "", "", "", "", ""],
  ["C", "U", "C", "H", "I", "L", "L", "O"],
  ["", "", "", "", "", "", "", ""],
  ["T", "E", "N", "E", "D", "O", "R", ""],
  ["", "", "", "", "", "", "", ""],
  ["T", "I", "N", "A", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["T", "A", "B", "L", "A", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["S", "E", "R", "V", "I", "L", "L", "A"],
  ["", "", "", "", "", "", "", ""],
  ["P", "I", "N", "Z", "A", "S", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["T", "O", "R", "T", "I", "L", "L", "E"],
  ["", "", "", "", "", "", "", ""],
  ["S", "A", "L", "S", "A", "S", "", ""],
];

const Crossword = () => {
  return (
    <div className="p-4 text-black">
      <h1 className="text-2xl font-bold mb-4 text-center">Crucigrama</h1>
      <div className="flex flex-col gap-1 items-center">
        {crosswordGrid.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-1">
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                className={`w-10 h-10 border text-center text-lg font-semibold uppercase flex items-center justify-center ${
                  cell ? "bg-white" : "bg-gray-200"
                }`}
              >
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Crossword;