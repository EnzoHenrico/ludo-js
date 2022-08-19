import styles from './Player.module.css';

const Player = ({players}) => {

  return (
  <>
    {players.map((player => (
    <div className={styles[`${player.color}-data`]} style={{ border: ` 3px solid var(--${player.color})`}}>
      <span className={styles.username}>{player.name}</span>
    </div>
    )))}  
  </>
  );
}

export default Player;
