import { useState } from 'react';

import { getInitialPlaces } from '../Board/boardDefaults';
import styles from './Piece.module.css';

const Piece = ({number, color}) => {
  const InitialPlace = getInitialPlaces(number, color);
  const [pieceStatus, setPieceStatus] = useState({ currSquare: InitialPlace, isHome: true, isSafe: true });
  const pieceKey = `${color}-piece-${number}`;
  const pieceBaseCordenate = InitialPlace;
  
  console.log(pieceKey);

  return (
    <>
      <div className={styles[`pieceBase-${number}`]} style={{backgroundColor: `var(--${color})`, gridArea: pieceBaseCordenate}}/>
      <img key={pieceKey} alt="pin" src={`${color}_pin.svg`} className={styles[pieceKey]} style={{gridArea: pieceStatus.currSquare}}/>
    </>
  );
};

export default Piece;
