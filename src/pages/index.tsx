import Image from 'next/image'
import { Inter } from 'next/font/google'
import RootLayout from '../../components/layout'
import Footer from '@/components/footer'
import Navbar from '@/pages/navbar'
import Slider from '@/pages/slider'




const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <RootLayout>
        <Slider/>
 
    </RootLayout>
  )
}
