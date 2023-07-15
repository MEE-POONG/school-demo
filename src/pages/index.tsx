import Image from 'next/image'
import { Inter } from 'next/font/google'
import RootLayout from '../../components/layout'
import Footer from '@/components/footer'
import Navbar from '@/pages/navbar'
import Slider from '@/pages/slider'
import { RiFilePaper2Line } from "react-icons/ri";
import { GrMoney } from "react-icons/gr";
import { RiGraduationCapLine } from "react-icons/ri";
import { FaUserGraduate } from "react-icons/fa";




const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <RootLayout>
      <Slider />
      <div className="grid grid-cols-4 gap-1 mx-60 text-center">
        <div className='border-2 rounded-full text-center border-blue-900'><RiFilePaper2Line size={60} /></div>
        <div><GrMoney size={60}/></div>
        <div><RiGraduationCapLine size={60} /></div>
        <div><FaUserGraduate size={60} /></div>
      </div>
      <div className="grid grid-cols-4 gap-1 mx-60  text-center ">
        <div className=' mr-14'>สมัครเรียน</div>
        <div className=' mr-10'>ทุนการศึกษา</div>
        <div className=' mr-6'>ปรึกษาเพิ่มเติม</div>
        <div className=' mr-6'>คณะที่เปิดสอน</div>
      </div>
    </RootLayout>
  )
}
