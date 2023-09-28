import React from "react";
import TheFooter from "./TheFooter";
import TheNavbar from "./TheNavbar";
import Link from "next/link";
import Head from "next/head";
import VisiterCounter from "@/components/visiterCounter";
import BackToTopButton from "./BackTotop";
import { Noto_Sans_Thai } from "next/font/google";


const mainFont = Noto_Sans_Thai({
  weight: "400",
  subsets: ['latin'],
});


export default function TheLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <title>PhanomwanCollege</title>
        <meta
          name="description"
          content="PHANOMWAN COLLEGE"
        />
        <link rel="icon" href="/panomwan.ico" />
      </Head>
      <VisiterCounter />
      <TheNavbar />
      <div>{children}</div>
     
      <BackToTopButton />
      <TheFooter />
    </>
  );
}




