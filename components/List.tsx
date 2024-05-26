import { useEffect, useState } from 'react';
import styles from '@/styles/Home.module.scss';
import Item from './Item';

const List = () => {
  const [data, setData] = useState<Data[] | undefined>();

  const updateItem = (id: number, updatedData: Partial<Data>) => {
    setData((prevState) => prevState?.map((item) => (
      item.id === id ? { ...item, ...updatedData } : item
    )));
  };

  useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);

  return (
    <div className={styles.container}>
      {/* {data?.map((item) => <Item item={item} updateItem={updateItem} />)} */}
      {!data
        ? <h2>Loading...</h2>
        : data.map((item) => <Item item={item} updateItem={updateItem} />)}
    </div>
  );
};

export default List;
