import React from "react";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    
    <html suppressHydrationWarning lang="en">
        
        <head>
       <meta name="google-site-verification" content="76BefZIbh9iZtA3J2gPjl4QYw3TrIkhSPbMW8DCUf6o" />
       {/* <meta name="Best AI Development Company in India | Krira AI" content="Krira AI is a Best AI development company in India offering cutting-edge generative AI development services. Let's build the future with AI together." /> */}
      {/* <!-- Google tag (gtag.js) --> */}
<script async src="https://www.googletagmanager.com/gtag/js?id=G-DZRC7KY0QJ"></script>
<script>
  {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-DZRC7KY0QJ');
  `}
</script>
</head>

   
    <body className={`bg-[#EEF0F4] dark:bg-total-black ${inter.className}`}>
    <Layout>
      {children}
    </Layout>
    </body>
    </html>
  );
};
