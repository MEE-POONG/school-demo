// pages/_app.js
import React, { useState } from "react";
import Loading from "@/components/loading";
import "@/scss/globals.scss";
import Head from 'next/head';
import type { AppProps } from "next/app";
import { AppContextData } from "@/context";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(false);

  // Define your context value
  const contextValue = {
    courseGroupsCount: 0,
    courseListCount: 0,
    studyingCounts: 0,
    ipAddressesCount: 0,
    contactData: [],
    // Add more fields or functions as needed
  };

  return (
    <AppContextData.Provider value={contextValue}>
      <Head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Kanit:wght@400&display=swap" 
          rel="stylesheet" 
        />
      </Head>
      {isLoading && <Loading />}
      <main>
        <Component {...pageProps} />
      </main>
    </AppContextData.Provider>
  );
}
