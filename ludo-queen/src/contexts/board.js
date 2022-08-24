import { createContext, useState, useEffect } from "react";

const BoardContext = createContext();

const BoardProvider = ({ children }) => {
  const [filledSpaces, setFilledSpaces] = useState([]);
  const [piecesPositions, setpiecesPositions] = useState([
    { color: "blue", number: "1", position: "" },
    { color: "blue", number: "2", position: "" },
    { color: "blue", number: "3", position: "" },
    { color: "blue", number: "4", position: "" },
    { color: "red", number: "1", position: "" },
    { color: "red", number: "2", position: "" },
    { color: "red", number: "3", position: "" },
    { color: "red", number: "4", position: "" },
    { color: "green", number: "1", position: "" },
    { color: "green", number: "2", position: "" },
    { color: "green", number: "3", position: "" },
    { color: "green", number: "4", position: "" },
    { color: "yellow", number: "1", position: "" },
    { color: "yellow", number: "2", position: "" },
    { color: "yellow", number: "3", position: "" },
    { color: "yellow", number: "4", position: "" },
  ]);

  const safePlaces = [
    "2/9",
    "7/13",
    "9/14",
    "13/9",
    "14/7",
    "9/3",
    "7/2",
    "3/7",
  ];

  let fillesSquares = [
    { color: "blue", number: "1", position: "12/7" },
    { color: "red", number: "3", position: "8/8" },
    { color: "green", number: "1", position: "1/1" },
    { color: "yellow", number: "2", position: "12/7" },
    { color: "green", number: "1", position: "1/2" },
  ];

  let lastMove = { color: "green", number: "1", position: "1/1" };

  return (
    <BoardContext.Provider value={{ piecesPositions, setpiecesPositions }}>
      {children}
    </BoardContext.Provider>
  );
};

export { BoardProvider, BoardContext };
