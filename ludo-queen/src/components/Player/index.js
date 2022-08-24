import { useContext, useEffect, useState } from 'react';
import { TurnContext } from '../../contexts/turn';

import styles from './Player.module.css';

const Player = ({players}) => {
  const { colorPlaying } = useContext(TurnContext);
  const [playerNames, setPlayerNames ] = useState({
    blue: "",
    red: "",
    green: "",
    yellow: "",
  });
    
  useEffect(() => {
    const names = players.reduce((acc ,crr) => ({...acc, [crr.color]: crr.name }), '');
    setPlayerNames(names);
  }, []);

  return (  
    <div key={`${playerNames[colorPlaying]}-${colorPlaying}`} className={styles[`${colorPlaying}-data`]} style={{ border: ` 3px solid var(--${colorPlaying})`}}>
      <span className={styles.username}>{playerNames[colorPlaying]}</span>
    </div>
  
  );
}

export default Player;
