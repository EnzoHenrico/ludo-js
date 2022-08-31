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

  const diceMove = (piecePathing) => {
    const pathToMove = [];
    let i = 0;
    let roll = diceNumber;
    // Pathing array*
    while (i <= roll) {
      let index = currentIndex + i;

      // Jump square when its a block
      if (isBlock(piecePathing[index], color)) {
        pathToMove.push(piecePathing[index + 1]);
        i++;
        roll++;
        continue;
      }

      pathToMove.push(piecePathing[index]);
      i++;
    }

    // Move pieces
    for (let pathIndex = 0; pathIndex < pathToMove.length; pathIndex++) {
      setTimeout(() => {
        changePosition(pathToMove[pathIndex], currentIndex + pathIndex);
      }, 300 * pathIndex);
    }

    if (currentIndex + diceNumber === piecePathing.length) finishPeice();

    setTimeout(() => {
      checkTarget(pathToMove[roll]);
      finishMove();
    }, 300 * roll);
  };

  const isBlock = (position, team) => {
    const isBlock = piecesPositions.filter((piece) => {
      if (piece.position === position && piece.team !== team) {
        return piece.block;
      }
      return false;
    });

    return isBlock.length === 0 ? false : true;
  };

  const changePosition = (positionValue, indexValue) => {
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
          console.log("Piece eated", piece, currentPiece);
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
    diceMove(path);
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

// Backup
// let targetSquare = path[currentIndex + diceNumber];
// let i = 1;

// console.log(currentPiece);

// while (i <= diceNumber) {
//   let newIndex = currentIndex + i;
//   let newPosition = path[newIndex];
//   if (isBlock(newPosition, color)) {
//     setTimeout(
//       () => changePosition(path[newIndex + 1], newIndex + 1),
//       500 * i
//     );
//     targetSquare = path[currentIndex + diceNumber + 1];
//     i++
//     continue;
//   }
//   setTimeout(() => changePosition(newPosition, newIndex), 500 * i);
//   i++;
// }

// // Check if piece reached board final

// setTimeout(
//   () =>
//     // Create a block or eat enemy piece
//     checkTarget(targetSquare),
//   500 * diceNumber
// );
// setTimeout(() => {
//   finishMove();
// }, 500 * diceNumber);
