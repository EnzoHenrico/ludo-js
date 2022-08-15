import styles from './Square.module.css';

const Square = ({x, y, color}) => {
  return (
    <div className={styles.square} data-x={x} data-y={y} style={{ background: color || ''}}/>
  );
}

export default Square;