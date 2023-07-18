import { Inter } from 'next/font/google'
import Navbar from '@/pages/navbar'
import RootLayout from '@/components/layout'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <RootLayout>

    <div className='container mx-auto md:py-24 py-12'>

        <div className='flex justify-between'>
              <div>
                <h1 className='text-2xl  md:text-5xl text-[#1F306A]'>กรอกข้อมูล</h1>
              </div>

              <div >
                <h1 className='text-2xl  md:text-3xl  text-[#1F306A]'>กลับ</h1>
              </div>
              
        </div>
        
        <div className='bg-[#1F306A] w-full h-1  mb-7 '>
        </div>




    </div>


    </RootLayout>
  )
}
