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
           <link rel="icon" href="/favicon.ico"/>
       <meta name="google-site-verification" content="76BefZIbh9iZtA3J2gPjl4QYw3TrIkhSPbMW8DCUf6o" />
       <meta name="Top AI Development Services Company | Custom AI Solutions" content="Looking for expert AI development services? Krira AI offers custom AI solutions, generative AI, and scalable platforms. Top AI services provider in India." />
       <meta name="Best Data Science Service Company in India | Krira AI" content="Unlock data-driven success with Krira AI, the best data science service company in India offering expert analytics, consulting, and AI solutions." />
       <meta name="Expert Deep Learning Service Company | Krira AI" content="Expert deep learning service company offering custom AI model development, neural network solutions, and consulting tailored to your business goals." />
       <meta name="AI-Powered Natural language processing company | Krira AI" content="Krira AI delivers cutting-edge AI-powered natural language processing solutions for robust enterprise-grade text analytics, chatbots and customer insights." />
        <meta name="Top Computer Vision Services for AI Solutions | Krira AI" content="Discover top computer vision services by Krira AI. We offer advanced AI solutions to transform industries with intelligent image and video analysis technology." />
        <meta name="AI-Powered Chatbot Development Services | Krira AI" content="Elevate engagement with Krira AI’s AI-powered chatbot development services: custom, scalable solutions for seamless interactions and boosted conversions." />
      {/* <!-- Google tag (gtag.js) --> */} 
{/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-DZRC7KY0QJ"></script>
<script>
  {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-DZRC7KY0QJ');
  `}
</script> */}

<script async src="https://www.googletagmanager.com/gtag/js?id=G-LHFC3R8RZJ"></script>
<script>
  {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-LHFC3R8RZJ');
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
