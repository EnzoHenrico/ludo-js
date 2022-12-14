import { useContext, useEffect, useState } from "react";
import { TurnContext } from "../../contexts/turn";

import styles from "./Dice.module.css";

const Dice = () => {
  const {
    rolledDice,
    setRolledDice,
    diceNumber,
    setDiceNumber,
    checkIsHome,
    movedPiece,
  } = useContext(TurnContext);
  const [disabled, setDisabled] = useState(false);

  function displayResult(result) {
    if (result === 1) {
      return (
        <div
          className={`${styles.dot} ${styles.middle} ${styles.center}`}
        ></div>
      );
    }
    if (result === 2) {
      return (
        <>
          <div className={`${styles.dot} ${styles.top} ${styles.left}`}></div>
          <div
            className={`${styles.dot} ${styles.bottom} ${styles.right}`}
          ></div>
        </>
      );
    } else if (result === 3) {
      return (
        <>
          <div className={`${styles.dot} ${styles.top} ${styles.left}`}></div>
          <div
            className={`${styles.dot} ${styles.middle} ${styles.center}`}
          ></div>
          <div
            className={`${styles.dot} ${styles.bottom} ${styles.right}`}
          ></div>
        </>
      );
    } else if (result === 4) {
      return (
        <>
          <div className={`${styles.dot} ${styles.top} ${styles.left}`}></div>
          <div className={`${styles.dot} ${styles.top} ${styles.right}`}></div>
          <div
            className={`${styles.dot} ${styles.bottom} ${styles.left}`}
          ></div>
          <div
            className={`${styles.dot} ${styles.bottom} ${styles.right}`}
          ></div>
        </>
      );
    } else if (result === 5) {
      return (
        <>
          <div className={`${styles.dot} ${styles.top} ${styles.left}`}></div>
          <div className={`${styles.dot} ${styles.top} ${styles.right}`}></div>
          <div
            className={`${styles.dot} ${styles.middle} ${styles.center}`}
          ></div>
          <div
            className={`${styles.dot} ${styles.bottom} ${styles.left}`}
          ></div>
          <div
            className={`${styles.dot} ${styles.bottom} ${styles.right}`}
          ></div>
        </>
      );
    } else if (result === 6) {
      return (
        <>
          <div className={`${styles.dot} ${styles.top} ${styles.left}`}></div>
          <div className={`${styles.dot} ${styles.top} ${styles.right}`}></div>
          <div
            className={`${styles.dot} ${styles.middle} ${styles.left}`}
          ></div>
          <div
            className={`${styles.dot} ${styles.middle} ${styles.right}`}
          ></div>
          <div
            className={`${styles.dot} ${styles.bottom} ${styles.left}`}
          ></div>
          <div
            className={`${styles.dot} ${styles.bottom} ${styles.right}`}
          ></div>
        </>
      );
    } else {
      return (
        <div className={`${styles.roll} ${styles.middle} ${styles.center}`}>
          Roll
        </div>
      );
    }
  }

  const handleRoll = () => {
    if (!rolledDice || !disabled) {
      // normal dice
      let roll = Math.floor(Math.random() * 6) + 1;

      // test dice
      setDiceNumber(roll);
      if (roll === 6) {
        setRolledDice(true);
        return;
      }
      setRolledDice(true);
      checkIsHome();
    }
  };

  useEffect(() => {
    if (rolledDice && !movedPiece) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [rolledDice]);

  return (
    <div onClick={handleRoll} className={styles.face}>
      {displayResult(diceNumber)}
    </div>
  );
};

export default Dice;
