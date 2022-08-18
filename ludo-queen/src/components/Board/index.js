
import {squareColors, especialColors} from "./boardDefaults";
import styles from "./Board.module.css";
import Piece from "../Piece";

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
    let color;
    
    if(x === 6 && y === 6) {
      color = especialColors.topLeft
    }
    else if(x === 6 && y === 8) {
      color = especialColors.topRight
    }
    else if(x === 7 && y === 7) {
       color = especialColors.center
    }
    else if(x === 8 && y === 6) {
      color = especialColors.btmLeft
    }
    else if(x === 8 && y === 8) {
       color = especialColors.btmRight
    } else{
       color = squareColors[x][y];
    };

    squares.push({color, x, y});
  }

  return (
      <section className={styles.board}>
        {squares.map(({color, x ,y}, i) => ( // Render board
          <div key ={i} className={styles.square} style={{ background: (color || ''), gridArea: `${x + 1}/${y + 1}` }}/>
        ))}
        { players.map((player) => { // Render player pieces
          return Array.apply(null, Array(5)).map((e, i) => i !== 0 && <Piece key={`${player.color}-${i}`} number={i} color={player.color}/>)
        })}
      </section>
  );
};

export default Board;
