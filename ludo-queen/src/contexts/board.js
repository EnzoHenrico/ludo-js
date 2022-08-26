import { createContext, useState } from "react";

const BoardContext = createContext();

const BoardProvider = ({ children }) => {
  const [piecesPositions, setpiecesPositions] = useState([
    { team: "blue", id: 1, position: "12/3", index: 0, home: true },
    { team: "blue", id: 2, position: "12/4", index: 0, home: true },
    { team: "blue", id: 3, position: "13/3", index: 0, home: true },
    { team: "blue", id: 4, position: "13/4", index: 0, home: true },

    { team: "red", id: 1, position: "3/3", index: 0, home: true },
    { team: "red", id: 2, position: "3/4", index: 0, home: true },
    { team: "red", id: 3, position: "4/3", index: 0, home: true },
    { team: "red", id: 4, position: "4/4", index: 0, home: true },

    { team: "green", id: 1, position: "3/12", index: 0, home: true },
    { team: "green", id: 2, position: "3/13", index: 0, home: true },
    { team: "green", id: 3, position: "4/12", index: 0, home: true },
    { team: "green", id: 4, position: "4/13", index: 0, home: true },

    { team: "yellow", id: 1, position: "12/12", index: 0, home: true },
    { team: "yellow", id: 2, position: "12/13", index: 0, home: true },
    { team: "yellow", id: 3, position: "13/12", index: 0, home: true },
    { team: "yellow", id: 4, position: "13/13", index: 0, home: true },
  ]);

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