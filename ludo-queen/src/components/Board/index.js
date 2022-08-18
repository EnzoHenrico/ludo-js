
import { squareColors } from "./boardDefaults";
import styles from "./Board.module.css";
import Piece from "../Piece";
import Dice from "../Dice";

const Board = () => {
  const squares = [];
  // Temporary forced 4 players
  const players = [
    {
      name: "player1", 
      color: "blue",
    },
    {
      name: "player2", 
      color: "green",
    },
    {
      name: "player3", 
      color: "yellow",
    },
    {
      name: "player4", 
      color: "red",
    }
  ];

  // Generate cordenates to color board
  for (let i = 0; i < 15 * 15; i++) {
    const x = (i % 15);
    const y = Math.floor(i / 15);
    const color = squareColors[x][y];
    const border = color === 1 ? "none" : "1px solid black"

    squares.push({color, border, x, y});
  }

  const rollResult= () => Math.floor(Math.random() * (7 - 1) ) + 1;

  return (
    <>
      <section className={styles.board}>
        {squares.map(({color, border, x ,y}, i) => ( // Render board
          <div key ={i} className={styles.square} style={{ border, background: (color), gridArea: `${x + 1}/${y + 1}` }}/>
        ))}
        { players.map((player) => { // Render player pieces
          return Array.apply(null, Array(5)).map((e, i) => i !== 0 && <Piece key={`${player.color}-${i}`} number={i} color={player.color}/>)
        })}
      </section>
      <Dice rollResult={rollResult()}/>
    </>
  );
};

export default Board;
