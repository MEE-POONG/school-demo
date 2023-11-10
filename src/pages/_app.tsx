import type { AppProps } from "next/app";
import Loading from "@/components/loading";
import React, { useState } from "react";
import "@/scss/globals.scss";
import { Inter, Roboto_Mono, Kanit } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})
 
const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
})

// Add Kanit font
const kanit = Kanit({
  weight: "400",
  variable:'--font-kanit',
  subsets: ["latin"]
})
export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      {isLoading && <Loading />}{" "}
      {/* แสดงหน้าต่าง Loading ถ้า isLoading เป็น true */}
      <main  className={`${kanit.variable}`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
