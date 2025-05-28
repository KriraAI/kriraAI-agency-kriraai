import React from "react";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import Layout from "@/components/Layout";
import Head from "next/head";
// import AdminGuard from "@/components/AdminGuard";


// export default function AdminLayout({ children }: { children: React.ReactNode }) {
//   return <AdminGuard>{children}</AdminGuard>;
// }

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {


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

// "use client";

// import React, { ReactNode } from "react";
// import { Inter } from "next/font/google";
// import "node_modules/react-modal-video/css/modal-video.css";
// import "../styles/index.css";
// import Layout from "@/components/Layout";
// import Head from "next/head";
// import { AuthProvider } from "@/components/AuthProvider";


// import { auth } from "../../firebaseConfig";  // up two levels from components

// import { onAuthStateChanged } from "firebase/auth";
// import { useEffect, useState, createContext, useContext } from "react";

// const inter = Inter({ subsets: ["latin"] });


// const ADMIN_EMAIL = "your@email.com";


// export const AuthContext = createContext<{ isAdmin: boolean }>({ isAdmin: false });

// export default function RootLayout({ children }: { children: ReactNode }) {
//   const [isAdmin, setIsAdmin] = useState(false);

//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (user) => {
//       if (user?.email === ADMIN_EMAIL) {
//         setIsAdmin(true);
//       }
//     });
//     return () => unsub();
//   }, []);

//   return (
//     <html suppressHydrationWarning lang="en">
//       <head>
//         <meta charSet="UTF-8"/>
//         <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
//         <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
//         <link rel="icon" href="/favicon.ico"/>
//         <link rel="preconnect" href="https://fonts.gstatic.com"/>

//         <meta name="twitter:card" content="summary_large_image"/>
//         <meta name="twitter:url" content="https://www.kriraai.com/"/>
//         <meta name="twitter:title" content="Top AI & IT Development company | Expert mobile app development Solutions"/>
//         <meta name="twitter:description" content="Looking for the custom AI expert mobile app development and web development company? We offer customized web and mobile app development services to our clients leveraging skilled resources."/>
//         <meta name="twitter:image" content="https://kriraai.com/images/logo/Logo.png"/>
//         <meta name="twitter:label1" content="Written by"/>
//         <meta name="twitter:data1" content="KriraAI"/>

//         <meta property="og:locale" content="en_US"/>
//         <meta property="og:type" content="website"/>
//         <meta property="og:title" content="Top AI & IT Development company | Expert mobile app development Solutions"/>
//         <meta property="og:description" content="Looking for the custom AI expert mobile app development and web development company? We offer customized web and mobile app development services to our clients leveraging skilled resources."/>
//         <meta property="og:url" content="https://www.invints.com/"/>
//         <meta property="og:site_name" content="KriraAI"/>
//         <meta property="og:image:alt" content="KriraAI AI and IT experts"/>
//         <meta property="og:image" content="https://kriraai.com/images/logo/Logo.png"/>
//         <meta property="og:image:width" content="1284"/>
//         <meta property="og:image:height" content="900"/>
//         <meta property="og:image:type" content="image/png"/>

//         <meta charSet="UTF-8"/>
//         <meta name="HandheldFriendly" content="true"/>
//         <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
//         <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
//         <meta name="description" content="KriraAI is a Full Service Digital Agency focused on AI and product design and development agency that helps businesses of all sizes create and grow their online stores. We offer a wide range of services, including custom AI, Mobile app development, web de3velopment, Android development, iOS development, Data analytics, Shopify development, UI UX design, SEO, and marketing."/>
//         <meta name="keywords" content="AI development company, mobile app development company, android development company, iOS development company, shopify store design, shopify expert company, shopify plus company, shopify partner, shopify website development, e-commerce website design, e-commerce website development, e-commerce store design, wordpress, HTML, unbounce, webflow, UI/UX design, web ui design, app ui design, packaging design, motion design"/>
//         <meta name="author" content="KriraAI"/>

//         <script async src="https://www.googletagmanager.com/gtag/js?id=G-Y9LMCW7L6J"></script>
//         <script
//           dangerouslySetInnerHTML={{
//             __html: `
//               window.dataLayer = window.dataLayer || [];
//               function gtag(){dataLayer.push(arguments);}
//               gtag('js', new Date());
//               gtag('config', 'G-Y9LMCW7L6J');
//             `,
//           }}
//         />
//       </head>

//       <body className={`bg-[#EEF0F4] dark:bg-total-black ${inter.className}`}>
//               <aside>Admin Sidebar</aside>
//                       <AuthProvider>

//            <Layout>{children}</Layout>
//               </AuthProvider>
//       </body>
//     </html>
//   );
// }

