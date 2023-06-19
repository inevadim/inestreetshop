import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export const Header = () => {
  const [count, setCount] = useState(0);
  return (
    <div className={styles.wrapper}>
      <div className={styles.textWrapper}>
        <div>STREET WEAR</div>
        <div className={styles.text}>studio</div>
      </div>
      <div className={styles.shop}>
        <FontAwesomeIcon icon={faBagShopping} />
        <div className={styles.countShop}>{count}</div>
      </div>
    </div>
  );
};
