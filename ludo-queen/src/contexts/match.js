import { createContext, useState } from "react";

const MatchContext = createContext();

const MatchProvider = ({ children }) => {
  const [currTurn, setCurrTurn] = useState({
    blueTurn: true,
    redTurn: false,
    greenTurn: false,
    yellowTurn: false,
  });


  return(
    <MatchContext.Provider
    value={{currTurn}}
    >
      {children}
    </MatchContext.Provider>
  );
}

export {MatchProvider, MatchContext};
