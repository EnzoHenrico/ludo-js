import styles from "./Board.module.css";
import Square from "./Square";
import squareColors from "./Square/squareColors";
import PiecePlaces from "./PiecePlaces";

const Board = () => {
  const squares = [];
  
  // Render all board
  for (let i = 0; i < 15 * 15; i++) {
    const key = i;
    const x = i % 15;
    const y = Math.floor(i / 15);
    const color = squareColors[`${x},${y}`] || "";

    squares.push({ key, x, y, color });
  }

  return (
    <section className={styles.board}>
      <div className={styles.squares}>
        {squares.map(({ key, x, y, color }) => (
          <Square key={key} x={x} y={y} color={color} />
        ))}
      </div>
      <PiecePlaces />
    </section>
  );
};

export default Board;
