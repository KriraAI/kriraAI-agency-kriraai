import React from "react";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="en">
    <body className={`bg-[#EEF0F4] dark:bg-total-black ${inter.className}`}>
    <Layout>
      {children}
    </Layout>
    </body>
    </html>
  );
};
