import type { AppProps } from "next/app";
import Loading from "@/components/loading";
import React, { useState } from "react";
import "@/scss/globals.scss";
import { Kanit } from "next/font/google";

const mainFont = Kanit({
  weight: "400",
  subsets: ["latin"]
});

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      {isLoading && <Loading />}{" "}
      {/* แสดงหน้าต่าง Loading ถ้า isLoading เป็น true */}
      <main className={mainFont.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
