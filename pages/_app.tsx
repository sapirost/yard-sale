import type { AppProps } from 'next/app';
import { StorageProvider } from '@/contexts/storageContext';
import '@/styles/globals.scss';
import { ThemeProvider } from '@mui/material';
import theme from '@/styles/theme';

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <StorageProvider>
      <Component {...pageProps} />
    </StorageProvider>
  </ThemeProvider>
);

export default App;
