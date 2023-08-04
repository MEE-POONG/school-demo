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
import StickyBox from 'react-sticky-box';
import Link from 'next/link';




const inter = Inter({ subsets: ['latin'] })

export default function News() {
    return (
       
       
        <RootLayout>
            <div className=' container mx-auto'>
                <p>พิธีปฐมนิเทศนักศึกษา และ พิธีไหว้ครู 2566</p>
                <p>2023-06-19</p>

            </div>


      


        </RootLayout>

    )
}
