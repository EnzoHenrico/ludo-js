import { useState } from 'react';

import styles from './Piece.module.css';
import { getInitialPlaces } from '../Board/boardDefaults';

const Piece = ({number, color}) => {
  const [pieceStatus, setPieceStatus] = useState({ currSquare: getInitialPlaces(number, color), isHome: true, isSafe: true });

  const redPathing = [
    { x: 1, y: 6 }, { x: 2, y : 6 }, { x: 3, y: 6 }, { x: 4, y: 6 }, { x: 5, y: 6 }, 
    { x: 6, y: 5 }, { x: 6, y : 4 }, { x: 6, y: 3 }, { x: 6, y: 2 }, { x: 6, y: 1 }, { x: 6, y: 0 }, 
    { x: 7, y: 0 }, { x: 8, y : 0 }, 
    { x: 8, y: 1 }, { x: 8, y : 2 }, { x: 8, y: 3 }, { x: 8, y: 4 }, { x: 8, y: 5 },
    { x: 9, y: 6 }, { x: 10, y: 6 }, { x: 11, y: 6 }, { x: 12, y: 6 }, { x: 13, y: 6 }, { x: 14, y: 6 },
    { x: 14, y: 7 }, { x: 14, y: 8 },
    { x: 13, y: 8 }, { x: 12, y: 8 }, { x: 11, y: 8 }, { x: 10, y: 8 }, { x: 9, y: 8 },
    { x: 8, y: 9 }, { x: 8, y: 10 }, { x: 8, y: 11 }, { x: 8, y: 12 }, { x: 8, y: 13 }, { x: 8, y: 14 },
    { x: 7, y: 14 }, { x: 6, y: 14 },
    { x: 6, y: 13 }, { x: 6, y: 12 }, { x: 6, y: 11 }, { x: 6, y: 10 }, { x: 6, y: 9 },
    { x: 5, y: 8 }, { x: 4, y: 8 }, { x: 3, y: 8 }, { x: 2, y: 8 }, { x: 1, y: 8 }, { x: 0, y: 8 },
    { x: 0, y: 7 },
    { x: 1, y: 7 }, { x: 2, y : 7 }, { x: 3, y: 7 }, { x: 4, y: 7 }, { x: 5, y: 7 }, { x: 6, y: 7 }
  ];

  const redInit = { x: 1, y: 6 };
  const relativePathing = [
    "1,0", "1,0", "1,0","1,0", 
    "1,-1", "0,-1","0,-1", "0,-1", "0,-1", "0,-1", 
    "1,0", "1,0", 
    "0,1","0,1", "0,1", "0,1", "0,1",
    "1,-1", "1,0", "1,0", "1,0", "1,0", "1,0",
    "0,1", "0,1",
    "-1,0", "-1,0", "-1,0", "-1,0", "-1,0",
    "-1,1", "0,1", "0,1", "0,1", "0,1", "0,1",
    "-1,0", "-1,0",
    "0-1", "0-1", "0-1", "0-1", "0-1",
    "-1,-1", "-1,0", "-1,0", "-1,0", "-1,0", "-1,0",
    "0,1",
    "1,0", "1,0", "1,0", "1,0", "1,0", "1,0"
  ];

  return (
      <img key={`${color}-piece-${number}`} alt="pin" src={`${color}_pin.svg`} className={styles.piece} />
  );
};

export default Piece;
