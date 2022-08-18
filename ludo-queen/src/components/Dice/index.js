import styles from './Dice.module.css';

const Dice = ({ rollResult }) => {

  function rollDice(result){
    if(result === 2) {
      return (<>
        <div className={`${styles.dot} ${styles.top} ${styles.left}`}></div>
        <div className={`${styles.dot} ${styles.bottom} ${styles.right}`}></div>
      </>);
    }
    else if(result === 3) {
      return (<>
        <div className={`${styles.dot} ${styles.top} ${styles.left}`}></div>
        <div className={`${styles.dot} ${styles.middle} ${styles.center}`}></div>
        <div className={`${styles.dot} ${styles.bottom} ${styles.right}`}></div>
      </>);
    }
    else if(result === 4) {
      return (<>
        <div className={`${styles.dot} ${styles.top} ${styles.left}`}></div> 
        <div className={`${styles.dot} ${styles.top} ${styles.right}`}></div>
        <div className={`${styles.dot} ${styles.bottom} ${styles.left}`}></div>
        <div className={`${styles.dot} ${styles.bottom} ${styles.right}`}></div>
      </>);
    }
    else if(result === 5) {
      return (<>
          <div className={`${styles.dot} ${styles.top} ${styles.left}`}></div>
          <div className={`${styles.dot} ${styles.top} ${styles.right}`}></div>
          <div className={`${styles.dot} ${styles.middle} ${styles.center}`}></div>
          <div className={`${styles.dot} ${styles.bottom} ${styles.left}`}></div>
          <div className={`${styles.dot} ${styles.bottom} ${styles.right}`}></div>
      </>);
    }
    else if(result === 6) {
    return (<>
      <div className={`${styles.dot} ${styles.top} ${styles.left}`}></div>
      <div className={`${styles.dot} ${styles.top} ${styles.right}`}></div>
      <div className={`${styles.dot} ${styles.middle} ${styles.left}`}></div>
      <div className={`${styles.dot} ${styles.middle} ${styles.right}`}></div>
      <div className={`${styles.dot} ${styles.bottom} ${styles.left}`}></div>
      <div className={`${styles.dot} ${styles.bottom} ${styles.right}`}></div>
    </>);
    } else {
      return <div className={`${styles.dot} ${styles.middle} ${styles.center}`}></div>;
    }
}
  
  return(
    <div className={styles.face}>
      {rollDice(rollResult)}
    </div>
  );
}

export default Dice;