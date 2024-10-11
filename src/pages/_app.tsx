import { ThemeProvider } from 'next-themes';
import { MotionConfig } from 'framer-motion';
import RootLayout from '../components/layouts/Root';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return (
    <MotionConfig reducedMotion="user">
      <ThemeProvider attribute="class">
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </ThemeProvider>
    </MotionConfig>
  );
}
export default App;
