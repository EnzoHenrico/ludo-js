import styles from './Board.module.css';
import Square from './Square';
import squareColors from './Square/squareColors';

const Board = () => {
  // Render all board  
  const squares = [];

  for(let i = 0; i < 15 * 15; i++) { 
    const key = i;
    const x =  i % 15;
    const y = Math.floor(i / 15);
    const color = squareColors[`${x},${y}`] || '';
    
    squares.push({ key, x, y, color });
  }

  return (
    <>
    <section className={styles.board}>
      {squares.map(({ key, x, y, color }) => <Square key={key} x={x} y={y} color={color}/>)}
    </section>
    </>
  );
}

export default Board;