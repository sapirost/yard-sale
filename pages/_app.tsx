import type { AppProps } from 'next/app';
import { StorageProvider } from '@/contexts/storageContext';
import '@/styles/globals.scss';

const App = ({ Component, pageProps }: AppProps) => (
  <StorageProvider>
    <Component {...pageProps} />
  </StorageProvider>
);

export default App;
