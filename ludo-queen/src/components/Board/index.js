import styles from './Board.module.css';
import Square from './Square';

const Board = () => {
  // Render all board  
  const squares = [];

  for(let i = 0; i < 15 * 15; i++) { 
    squares.push({ key: i, x: i % 15, y: Math.floor(i / 15) });
  }

  return (
    <section className={styles.board}>
      {squares.map(({ key, x, y }) => <Square key={key} x={x} y={y} />)}
    </section>
  );
}

export default Board;