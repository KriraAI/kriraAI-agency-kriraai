import React from "react";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import Layout from "@/components/Layout";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {

//     const breadcrumbJsonLd = {
//   "@context": "https://schema.org/", 
//   "@type": "BreadcrumbList", 
//   "itemListElement": [{
//     "@type": "ListItem", 
//     "position": 1, 
//     "name": "Services",
//     "item": "https://kriraai.com/services"  
//   },{
//     "@type": "ListItem", 
//     "position": 2, 
//     "name": "About",
//     "item": "https://kriraai.com/about"  
//   },{
//     "@type": "ListItem", 
//     "position": 3, 
//     "name": "AI services",
//     "item": "https://kriraai.com/ai-services-company"  
//   },{
//     "@type": "ListItem", 
//     "position": 4, 
//     "name": "Mobile app development",
//     "item": "https://kriraai.com/mobile-app-development-company"  
//   },{
//     "@type": "ListItem", 
//     "position": 5, 
//     "name": "Web development",
//     "item": "https://kriraai.com/web-development-company"  
//   },{
//     "@type": "ListItem", 
//     "position": 6, 
//     "name": "Contact KriraAI",
//     "item": "https://kriraai.com/contact"  
//   }]
// };
//     const breadcrumbJsonLd1 ={
//   "@context": "https://schema.org",
//   "@type": "FAQPage",
//   "mainEntity": [{
//     "@type": "Question",
//     "name": "What services does KriraAI offer?",
//     "acceptedAnswer": {
//       "@type": "Answer",
//       "text": "KriraAI provides a comprehensive range of IT solutions, including Artificial Intelligence (AI) services such as machine learning, deep learning, NLP, and chatbot development. We also specialize in mobile app development (Android, iOS, Flutter, React Native), web development (React.js, Angular.js, Node.js, Python, Wordpress), data and analytics, UI/UX design, branding, custom software development, cloud services, tech consultancy, and digital marketing."
//     }
//   },{
//     "@type": "Question",
//     "name": "How can KriraAI help my business with AI services?",
//     "acceptedAnswer": {
//       "@type": "Answer",
//       "text": "KriraAI’s AI services are designed to transform your business through advanced technologies like machine learning, deep learning, natural language processing, and computer vision. Whether you need a custom chatbot, data science solutions, or generative AI, our team will tailor our solutions to meet your specific business needs and objectives."
//     }
//   },{
//     "@type": "Question",
//     "name": "What is the process for developing a mobile app with KriraAI?",
//     "acceptedAnswer": {
//       "@type": "Answer",
//       "text": "Our mobile app development process involves several stages: initial consultation to understand your requirements, design and prototype development, iterative development with regular feedback, rigorous testing, and final deployment. We support both Android and iOS platforms, using technologies like Flutter and React Native to ensure a seamless user experience."
//     }
//   },{
//     "@type": "Question",
//     "name": "Can KriraAI assist with my company’s web development needs?",
//     "acceptedAnswer": {
//       "@type": "Answer",
//       "text": "Absolutely! KriraAI offers expertise in various web development technologies, including React.js, Angular.js, Node.js, and Python. We also provide solutions for Wordpress and Shopify to build responsive, user-friendly websites tailored to your business goals and industry standards."
//     }
//   },{
//     "@type": "Question",
//     "name": "What types of custom software can KriraAI develop?",
//     "acceptedAnswer": {
//       "@type": "Answer",
//       "text": "KriraAI develops a wide range of custom software solutions, including CRM systems, inventory management, accounting software, ERP systems, HRM software, BI tools, marketing automation, and SCM software. We create solutions that are tailored to fit your specific business processes and objectives."
//     }
//   },{
//     "@type": "Question",
//     "name": "How does KriraAI ensure the quality of its UI/UX design services?",
//     "acceptedAnswer": {
//       "@type": "Answer",
//       "text": "We focus on creating intuitive and engaging user interfaces through meticulous UI design, UX strategy, prototyping, and wireframe design. Our goal is to enhance user experience and ensure that your digital products are both functional and aesthetically pleasing."
//     }
//   },{
//     "@type": "Question",
//     "name": "How can I get started with KriraAI?",
//     "acceptedAnswer": {
//       "@type": "Answer",
//       "text": "Getting started with KriraAI is simple. Reach out to us via our website, email us at info@kriraai.com, or call us at +91 9879576875. We’ll schedule a consultation to discuss your needs and explore how we can help you achieve your business goals."
//     }
//   },{
//     "@type": "Question",
//     "name": "Why should I choose KriraAI for my IT solutions?",
//     "acceptedAnswer": {
//       "@type": "Answer",
//       "text": "KriraAI stands out for its dedication to innovation, excellence, and personalized service. Our team of experts is committed to delivering exceptional IT solutions tailored to your unique needs. Partner with us to experience a collaborative approach to technology that drives business success."
//     }
//   },{
//     "@type": "Question",
//     "name": "How does KriraAI handle data and analytics projects?",
//     "acceptedAnswer": {
//       "@type": "Answer",
//       "text": "Our data and analytics services include web scraping, database management, and data analysis. We help you gather valuable insights from your data, manage it effectively, and use it to drive strategic business decisions, ensuring you leverage data to its fullest potential."
//     }
//   }]
// };
    return (
      <html suppressHydrationWarning lang="en">
      <head>
          <meta charSet="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
          {/* <title>KriraAI</title> */}
          <link rel="icon" href="/favicon.ico"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          

          <meta name="twitter:card" content="summary_large_image"/>
          <meta name="twitter:url" content="https://www.kriraai.com/"/>
          <meta name="twitter:title" content="Top AI & IT Development company | Expert mobile app development Solutions"/>
          <meta name="twitter:description"
                content="Looking for the custom AI expert mobile app development and web development company? We offer customized web and mobile app development services to our clients leveraging skilled resources."/>
          <meta name="twitter:image" content="https://kriraai.com/images/logo/Logo.png"/>
          <meta name="twitter:label1" content="Written by"/>
          <meta name="twitter:data1" content="KriraAI"/>


          <meta property="og:locale" content="en_US"/>
          <meta property="og:type" content="website"/>
          <meta property="og:title" content="Top AI & IT Development company | Expert mobile app development Solutions"/>
          <meta property="og:description"
                content="Looking for the custom AI expert mobile app development and web development company? We offer customized web and mobile app development services to our clients leveraging skilled resources."/>
          <meta property="og:url" content="https://www.invints.com/"/>
          <meta property="og:site_name" content="KriraAI"/>
          <meta property="og:image:alt" content="KriraAI AI and IT experts"/>
          <meta property="og:image" content="https://kriraai.com/images/logo/Logo.png"/>
          <meta property="og:image:width" content="1284"/>
          <meta property="og:image:height" content="900"/>
          <meta property="og:image:type" content="image/png"/>

          <meta charSet="UTF-8"/>
          <meta name="HandheldFriendly" content="true"/>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
          <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
          <meta name="description"
                content="KriraAI is a Full Service Digital Agency focused on AI and product design and development agency that helps businesses of all sizes create and grow their online stores. We offer a wide range of services, including custom AI, Mobile app development, web de3velopment, Android development, iOS development, Data analytics, Shopify development, UI UX design, SEO, and marketing."/>
          <meta name="keywords"
                content="AI development company, mobile app development company, android development company, iOS development company, shopify store design, shopify expert company, shopify plus company, shopify partner, shopify website development, e-commerce website design, e-commerce website development, e-commerce store design, wordpress, HTML, unbounce, webflow, UI/UX design, web ui design, app ui design, packaging design, motion design"/>
          <meta name="author" content="KriraAI"/>

                   <script async src="https://www.googletagmanager.com/gtag/js?id=G-F8SW9H43EV"></script>
               {/* <!-- Google tag (gtag.js) --> */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-Y9LMCW7L6J"></script>
        <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-Y9LMCW7L6J');
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
}

