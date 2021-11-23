import type {AppProps} from 'next/app';
import {globalStyles} from 'styles/globalStyles';
import {IdProvider} from '@radix-ui/react-id';

function MyApp({Component, pageProps}: AppProps) {
  globalStyles();
  return (
    <IdProvider>
      <Component {...pageProps} />
    </IdProvider>
  );
}

export default MyApp;
