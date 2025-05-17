import React from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ScrollToTop from '@/components/ScrollToTop';
import { Inter } from 'next/font/google';
import 'node_modules/react-modal-video/css/modal-video.css';
import '@/styles/index.css';
import LoadingHandler from "@/components/Loader";

const inter = Inter({ subsets: ['latin'] });

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={`bg-[#EEF0F4] dark:bg-total-black ${inter.className}`}>
      <LoadingHandler>
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </LoadingHandler>
    </div>
  );
};

export default Layout;
