import styles from './Pieces.module.css';

const Pieces = ({color, key}) => {
  
  return (
    <img alt="pin" src={`${color}_pin.svg`} className={styles.piece} key={key}/>
  );
};

export default Pieces;
