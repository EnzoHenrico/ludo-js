import { useContext, useEffect, useState } from "react";

import { bluePath, greenPath, yeloowPath, redPath } from "./models/paths";
import { BoardContext } from "../../contexts/board";
import { TurnContext } from "../../contexts/turn";
import getInitialPlaces from "./models/positions";
import styles from "./Piece.module.css";

const Piece = ({ number, color }) => {
  const { piecesPositions, setpiecesPositions } = useContext(BoardContext);
  const { diceNumber, colorPlaying, finishMove } = useContext(TurnContext);
  const initialPlace = getInitialPlaces(number, color);

  // const [pieceStatus, setPieceStatus] = useState({
  //   currSquare: initialPlace,
  //   cordenateIndex: 0,
  // });

  const piece = piecesPositions[color][number];
  const pieceKey = `${color}-piece-${number}`;

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
    // Prevent move piece in wrong trun
    if (colorPlaying !== color || diceNumber === null) return;
    // Prevent move piece from home without a 6
    if (piece.home && diceNumber !== 6) return;

    const crrIndex = piece.index;
    const nextIndex = crrIndex + diceNumber;
    const path = getPiecePath();

    console.log({
      name: `${color} ${number}`,
      peice: piece,
      initial: initialPlace,
    });

    // Moving piece from initial place to first initial square
    if (piece.position === initialPlace && diceNumber === 6) {
      setTimeout(() => {
        setpiecesPositions({
          ...piecesPositions,
          [color]: {
            ...piecesPositions[color],
            [number]: {
              position: path[1],
              index: 1,
              home: false,
            },
          },
        });
        finishMove();
      }, 500);
      return;
    }

    // Prevent piece to move more than the boards end
    if (crrIndex === path.length || nextIndex > path.length - 1) return;

    // Moving piece based on dice roll
    for (let i = 1; i <= diceNumber; i++) {
      // DO CHECK IF IT IS A BLOCK && i++ **
      const cordenate = crrIndex + i;
      const square = path[cordenate];
      setTimeout(
        () =>
          setpiecesPositions({
            ...piecesPositions,
            [color]: {
              ...piecesPositions[color],
              [number]: {
                position: square,
                index: cordenate,
                home: false,
              },
            },
          }),
        500 * i
      );
    }
    setTimeout(() => finishMove(), 500 * diceNumber);
  };

  return (
    <>
      <div
        className={styles[`pieceBase-${number}`]}
        style={{
          backgroundColor: `var(--${color})`,
          gridArea: initialPlace,
        }}
      />
      <img
        key={pieceKey}
        onClick={move}
        alt="pin"
        src={`${color}_pin.svg`}
        className={styles[pieceKey]}
        style={{ transform: "scale(0.7)", gridArea: piece.position }}
      />
    </>
  );
};

export default Piece;
