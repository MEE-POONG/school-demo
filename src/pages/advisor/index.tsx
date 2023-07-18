import Image from 'next/image'
import { Inter } from 'next/font/google'
import RootLayout from '@/components/layout'
import { BsBuildingFill } from "react-icons/bs";
import { IoNewspaperSharp } from "react-icons/io5";
import { PiHandCoinsBold } from "react-icons/pi";
import { GoBook } from "react-icons/go";
import { MdSupportAgent } from "react-icons/md";
import { TbStars } from "react-icons/tb";




const inter = Inter({ subsets: ['latin'] })

export default function Welfare() {
  return (
    <RootLayout>
    <div className="container mx-auto text-xl font-fontTH font-bold py-8 md:py-24 ">


    <div className='flex'>
        <div>
            <h1 className='text-2xl  md:text-5xl text-[#1F306A]'>ทีมที่ปรึกษา</h1>
            </div>
              
    </div>
    <div className='bg-[#1F306A] w-full h-1  mb-3 md:mb-3'></div>

    <div className='bg-[#536878] w-full h-20  flex justify-center items-center rounded-md'>
        <h1 className='text-xl  md:text-4xl text-white text-center'>ทีมที่ปรึกษา “วิทยาลัยพนมวันท์”</h1>
    </div>

        <div className="flex flex-col md:flex-row  justify-center gap-10 mb-8">
           <div className="shadow-md w-[400px] h-[400px]">
                
                <img src="https://lovelace-media.imgix.net/uploads/6/89198b10-19a7-0132-085c-0eae5eefacd9.jpg"
                className="shadow rounded-full max-w-full h-auto align-middle border-none w-80 h-80" alt="" />
                
           </div>
           <div>
            dsadsa
           </div>
           <div>
            dsadsa
           </div>
           <div>
            dsadsa
           </div>
        </div>

        
    </div>
</RootLayout>

  )
}
