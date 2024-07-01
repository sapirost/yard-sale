import { createTheme } from '@mui/material/styles';
import palette from './foundations/palette';
import typography from './foundations/typography';
import MuiButton from './components/MuiButton';

const theme = createTheme({
  palette,
  typography,
  components: {
    MuiButton,
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
  },
});

export default theme;
