import { useContext } from "react";

import { TurnContext } from "../../contexts/turn";
import squareColors from "./models/colors";
import styles from "./Board.module.css";
import Player from "../Player";
import Piece from "../Piece";
import Dice from "../Dice";

const Board = () => {
  const { colorPlaying } = useContext(TurnContext);
  const squares = [];

  // Temporary forced 4 players
  const players = [
    {
      name: "Player 1",
      color: "blue",
    },
    {
      name: "Player 2",
      color: "green",
    },
    {
      name: "Player 3",
      color: "yellow",
    },
    {
      name: "Player 4",
      color: "red",
    },
  ];

  const positionsLayout = {
    blue: "2/1",
    red: "1/1",
    green: "1/3",
    yellow: "2/3",
  };

  // Generate cordenates to color board
  for (let i = 0; i < 15 * 15; i++) {
    const x = i % 15;
    const y = Math.floor(i / 15);
    const color = squareColors[x][y];
    const border = color === "white" ? "none" : "1px solid";

    squares.push({ color, border, x, y });
  }

  return (
    <div className={styles.hero}>
      <div
        className={styles.display}
        style={{ gridArea: `${positionsLayout[colorPlaying]}` }}
      >
        <Player players={players} />
        <Dice />
      </div>
      <section className={styles.board}>
        {
          // Render board
          squares.map(({ color, border, x, y }, i) => (
            <div
              key={i}
              className={styles.square}
              style={{
                outline: border,
                background: color || "white",
                gridArea: `${x + 1}/${y + 1}`,
              }}
            />
          ))
        }
        {players.map((player) => {
          // Render player pieces
          return Array.apply(null, Array(5)).map(
            (e, i) =>
              i !== 0 && (
                <Piece
                  key={`${player.color}-${i}`}
                  number={i}
                  color={player.color}
                />
              )
          );
        })}
      </section>
    </div>
  );
};

export default Board;
