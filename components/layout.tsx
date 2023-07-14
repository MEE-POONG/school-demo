import { Inter } from 'next/font/google'
import React from "react";
import Navbar from '../src/pages/navbar';
import TheFooter from './footer';


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <Navbar/>
      <main className={inter.className}>{children}
      </main>
   {/* <Footer/> */}
   <TheFooter/>
    </>
  )
}
