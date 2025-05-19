// import React from "react";
// import { Inter } from "next/font/google";
// import "node_modules/react-modal-video/css/modal-video.css";
// import "../styles/index.css";
// import Layout from "@/components/Layout";

// const inter = Inter({ subsets: ["latin"] });
// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
    
//     <html suppressHydrationWarning lang="en">
//        <meta name="google-site-verification" content="76BefZIbh9iZtA3J2gPjl4QYw3TrIkhSPbMW8DCUf6o" />
//       {/* <!-- Google tag (gtag.js) --> */}
// <script async src="https://www.googletagmanager.com/gtag/js?id=G-DZRC7KY0QJ"></script>
// <script>
//   {`
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());

//   gtag('config', 'G-DZRC7KY0QJ');
//   `}
// </script>
   
//     <body className={`bg-[#EEF0F4] dark:bg-total-black ${inter.className}`}>
//     <Layout>
//       {children}
//     </Layout>
//     </body>
//     </html>
//   );
// };
"use client"; // only if you get hydration errors
import React from "react";
import Script from "next/script"; // ✅ Required for GA4
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        {/* ✅ Google Search Console verification */}
        <meta
          name="google-site-verification"
          content="76BefZIbh9iZtA3J2gPjl4QYw3TrIkhSPbMW8DCUf6o"
        />
      </head>
      <body className={`bg-[#EEF0F4] dark:bg-total-black ${inter.className}`}>
        {/* ✅ GA4 Script */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-DZRC7KY0QJ"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-DZRC7KY0QJ');
            `,
          }}
        />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
