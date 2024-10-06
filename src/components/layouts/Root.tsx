import PlusJakartaSans from '@/components/fonts/PlusJakartaSans';
import Navbar from '../Navbar';
import type { ReactNode } from 'react';
import Footer from '../Footer';

const Root = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <PlusJakartaSans />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Root;
