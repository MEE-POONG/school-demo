import { Inter } from 'next/font/google'
import React from "react";
import Footer from './footer';
import ComponentsNavbar from './navbar';
import StickyBox from 'react-sticky-box';
import Link from 'next/link';


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
   
      <ComponentsNavbar/>
      <StickyBox offsetTop={10} offsetBottom={10} >
            <Link href="" >
                <div className=" relative ">
            <img className=" w-14 absolute right-8 top-1 " src="/img/messenger-Logo.png"/>
            </div>
            </Link>
           </StickyBox>
      <main className={inter.className}>{children}
      </main>
    
      
      <Footer />
    </>
  )
}
