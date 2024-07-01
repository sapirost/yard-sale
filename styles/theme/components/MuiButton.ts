import type { Components } from '@mui/material/styles';

const MuiButton: Components['MuiButton'] = {
  styleOverrides: {
    // Name of the slot
    root: {
      // Some CSS
      fontSize: '12px',
    },
  },
};

export default MuiButton;
