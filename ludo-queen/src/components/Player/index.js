import { useState } from 'react';

import styles from './Player.module.css';

const Player = ({players}) => {
  const [playerState, setPlayerState] = useState({ waiting: true, playing: false });

  return (
  <>
    {players.map((player => (
    <div key={`${player.name}-${player.color}`} className={styles[`${player.color}-data`]} style={{ border: ` 3px solid var(--${player.color})`}}>
      <span className={styles.username}>{player.name}</span>
    </div>
    )))}  
  </>
  );
}

export default Player;
