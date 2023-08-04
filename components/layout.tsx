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
   <div className="fixed bottom-[150px]  left-0 right-5 z-40 px-4 py-2 ">
      
      <a className="text-gray-400 underline"> <img
            className=" absolute inset-y-0 right-0 w-16"
            src="/img/messenger-Logo.png"
          /></a>
    </div>
      <ComponentsNavbar/>
      
      <main className={inter.className}>{children}
      </main>
      
    
      
      <Footer />
    </>
  )
}
