import type { PaletteOptions } from '@mui/material';

const brand = {
  50: '#e3f2fd',
  100: '#bbdefb',
  200: '#90caf9',
  300: '#64b5f6',
  400: '#42a5f5',
  500: '#2196f3',
  600: '#1e88e5',
  700: '#1976d2',
  800: '#1565c0',
  900: '#0d47a1',
  A100: '#82b1ff',
  A200: '#448aff',
  A400: '#2979ff',
  A700: '#2962ff',
};

const palette: PaletteOptions = {
  primary: {
    main: '#FF5733',
    // light: will be calculated from palette.primary.main,
    // dark: will be calculated from palette.primary.main,
    // contrastText: will be calculated to contrast with palette.primary.main
  },
  secondary: {
    main: '#E0C2FF',
    light: '#F5EBFF',
    // dark: will be calculated from palette.secondary.main,
    contrastText: '#47008F',
  },
  custom: {
    light: brand[300],
    main: brand[500],
    dark: brand[700],
    darker: brand[900],
  },
};

export default palette;
