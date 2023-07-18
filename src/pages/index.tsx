import Image from 'next/image'
import { Inter } from 'next/font/google'
import RootLayout from '../../components/layout'
import Footer from '@/components/footer'
import Navbar from '@/pages/navbar'
import Slider from '@/pages/slider'
import { RiFilePaper2Line } from "react-icons/ri";
import { RiGraduationCapLine } from "react-icons/ri";
import { FaUserGraduate } from "react-icons/fa";
import Link from 'next/link'
import { FaMoneyBill } from "react-icons/fa";
import BannerSlider from '@/container/home/BannerSlider'




const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <RootLayout>
      {/* <Slider /> */}
      <BannerSlider/>

      <div className="grid md:grid-flow-col justify-center gap-3 md:gap-10 mt-6">

        <div className="text-center">
          <div className="bg-white text-blue-900 p-3 rounded-full hover:bg-blue-900 hover:text-white border-2 border-blue-900">
            <Link href=""><RiFilePaper2Line size={80} /></Link>
          </div>
          <p className='text-blue-900'>สมัครเรียน</p>
        </div>

        <div className="text-center">
          <div className="bg-white text-blue-900 p-3 rounded-full hover:bg-blue-900 hover:text-white border-2 border-blue-900">
            <Link href=""><FaMoneyBill size={80} /></Link>
          </div>
          <p className='text-blue-900'>ทุนการศึกษา</p>
        </div>

        <div className="text-center">
          <div className="bg-white text-blue-900 p-3 rounded-full hover:bg-blue-900 hover:text-white border-2 border-blue-900">
            <Link href=""><RiGraduationCapLine size={80} /></Link>
          </div>
          <p className='text-blue-900'>ปรึกษาเพิ่มเติม</p>
        </div>

        <div className="text-center">
          <div className="bg-white text-blue-900 p-3 rounded-full hover:bg-blue-900 hover:text-white border-2 border-blue-900">
            <Link href=""><FaUserGraduate size={80} /></Link>
          </div>
          <p className='text-blue-900'>คณะที่เปิดสอน</p>
        </div>



      </div>
      <div className='container mx-auto py-5 md:py-24 text-blue-900'>
        <h1 className="font-fontTH text-2xl md:text-4xl ml-3 md:ml-0">ข่าวประชาสัมพันธ์</h1>
        <div className=" w-full h-0.5 bg-blue-900 mt-2"></div>
        <div className="flex justify-between ...">
          <div className="order-last">อ่านทั้งหมด</div>
          <div></div>
        </div>
    
      </div>
    </RootLayout>
  )
}
