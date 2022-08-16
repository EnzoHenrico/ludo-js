import styles from './PiecePlaces.module.css';
import Pieces from '../../Pieces';

const PiecePlaces = () => {

  return (
  <>
    <div className={`${styles.containerPlace} ${styles.red}`}>
      <div className={styles.redPlace}/>
      <div className={styles.redPlace}/>
      <div className={styles.redPlace}/>
      <div className={styles.redPlace}/>    
    </div>
    <div className={`${styles.containerPlace} ${styles.green}`}>
      <div className={styles.greenPlace}/>
      <div className={styles.greenPlace}/>
      <div className={styles.greenPlace}/>
      <div className={styles.greenPlace}/>
    </div>
      <div className={`${styles.containerPlace} ${styles.blue}`}>
      <div className={styles.bluePlace}/>
      <div className={styles.bluePlace}/>
      <div className={styles.bluePlace}/>
      <div className={styles.bluePlace}/>
    </div>
    <div className={`${styles.containerPlace} ${styles.yellow}`}>
      <div className={styles.yellowPlace}/>
      <div className={styles.yellowPlace}/>
      <div className={styles.yellowPlace}/>
      <div className={styles.yellowPlace}/>
    </div>
  </>
  );
}

export default PiecePlaces;
