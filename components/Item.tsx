import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import styles from '@/styles/Home.module.scss';

// eslint-disable-next-line arrow-body-style
const Item = ({ item }: { item: Data }) => {
  return (
    <Card className={styles.card}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="160"
        image={item.thumbnail}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default Item;
