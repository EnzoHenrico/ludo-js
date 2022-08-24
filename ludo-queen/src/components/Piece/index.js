import { useContext, useState, useEffect } from "react";

import { bluePath, greenPath, yeloowPath, redPath } from "./models/paths";
import { TurnContext } from "../../contexts/turn";
import getInitialPlaces from "./models/positions";
import styles from "./Piece.module.css";

const Piece = ({ number, color }) => {
  const {
    diceNumber,
    colorPlaying,
    setTurnIsOver,
    finishMove,
    homeStats,
    setHomeStats,
  } = useContext(TurnContext);
  const InitialPlace = getInitialPlaces(number, color);
  const [pieceStatus, setPieceStatus] = useState({
    currSquare: InitialPlace,
    cordenateIndex: 0,
    isSafe: true,
    isInEnd: false,
  });

  const pieceKey = `${color}-piece-${number}`;
  const pieceName = `${color}${number}`;
  const pieceBaseCordenate = InitialPlace;

  const getPiecePath = () => {
    if (color === "blue") {
      return bluePath;
    }
    if (color === "green") {
      return greenPath;
    }
    if (color === "yellow") {
      return yeloowPath;
    }
    if (color === "red") {
      return redPath;
    } else {
      return [];
    }
  };

  const move = () => {
    if (colorPlaying !== color || diceNumber === null) return;
    if (homeStats[pieceName] && diceNumber !== 6) return;

    const crrIndex = pieceStatus.cordenateIndex;
    const nextIndex = crrIndex + diceNumber;
    const path = getPiecePath();

    if (pieceStatus.currSquare === InitialPlace && diceNumber === 6) {
      setTimeout(() => {
        setPieceStatus({
          ...pieceStatus,
          currSquare: path[1],
          cordenateIndex: 1,
        });
        setHomeStats({ ...homeStats, [pieceName]: false });
        finishMove();
      }, 500);
      return;
    }

    if (crrIndex === path.length || nextIndex > path.length - 1) return;

    for (let i = 1; i <= diceNumber; i++) {
      const cordenate = crrIndex + i;
      const square = path[cordenate];
      setTimeout(
        () =>
          setPieceStatus({
            ...pieceStatus,
            currSquare: square,
            cordenateIndex: cordenate,
          }),
        500 * i
      );
    }

    setHomeStats({ ...homeStats, [pieceName]: false });
    setTimeout(() => finishMove(), 500 * diceNumber);
  };

  return (
    <>
      <div
        className={styles[`pieceBase-${number}`]}
        style={{
          backgroundColor: `var(--${color})`,
          gridArea: pieceBaseCordenate,
        }}
      />
      <img
        key={pieceKey}
        onClick={move}
        alt="pin"
        src={`${color}_pin.svg`}
        className={styles[pieceKey]}
        style={{ transform: "scale(0.7)", gridArea: pieceStatus.currSquare }}
      />
    </>
  );
};

export default Piece;
