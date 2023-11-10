import type { AppProps } from "next/app";
import Loading from "@/components/loading";
import React, { useState } from "react";
import "@/scss/globals.css";
import { Inter, Roboto_Mono, Kanit } from 'next/font/google'

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
      
      <style jsx global>{`
      @import url("https://fonts.googleapis.com/css2?family=Kanit&display=swap");

        html {
          font-family: ${kanit.style.fontFamily};
        }
      `}</style>
      <main  className={`${kanit.variable}`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
