// pages/_app.js
import React, { useEffect, useState } from "react";
import Loading from "@/components/loading";
import "@/scss/globals.scss";
import type { AppProps } from "next/app";
import AppContextData from "@/context";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [contextValue, setContextValue] = useState({
    courseGroupsCount: 0,
    courseListCount: 0,
    studyingCounts: 0,
    ipAddressesCount: 0,
    contactData: [],
  });

  useEffect(() => {
    setIsLoading(true);
    fetch('/api/IPAddress')
      .then(response => response.json())
      .then(data => {
        setContextValue(prev => ({
          ...prev,
          ipAddressesCount: data?.length,
        }));
        setIsLoading(false);
      });
  }, []);

  return (
    <AppContextData.Provider value={contextValue}>
      
      {isLoading && <Loading />}
      <main>
        <Component {...pageProps} />
      </main>
    </AppContextData.Provider>
  );
}
