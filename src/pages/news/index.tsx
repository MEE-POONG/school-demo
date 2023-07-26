import Image from 'next/image'
import { Inter } from 'next/font/google'
import RootLayout from '@/components/layout'
import { BsBuildingFill } from "react-icons/bs";
import { IoNewspaperSharp } from "react-icons/io5";
import { PiHandCoinsBold } from "react-icons/pi";
import { GoBook } from "react-icons/go";
import { MdSupportAgent } from "react-icons/md";
import { TbStars } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";




const inter = Inter({ subsets: ['latin'] })

export default function Welfare() {
    return (
        <RootLayout>

        {/* banner คณะและหลักสูตร */}
        <div className="relative">
            <img src="/img/news/building2.png" alt="" />
                <div className="absolute inset-0  mb-2 md:mb-24  flex justify-center items-center">
                    {/* <h1 className='text-white text-xl md:text-6xl lg:text-7xl '>
                    วิทยาลัยเทคโนโลยีพนมวันท์
                    </h1>    */}
                </div>
            </div>



        </RootLayout>

    )
}
