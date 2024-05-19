import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Item from './Item';

const List = () => {
  return (
    <Box sx={{ flexGrow: 1, maxWidth: '100%' }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ maxWidth: '100%' }}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid xs={2} sm={4} md={4} key={index}>
            <Item>xs=2</Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default List;
