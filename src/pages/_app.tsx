import type { AppProps } from 'next/app'
import Loading from '@/components/loading';
import React, { useState } from 'react';
import '@/scss/globals.css'
import { Noto_Sans_Thai } from "next/font/google";


const mainFont = Noto_Sans_Thai({
  weight: "400",
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      {isLoading && <Loading />} {/* แสดงหน้าต่าง Loading ถ้า isLoading เป็น true */}
      <main className={mainFont.className}>
      <Component {...pageProps} />
      </main>
    </>
  );
}
