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

  const [piece] = piecesPositions.filter((value) => {
    if (value.team === color && value.id === number) {
      return value;
    }
  });

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

  const eatPiece = (target) => {
    console.log("EAT EAT EAT EAT EAT EAT EAT ");
    piecesPositions.filter((piece) => {
      if (piece.position === target && piece.team != color) {
        piece.position = getInitialPlaces(piece.id, piece.team);
        piece.index = 0;
        piece.home = true;
      }
    });
  };

  const changePosition = (positionValue, indexValue, isHome) => {
    const newPosition = piecesPositions.map((value) => {
      if (value === piece) {
        value.position = positionValue;
        value.index = indexValue;
        value.home = isHome;
      }
      return value;
    });
    setpiecesPositions(newPosition);
  };

  const intialMove = (path) => {
    const intialPosition = path[1];
    const initialIndex = 1;
    const isHome = false;

    setTimeout(() => {
      changePosition(intialPosition, initialIndex, isHome);
      finishMove();
    }, 500);
    return;
  };

  const diceMove = (path, currentIndex) => {
    const targetSquare = path[currentIndex + diceNumber];
    for (let i = 1; i <= diceNumber; i++) {
      // DO CHECK IF IT IS A BLOCK && i++ **
      const newIndex = currentIndex + i;
      const newPosition = path[newIndex];
      const isHome = false;
      setTimeout(() => {
        changePosition(newPosition, newIndex, isHome);
      }, 500 * i);
    }
    setTimeout(() => {
      eatPiece(targetSquare);
      finishMove();
    }, 500 * diceNumber);
  };

  const handleClick = () => {
    const currentIndex = piece.index;
    const nextIndex = currentIndex + diceNumber;
    const path = getPiecePath();
    // Prevent move piece in wrong trun
    if (colorPlaying !== color || diceNumber === null) return;

    // Prevent move piece from home without a 6
    if (piece.home && diceNumber !== 6) return;

    // Prevent piece to move more than the boards end
    if (currentIndex === path.length || nextIndex > path.length - 1) return;

    // Moving piece from initial place to first initial square
    if (piece.position === initialPlace && diceNumber === 6)
      return intialMove(path);

    // Moving piece based on dice roll
    diceMove(path, currentIndex);
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
        onClick={handleClick}
        alt="pin"
        src={`${color}_pin.svg`}
        className={styles[pieceKey]}
        style={{ transform: "scale(0.7)", gridArea: piece.position }}
      />
    </>
  );
};

export default Piece;
