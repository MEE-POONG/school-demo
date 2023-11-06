import React from "react";
import TheFooter from "./TheFooter";
import TheNavbar from "./TheNavbar";
import Head from "next/head";
import VisiterCounter from "@/components/visiterCounter";
import BackToTopButton from "./BackTotop";
import { Kanit } from "next/font/google";

const mainFont = Kanit({
  subsets: ["latin"],
  weight: "400"
});

export default function TheLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>PhanomwanCollege</title>
        <meta name="description" content="PHANOMWAN COLLEGE" />
        <link rel="icon" href="/panomwan.ico" />
      </Head>
      <VisiterCounter />
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
