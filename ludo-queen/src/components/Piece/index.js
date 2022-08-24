import { useContext, useEffect, useState } from "react";

import { bluePath, greenPath, yeloowPath, redPath } from "./models/paths";
import { BoardContext } from "../../contexts/board";
import { TurnContext } from "../../contexts/turn";
import getInitialPlaces from "./models/positions";
import styles from "./Piece.module.css";

const Piece = ({ number, color }) => {
  const { piecesPositions, setpiecesPositions } = useContext(BoardContext);
  const { diceNumber, colorPlaying, finishMove, homeStats, setHomeStats } =
    useContext(TurnContext);
  const initialPlace = getInitialPlaces(number, color);
  const [pieceStatus, setPieceStatus] = useState({
    currSquare: initialPlace,
    cordenateIndex: 0,
  });

  const pieceKey = `${color}-piece-${number}`;
  const pieceName = `${color}${number}`;
  const pieceBaseCordenate = initialPlace;

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

    if (pieceStatus.currSquare === initialPlace && diceNumber === 6) {
      setTimeout(() => {
        setPieceStatus({
          ...pieceStatus,
          currSquare: path[1],
          cordenateIndex: 1,
        });
        setHomeStats({ ...homeStats, [pieceName]: false });
        const newValues = piecesPositions.map((piece) => {
          if (piece.color === color && parseInt(piece.number) === number) {
            return { ...piece, position: path[1] };
          } else {
            return { ...piece };
          }
        });
        setpiecesPositions(newValues);
        finishMove();
      }, 500);
      return;
    }

    if (crrIndex === path.length || nextIndex > path.length - 1) return;

    for (let i = 1; i <= diceNumber; i++) {
      // CHECK IF IT IS A BLOCK && i++
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
    const newValues = piecesPositions.map((piece) => {
      if (piece.color === color && parseInt(piece.number) === number) {
        return {
          ...piece,
          position: path[pieceStatus.cordenateIndex + diceNumber],
        };
      } else {
        return { ...piece };
      }
    });
    setpiecesPositions(newValues);
    setTimeout(() => finishMove(), 500 * diceNumber);
  };

  const createBlock = () => {
    // CREATE BLOCK OBJECT
  };

  const resetPiece = (team, id) => {
    // RESET POSSITION
  };

  useEffect(() => {
    console.log(piecesPositions);
    piecesPositions.map((square) => {
      if (
        square.position === pieceStatus.currSquare &&
        square.color !== color
      ) {
        //resetPiece(square.color, square.number);
      }
    });
  }, [piecesPositions]);

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
