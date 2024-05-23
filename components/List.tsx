import styles from '@/styles/Home.module.scss';
import Item from './Item';

const List = ({ data }: { data: Data[] | null }) => (
  <div className={styles.container}>
    {data?.map((item) => <Item item={item} />)}
  </div>
);

export default List;
