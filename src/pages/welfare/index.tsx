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
        {/* banner คณะและหลักสูตร */}
        <div className="relative">
                <img src="/img/welfare/welfarebanner.png" alt="" />
                <div className="absolute inset-0   flex justify-center items-center">
                <h1 className='text-[#FFBF00] text-2xl md:text-6xl lg:text-7xl '>สวัสดิการนักศึกษา</h1>
                </div>
        </div>

        {/* สิ่งที่นักศึกษาจะได้ */}
        <div className='flex justify-center py-5'>
            <h1 className='text-[11px] md:text-xl lg:text-2xl font-bold'>สิ่งที่นักศึกษาจะได้จากการเรียนที่ วิทยาลัยเทคโนโลยีพนมวันท์</h1>
        </div>


        {/* ข้อมูล 6 ช่อง */}
        <div className='bg-black bg-opacity-80'>
 
            {/* ขีด */}
            <div className='py-5 px-10'>
                <div className='bg-gradient-to-r from-[#1F306A] via-[#FFBF00] to-black w-full h-1 '></div>
            </div>
            <div className=' container mx-auto'>

            {/* 6 คอลั่ม */}
            <div className='grid md:grid-cols-3 px-5 md:px-0 '>

                  {/* หอพักฟรี */}
                  <div className='md:p-10 py-5'>
                        <div className='bg-[#1F306A] rounded-t-xl'>
                            <h1 className='font-bold text-white text-2xl md:text-lg lg:text-2xl py-3 pl-2'>หอพักฟรี</h1>
                        </div>
                        <div className='bg-white rounded-b-xl h-36 md:h-56 lg:h-36 p-4'>
                            <p className=''>บริการหอพักนักศึกษา ฟรี 1 ปีการศึกษา ห้องพักแต่ละห้องมีสิ่งอำนวยความสะดวกให้นักศึกษาและหอพักอยู่ใต้การดูแลควบคุมของอาจารย์ประจำหอพัก</p>
                        </div>

                  </div>

                  
                  {/* กู้เรียน */}
                  <div className='md:p-10 py-5'>
                        <div className='bg-[#1F306A]  rounded-t-xl'>
                            <h1 className='font-bold text-white text-2xl md:text-lg lg:text-2xl py-3 pl-2'>กู้เรียน</h1>
                        </div>
                        <div className='bg-white rounded-b-xl h-36 md:h-56  lg:h-36 p-4'>
                            <p className=''>ได้รับพิจารณาให้กู้ กยศ. หรือ กรอ. ตลอดจนจบการศึกษา โดยไม่ต้องสำรองจ่าย</p>
                        </div>

                  </div>

                  {/* ศูนย์การเรียนรู้ */}
                  <div className='md:p-10 py-5'>
                        <div className='bg-[#1F306A] rounded-t-xl'>
                            <h1 className='font-bold text-white text-2xl md:text-lg lg:text-2xl py-3 pl-2'>ศูนย์การเรียนรู้</h1>
                        </div>
                        <div className='bg-white rounded-b-xl h-36 md:h-56 lg:h-36 p-4'>
                            <p className=''>ศูนย์ระบบสารสนเทศเพื่อการเรียนรู้และห้องสมุดเพื่อให้นักศึกษาและคณะอาจารย์ได้ใช้ประโยชน์</p>
                        </div>

                  </div>

                  {/* รายได้ระหว่างเรียน */}
                  <div className='md:p-10 py-5'>
                        <div className='bg-[#1F306A] rounded-t-xl'>
                            <h1 className='font-bold text-white text-2xl md:text-lg lg:text-2xl py-3 pl-2'>รายได้ระหว่างเรียน</h1>
                        </div>
                        <div className='bg-white rounded-b-xl h-36 md:h-56 lg:h-36 p-4'>
                            <p className=''> มีบริการจัดหางาน PartTime ช่วงปิดภาคเรียน</p>
                        </div>

                  </div>

                  {/* สวัสดิการรัฐ */}
                  <div className='md:p-10 py-5'>
                        <div className='bg-[#1F306A] rounded-t-xl'>
                            <h1 className='font-bold text-white text-2xl md:text-lg lg:text-2xl py-3 pl-2'>สวัสดิการรัฐ</h1>
                        </div>
                        <div className='bg-white rounded-b-xl h-36 md:h-56 lg:h-36 p-4'>
                            <p className=''> บุตรข้าราชการสามารถเบิกค่าเล่าเรียนได้ตลอดหลักสูตร</p>
                        </div>

                  </div>

                  {/* นักศึกษาวิชาทหาร */}
                  <div className='md:p-10 py-5'>
                        <div className='bg-[#1F306A] rounded-t-xl'>
                            <h1 className='font-bold text-white text-2xl md:text-lg lg:text-2xl py-3 pl-2'>นักศึกษาวิชาทหาร</h1>
                        </div>
                        <div className='bg-white rounded-b-xl h-36 md:h-56 lg:h-36 p-4'>
                            <p className=''> นักศึกษามีสิทธิ์สมัครเรียนวิชาการ (รด.) 
                            ต่อเนื่องปี 4 ปี 5 ได้ 
                            พร้อมทำเรื่องผ่อนผันการเกณฑ์ทหาร</p>
                        </div>
                        </div>

                  </div>

                  






            {/* ปิด 6 คอลั่ม */}
            </div>

            {/* ขีด */}
            <div className='py-5 px-10'>
                <div className='bg-gradient-to-r from-[#1F306A] via-[#FFBF00] to-black w-full h-1 '></div>
            </div>

        </div>
</RootLayout>

  )
}
