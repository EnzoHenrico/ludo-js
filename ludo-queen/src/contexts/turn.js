import { createContext, useContext, useEffect, useState } from "react";
import { BoardContext } from "./board";

const TurnContext = createContext();

const TurnProvider = ({ children }) => {
  const { piecesPositions } = useContext(BoardContext);
  const [colorPlaying, setColorPlaying] = useState("blue");
  const [diceNumber, setDiceNumber] = useState(null);
  const [rolledDice, setRolledDice] = useState(false);
  const [movedPiece, setMovedPiece] = useState(false);
  const [turnIsOver, setTurnIsOver] = useState(false);

  // console.log({
  //   "color playing": colorPlaying,
  //   "rolled dice? ": rolledDice,
  //   "dice number": diceNumber,
  //   "moved piece": movedPiece,
  //   "pieces stats": piecesPositions[colorPlaying],
  // });

  const finishMove = () => {
    setDiceNumber(null);
    if (diceNumber !== 6) {
      setMovedPiece(true);
      setTurnIsOver(true);
    }
  };

  // Pass turn if all in home
  const checkIsHome = () => {
    if (
      piecesPositions[colorPlaying][1].home &&
      piecesPositions[colorPlaying][2].home &&
      piecesPositions[colorPlaying][3].home &&
      piecesPositions[colorPlaying][4].home &&
      diceNumber !== 6
    ) {
      setTimeout(() => setTurnIsOver(true), 1000);
    }
  };

  // Create new turnc:\Users\782760\AppData\Local\Programs\Microsoft VS Code\resources\app\out\vs\code\electron-sandbox\workbench\workbench.html
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
        checkIsHome,
      }}
    >
      {children}
    </TurnContext.Provider>
  );
};

export { TurnProvider, TurnContext };
