import { useEffect, useRef } from 'react';

import {squareColors, pieceInitialPlace} from "./boardDefaults";
import styles from "./Board.module.css";
import Piece from "../Piece";
import Player from '../Player';

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
  },
];
  // Generate cordenates to color board
  for (let i = 0; i < 15 * 15; i++) {
    const color = squareColors[`${i % 15},${Math.floor(i / 15)}`] || "";
    squares.push({color});
  }

  return (
      <section className={styles.board}>
        {squares.map((square, i) => ( // Render board
          <div key ={i} className={styles.square} style={{ background: square.color || ''}}/>
        ))}
        {players.map((player) => { // Render player pieces
          for(let i = 1; i <= 4; i++){
            <Piece key={`${player.color}-${i}`} number={i} color={player.color}/>
          }
        })}
      </section>
  );
};

export default Board;
