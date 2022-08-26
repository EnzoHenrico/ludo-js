import { createContext, useState } from "react";

import { piecesState } from "./models/defaults";

const BoardContext = createContext();

const BoardProvider = ({ children }) => {
  const [piecesPositions, setpiecesPositions] = useState(piecesState);

  return (
    <BoardContext.Provider
      value={{
        piecesPositions,
        setpiecesPositions,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};

export { BoardProvider, BoardContext };
