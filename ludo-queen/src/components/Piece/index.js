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

    // create a block if the target contains a allied piece

    for (let i = 1; i <= diceNumber; i++) {
      const newIndex = currentIndex + i;
      const newPosition = path[newIndex];
      // check square, if is a block skip him
      if (isBlock(newPosition)) {
        i--;
        continue;
      }
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

  const changePosition = (positionValue, indexValue, isHome) => {
    const newPosition = piecesPositions.map((value) => {
      if (value === piece) {
        value.position = positionValue;
        value.index = indexValue;
        value.home = isHome;
        value.block = false;
      }
      return value;
    });
    setpiecesPositions(newPosition);
  };

  const eatPiece = (target) => {
    piecesPositions.filter((piece) => {
      if (piece.position === target) {
        if (piece.team !== color) {
          console.log("EAT EAT EAT EAT EAT EAT EAT ");
          piece.position = getInitialPlaces(piece.id, piece.team);
          piece.index = 0;
          piece.home = true;
        } else {
          console.log("BLOCÂO");
          // createBlock(target);
        }
      }
    });
  };

  const createBlock = (target) => {
    piecesPositions.filter((piece) => {
      if (piece.position === target) {
        piece.block = true;
      }
    });
  };

  const isBlock = (target) => {
    let block = false;

    piecesPositions.filter((piece) => {
      if (piece.position === target && piece.block) block = true;
    });
    return block;
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
        className={`${styles[`pieceBase-${number}`]} ${styles.block}`}
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
        className={`${styles[pieceKey]} ${styles.block}`}
        style={{ transform: "scale(0.7)", gridArea: piece.position }}
      />
    </>
  );
};

export default Piece;
