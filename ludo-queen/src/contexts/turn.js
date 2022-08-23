import { createContext, useEffect, useState } from "react";

const TurnContext = createContext();

const TurnProvider = ({ children }) => {
  const [diceNumber, setDiceNumber] = useState(null);
  const [ rolledDice, setRolledDice ] = useState(false);
  const [ movedPiece, setMovedPiece ] = useState(false);
  const [ turnsOver, setturnsOver ] = useState(false);

  return(
    <TurnContext.Provider
      value={{ rolledDice, setRolledDice, diceNumber, setDiceNumber }}
    >
      {children}
    </TurnContext.Provider>
  );
}

export {TurnProvider, TurnContext};
