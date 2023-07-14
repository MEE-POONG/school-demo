import { Inter } from 'next/font/google'
import React from "react";


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
 
      <main className={inter.className}>{children}
      </main>
   
    </>
  )
}
