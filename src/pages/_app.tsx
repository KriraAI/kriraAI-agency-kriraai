import React from "react";
import Layout from "@/components/Layout";
import "@/styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <main suppressHydrationWarning>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}

export default MyApp;
