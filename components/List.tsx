import { useEffect, useState } from 'react';
import styles from '@/styles/Home.module.scss';
import Item from './Item';
import Recommendation from './Recommendation';

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
    <>
      <div className={styles.container}>
        {!data
          ? <h2>Loading...</h2>
          : data.map((item) => <Item item={item} updateItem={updateItem} key={item.id} />)}
      </div>
      <Recommendation list={data || []} />
    </>
  );
};

export default List;
