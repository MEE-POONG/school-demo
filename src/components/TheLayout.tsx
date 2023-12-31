import React from "react";
import TheFooter from "./TheFooter";
import TheNavbar from "./TheNavbar";
import Head from "next/head";
import VisiterCounter from "@/components/VisiterCounter";
import BackToTopButton from "./BackTotop";

export default function TheLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <VisiterCounter />
      <Head>
        <title>PhanomwanCollege</title>
        <meta name="description" content="PHANOMWAN COLLEGE" />
        <link rel="icon" href="/panomwan.ico" />
      </Head>
      <TheNavbar />
      <div className="relative">
        {children}
        <div className="bg-line h-screen" />
      </div>
      <BackToTopButton />
      <TheFooter />
    </>
  );
}
