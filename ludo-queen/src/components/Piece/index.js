import { useContext } from "react";

import { BoardContext } from "../../contexts/board";
import { TurnContext } from "../../contexts/turn";
import getInitialPlaces from "./models/positions";
import styles from "./Piece.module.css";

const Piece = ({ number, color }) => {
  const { piecesPositions, setpiecesPositions, getPiecePath } =
    useContext(BoardContext);
  const { diceNumber, colorPlaying, finishMove } = useContext(TurnContext);

  const initialPlace = getInitialPlaces(number, color);

  const [currentPiece] = piecesPositions.filter((value) => {
    if (value.team === color && value.id === number) {
      return value;
    }
  });

  const currentIndex = currentPiece.index;
  const pieceKey = `${color}-piece-${number}`;
  const targetIndex = currentIndex + diceNumber;

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

  const diceMove = (targetSquare, path, currentIndex) => {
    console.log(currentPiece);
    for (let i = 1; i <= diceNumber; i++) {
      const isHome = false;
      const newIndex = currentIndex + i;
      const newPosition = path[newIndex];
      // create a block if the target contains a allied piece
      if (isBlock()) {
        console.log("found block", newPosition);
      }
      setTimeout(() => changePosition(newPosition, newIndex, isHome), 500 * i);
    }
    // Check if piece reached final
    if (currentIndex + diceNumber === path.length) finishPeice();

    setTimeout(() => checkTarget(targetSquare), 500 * diceNumber);
    setTimeout(() => {
      finishMove();
    }, 500 * diceNumber);
  };

  const changePosition = (positionValue, indexValue, isHome) => {
    const newPosition = piecesPositions.map((piece) => {
      if (piece === currentPiece) {
        currentPiece.position = positionValue;
        currentPiece.index = indexValue;
        currentPiece.home = false;
        currentPiece.block = false;
        console.log(currentPiece);
        return currentPiece;
      } else {
        return piece;
      }
    });
    setpiecesPositions(newPosition);
  };

  const checkTarget = (target) => {
    piecesPositions.filter((piece) => {
      if (piece.position === target) {
        // Eat piece
        if (piece.team !== color) {
          piece.position = getInitialPlaces(piece.id, piece.team);
          piece.index = 0;
          piece.home = true;
        }
        if (piece.team === color && piece.id !== number) {
          // Create block
          console.log("Block created", piece, currentPiece);
          piece.block = true;
          currentPiece.block = true;
        }
      }
    });
  };

  const isBlock = () => {
    let block = false;
    piecesPositions.filter((piece) => {
      if (
        piece.position === currentPiece.position &&
        piece.block &&
        piece.color !== color
      )
        block = true;
    });
    return block;
  };

  const finishPeice = () => {
    const final = piecesPositions.map((value) => {
      if (value === currentPiece) {
        value.home = true;
        value.finished = true;
      }
      return value;
    });
    setpiecesPositions(final);
  };

  const handleClick = () => {
    const path = getPiecePath(color);
    const targetSquare = path[currentIndex + diceNumber];

    // Prevent move piece in wrong trun
    if (colorPlaying !== color || diceNumber === null) return;

    // Prevent move piece from home without a 6
    if (currentPiece.home && diceNumber !== 6) return;

    // Prevent piece to move more than the boards end
    if (currentIndex === path.length || targetIndex > path.length - 1) return;

    // Moving piece from initial place to first initial square
    if (currentPiece.position === initialPlace && diceNumber === 6)
      return intialMove(path);

    // Moving piece based on dice roll
    diceMove(targetSquare, path, currentIndex);
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
        style={{ transform: "scale(0.7)", gridArea: currentPiece.position }}
      />
    </>
  );
};

export default Piece;
