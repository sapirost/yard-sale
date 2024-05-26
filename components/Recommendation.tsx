import { Button, IconButton, Typography } from '@mui/material';
import { CloseRounded } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import styles from '@/styles/Home.module.scss';
import Image from 'next/image';

const Recommendation = ({ list }: RecommendationProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [lastChanceItems, setLastChanceItems] = useState<Data[]>([]);

  useEffect(() => {
    if (Array.isArray(list)) {
      const items = list.filter((item) => item.stock <= 10);
      setLastChanceItems(items);
    }
  }, [list]);

  return (
    <>
      {!isOpen && (
        <Button onClick={() => setIsOpen(true)} className={styles.fixedButton}>Open Drawer</Button>
      )}

      <div className={`${styles.drawer} ${isOpen ? styles.open : ''}`}>
        <header className={styles.recommendationHeader}>
          <h2>Last chance to buy!</h2>
          <IconButton onClick={() => setIsOpen(false)}>
            <CloseRounded />
          </IconButton>
        </header>
        <div className={styles.recommendedItems}>
          {lastChanceItems.map((item) => (
            <div className={styles.item} key={`recommended-${item.id}`}>
              <Image src={item.thumbnail} alt={item.title} height={100} width={190} />
              <Typography variant="body2" component="div">
                {item.title}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Recommendation;
