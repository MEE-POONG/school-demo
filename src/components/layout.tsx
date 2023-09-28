import React from "react";
import Footer from "./footer";
import TheNavbar from "./TheNavbar";
import Link from "next/link";
import Head from "next/head";
import VisiterCounter from "@/components/visiterCounter";
import BackToTopButton from "./BackTotop";


export default function RootLayout({
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
      <div className="fixed bottom-[150px]  left-0 right-5 z-40 px-4 py-2 ">
        <Link href="https://www.facebook.com/PhanomwanCollege/">
          <p className="text-gray-400 underline">
            <img
              className=" absolute inset-y-0 right-0 w-16"
              src="/img/messenger-Logo.png"
            />
          </p>
        </Link>
      </div>
      <main>
        {children}
        <BackToTopButton />
      </main>
      <Footer />
    </>
  );
}




