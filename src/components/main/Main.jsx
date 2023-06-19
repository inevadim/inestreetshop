import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from './Main.module.scss';
import { Card } from './card/Card';
import { ModalShop } from './modalShop/ModalShop';

export const Main = () => {
  const [mas, setMas] = useState([]);
  useEffect(() => {
    axios.get('bdShop.json').then(({ data }) => {
      setMas(data.shop_item);
    });
  }, [setMas]);
  return (
    <div className={styles.wrapper}>
      {mas.map(item => (
        <Card img={item.imgUrl} name={item.name} price={item.price} />
      ))}

      {/* <ModalShop /> */}
    </div>
  );
};
