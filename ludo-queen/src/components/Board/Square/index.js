import styles from './Square.module.css';

const Square = ({x, y}) => {

  return (
    <div className={styles.square} data-x={x} data-y={y} />
  );
}

export default Square;