import styles from './Card.module.scss';

export const Card = ({ img, name, price }) => {
  return (
    <div className={styles.wrapper}>
      <img src={img} />
      <div className={styles.wrapperName}>
        <div className={styles.name}>{name}</div>
        <div>Price: {price} $</div>
        <div className={styles.sell}>SELL</div>
      </div>
    </div>
  );
};
