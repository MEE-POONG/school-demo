import Image from 'next/image'
import { Inter } from 'next/font/google'
import RootLayout from '@/components/layout'




const inter = Inter({ subsets: ['latin'] })

export default function Welfare() {
  return (
  <RootLayout>
    
    <div className='container mx-auto py-24'>


    <div className='flex justify-between'>
              <div><h1 className='text-2xl  md:text-6xl text-[#1F306A]'>สวัสดิการนักศึกษา</h1></div>
              <div className='hidden md:flex'>
                <button type="button" className="text-xl text-white bg-[#0000B8] hover:bg-[#6CB4EE] rounded-lg  px-5 py-2.5 mr-2 mb-2 ">
                ติดต่อขอทุนการศึกษา 
                </button>
              </div>
            </div>
            <div className='bg-[#1F306A] w-full h-1  mb-7 md:mb-14'></div>
    
    
            <div className='flex flex-col md:flex-row justify-center gap-8 mb-8 '>

                <div className='flex gap-5'>
                    <div className='flex sm:w-[100px] sm:h-[100px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill="#1f306a"><path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z"/><path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V1Zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3V1Z"/></g></svg>
                    </div>
                    <div className='flex '>
                        <h1 className='flex text-3xl text-[#1F306A]'>หอพักฟรี</h1>
                        <p>บริการหอพักนักศึกษา ฟรี 1 ปีการศึกษา 
ห้องพักแต่ละห้องมีสิ่งอำนวยความสะดวก
ให้นักศึกษาและหอพักอยู่ใต้การดูแลควบคุม
ของอาจารย์ประจำหอพัก</p>
                    </div>


                </div>

                <div>
                    dsadsadsa
                </div>

                <div>
                    dsadsadsa
                </div>

                <div>
                    dsadsadsa
                </div>
            
            </div>
    
    
    
    
    
    </div>
  
  
  </RootLayout>

  )
}
