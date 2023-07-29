import { Inter } from 'next/font/google'
import React from "react";
import Footer from './footer';
import ComponentsNavbar from './navbar';


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
   
      <ComponentsNavbar/>
      <main className={inter.className}>{children}
      </main>
      
      <Footer />
    </>
  )
}
