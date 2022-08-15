import styles from './Squares.module.css';

const Squares = ({x, y}) => {

  return (
    <div className={styles.square} data-x={x} data-y={y} />
  );
}

export default Squares;