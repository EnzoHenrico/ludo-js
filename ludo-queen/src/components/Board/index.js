import styles from "./Board.module.css";
import {squareColors, pieceInitialPlace} from "./boardDefaults";
import Piece from "../Piece";

const Board = () => {
  const squares = [];

  // Render all board
  for (let i = 0; i < 15 * 15; i++) {
    const x = i % 15;
    const y = Math.floor(i / 15);
    const color = squareColors[`${x},${y}`] || "";
    const piece = pieceInitialPlace[`${x},${y}`] || null;

    squares.push({ x, y, color, piece });
  }

  return (
      <section className={styles.board}>
        {squares.map(({ x, y, color, piece }, i) => (
        <div key ={i} className={styles.square} data-x={x} data-y={y} style={{ background: color || ''}}>
          {piece ? <Piece number={piece.number} color={piece.color}/> : null}
        </div>
        ))}
      </section>
  );
};

export default Board;
