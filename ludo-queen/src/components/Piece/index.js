import { useState } from 'react';

import styles from './Piece.module.css';
import { getInitialPlaces } from '../Board/boardDefaults';

const Piece = ({number, color}) => {
  const InitialPlaces = getInitialPlaces(number, color)
  const [pieceStatus, setPieceStatus] = useState({ currSquare: InitialPlaces, isHome: true, isSafe: true });

  return (
      <img key={`${color}-piece-${number}`} alt="pin" src={`${color}_pin.svg`} className={styles.piece} style={{gridArea: pieceStatus.currSquare}}/>
  );
};

export default Piece;
