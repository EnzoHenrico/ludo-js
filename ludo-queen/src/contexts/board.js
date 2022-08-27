import { createContext, useState } from "react";

import { piecesState } from "./models/defaults";
import { bluePath, greenPath, yellowPath, redPath } from "./models/paths";

const BoardContext = createContext();

const BoardProvider = ({ children }) => {
  const [piecesPositions, setpiecesPositions] = useState(piecesState);

  const getPiecePath = (color) => {
    if (color === "blue") {
      return bluePath;
    }
    if (color === "green") {
      return greenPath;
    }
    if (color === "yellow") {
      return yellowPath;
    }
    if (color === "red") {
      return redPath;
    } else {
      return [];
    }
  };

  return (
    <BoardContext.Provider
      value={{
        piecesPositions,
        setpiecesPositions,
        getPiecePath,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};

export { BoardProvider, BoardContext };
