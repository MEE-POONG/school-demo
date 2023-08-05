import { Inter } from "next/font/google";
import React from "react";
import Footer from "./footer";
import ComponentsNavbar from "./navbar";
import Link from "next/link";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
  
    
      <ComponentsNavbar />
      <div className="fixed bottom-[150px]  left-0 right-5 z-40 px-4 py-2 ">
      <Link href="https://www.facebook.com/PhanomwanCollege/">
      <p className="text-gray-400 underline"> <img
            className=" absolute inset-y-0 right-0 w-16"
            src="/img/messenger-Logo.png"
          /></p>
          </Link>
    </div>

      <main className={inter.className}> 
      {children}
      
      </main>
    
      <Footer />
    </>
  );
}





  {/* <Stikey/> */}


      {/* <div className="fixed bottom-[150px] ">
        <a href="//">
          <img src="/img/messenger-Logo.png" className=" absolute w-16 right-0" alt="" />
        </a>
      </div> */}

      {/* <div className="fixed bottom-[150px]  left-0 right-5 z-40 px-4 py-2 ">
      
      <a className="text-gray-400 underline"> <img
            className="absolute inset-y-0 right-0 w-16 "
            src="/img/messenger-Logo.png"
          /></a>
    </div> */}
