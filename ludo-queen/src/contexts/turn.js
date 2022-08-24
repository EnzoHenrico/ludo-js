import { createContext, useEffect, useState } from "react";

const TurnContext = createContext();

const TurnProvider = ({ children }) => {
  const [colorPlaying, setColorPlaying] = useState("blue");
  const [diceNumber, setDiceNumber] = useState(null);
  const [rolledDice, setRolledDice] = useState(false);
  const [movedPiece, setMovedPiece] = useState(false);
  const [turnIsOver, setTurnIsOver] = useState(false);
  const [homeStats, setHomeStats] = useState({
    blue1: true,
    blue2: true,
    blue3: true,
    blue4: true,
    red1: true,
    red2: true,
    red3: true,
    red4: true,
    green1: true,
    green2: true,
    green3: true,
    green4: true,
    yellow1: true,
    yellow2: true,
    yellow3: true,
    yellow4: true,
  });

  console.log({
    "color playing": colorPlaying,
    "rolled dice? ": rolledDice,
    "dice number": diceNumber,
    "moved piece": movedPiece,
    homeStats: homeStats,
  });

  const finishMove = () => {
    setDiceNumber(null);
    setMovedPiece(true);
    if (diceNumber !== 6) setTurnIsOver(true);
  };
  // Pass turn if all in home
  const checkIsHome = () => {
    if (
      homeStats[`${colorPlaying}1`] &&
      homeStats[`${colorPlaying}2`] &&
      homeStats[`${colorPlaying}3`] &&
      homeStats[`${colorPlaying}4`] &&
      diceNumber !== 6
    ) {
      setTurnIsOver(true);
    }
  };

  // Create new turn
  useEffect(() => {
    if (turnIsOver) {
      let nextColor;

      if (colorPlaying === "blue") {
        nextColor = "red";
      } else if (colorPlaying === "red") {
        nextColor = "green";
      } else if (colorPlaying === "green") {
        nextColor = "yellow";
      } else if (colorPlaying === "yellow") {
        nextColor = "blue";
      }

      console.log({ "turn over": turnIsOver, "new color": nextColor });

      setColorPlaying(nextColor);
      setDiceNumber(null);
      setRolledDice(false);
      setMovedPiece(false);
      setTurnIsOver(false);
    }
  }, [turnIsOver]);

  return (
    <TurnContext.Provider
      value={{
        rolledDice,
        setRolledDice,
        diceNumber,
        setDiceNumber,
        colorPlaying,
        setColorPlaying,
        movedPiece,
        setMovedPiece,
        turnIsOver,
        setTurnIsOver,
        finishMove,
        homeStats,
        setHomeStats,
        checkIsHome,
      }}
    >
      {children}
    </TurnContext.Provider>
  );
};

export { TurnProvider, TurnContext };
