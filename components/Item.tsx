import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, Checkbox } from '@mui/material';
import { Star, StarBorder } from '@mui/icons-material';
import { useStorage } from '@/contexts/storageContext';
import styles from '@/styles/Home.module.scss';

const Item = ({ item }: ItemProps) => {
  const { starredItems, updateStarredItems } = useStorage();

  const toggleStarredItem = (_event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
    updateStarredItems(item.id, checked);
  };

  return (
    <Card className={styles.card}>
      <CardMedia
        component="img"
        alt={item.title}
        height="160"
        image={item.thumbnail}
      />
      <CardContent>
        <div className={styles.title}>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Checkbox
            checked={starredItems[item.id] || false}
            onChange={toggleStarredItem}
            size="small"
            icon={<StarBorder />}
            checkedIcon={<Star />}
          />
        </div>
        <Typography variant="body2" color="text.secondary" sx={{ bgcolor: 'custom.light' }}>
          {item.description}
        </Typography>
        <Button color="custom">test</Button>
      </CardContent>
      {item.stock <= 10 && (
        <Typography variant="body2" className={styles.notification}>
          {`Only ${item.stock} items left!`}
        </Typography>
      )}
    </Card>
  );
};

export default Item;
