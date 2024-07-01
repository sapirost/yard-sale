import type { TypographyOptions } from '@mui/material/styles/createTypography';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const typography: TypographyOptions = {
  fontFamily: roboto.style.fontFamily,
  subtitle1: {
    fontSize: 12,
  },
  body1: {
    fontWeight: 500,
  },
  button: {
    fontStyle: 'italic',
  },
};

export default typography;
