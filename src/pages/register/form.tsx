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






        <div className=''>


            <div className=' outline outline-1'>
                <div className='bg-[#91A3B0] w-full h-[50px] '>
                    <h1 className='text-xl text-[#1F306A] p-2'> ข้อมูลผู้สมัคร</h1>
                </div>
                
                <form action="">
                    <div>
                      <label for='username'>dsads</label>
                    </div>
                </form>

            </div>





        </div>




    </div>


    </RootLayout>
  )
}
