import { Inter } from 'next/font/google'
import Navbar from '@/pages/navbar'
import RootLayout from '@/components/layout'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <RootLayout>

    <div className='container mx-auto py-24'>

        <div className='flex justify-between'>
              <div>
                <h1 className='text-2xl  md:text-5xl text-[#1F306A]'>สมัครเรียน</h1>
              </div>
              
        </div>
            <div className='bg-[#1F306A] w-full h-1  mb-7 md:mb-14'>
            </div>


          
      




    </div>


    </RootLayout>
  )
}
