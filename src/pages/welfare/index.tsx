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


    <div className='flex justify-center md:hidden '>
      <button type="button" className="text-2xl text-black bg-[#FFBF00] hover:bg-[#6CB4EE] rounded-lg  px-5 py-2.5 mr-2 mb-2 ">
      ติดต่อขอทุนการศึกษา 
                </button> 
      </div>

    <div className='flex justify-between'>
              <div><h1 className='text-2xl  md:text-5xl text-[#1F306A]'>สวัสดิการนักศึกษา</h1></div>
              <div className='hidden md:flex'>
                <button type="button" className="text-xl text-black bg-[#FFBF00] hover:bg-[#6CB4EE] rounded-lg  px-5 py-2.5 mr-2 mb-2 ">
                ติดต่อขอทุนการศึกษา 
                </button>
              </div>
            </div>
            <div className='bg-[#1F306A] w-full h-1  mb-7 md:mb-14'></div>



        <div className="flex flex-col md:flex-row  justify-center gap-10 mb-8">
            <div className="flex items-center text-[#536878] gap-5 bg-gray-600/5 p-6 rounded-md shadow-md hover:scale-105">
                <BsBuildingFill size={50} />
                <div className="w-72 h-40">
                    <h3 className='text-[#1F306A]'>หอพักฟรี</h3>
                    <p className="text-[14px] md:text-[16px] text-[#536878]">

                    บริการหอพักนักศึกษา ฟรี 1 ปีการศึกษา ห้องพักแต่ละห้องมีสิ่งอำนวยความสะดวกให้นักศึกษาและหอพักอยู่ใต้การดูแลควบคุมของอาจารย์ประจำหอพัก
                    </p>
                </div>
            </div>
            <div className="flex items-center text-[#536878] gap-5 bg-gray-600/5 p-6 rounded-md shadow-md">
                <IoNewspaperSharp size={50} />
                <div className="w-60 h-40">
                    <h3 className='text-[#1F306A]'>กู้เรียน</h3>
                    <p className="text-[16px] text-[#536878]">ได้รับพิจารณาให้กู้ กยศ. หรือ กรอ. ตลอดจนจบการศึกษา โดยไม่ต้องสำรองจ่าย</p>
                </div>
            </div>
        </div>

        <div className="flex flex-col md:flex-row  justify-center gap-10 mb-8">
            <div className="flex items-center text-[#536878] gap-5 bg-gray-600/5 p-6 rounded-md shadow-md">
                <GoBook size={50} />
                <div className="w-72 h-40">
                    <h3 className='text-[#1F306A]'>ศูนย์การเรียนรู้</h3>
                    <p className="text-[16px] text-[#536878]">ศูนย์ระบบสารสนเทศเพื่อการเรียนรู้และห้องสมุดเพื่อให้นักศึกษาและคณะอาจารย์ได้ใช้ประโยชน์

                    </p>
                </div>
            </div>
            <div className="flex items-center text-[#536878] gap-5 bg-gray-600/5 p-6 rounded-md shadow-md">
                <PiHandCoinsBold size={50} />
                <div className="w-60 h-40">
                    <h3 className='text-[#1F306A]'>รายได้ระหว่างเรียน</h3>
                    <p className="text-[16px] text-[#536878]">
                    มีบริการจัดหางาน PartTime ช่วงปิดภาคเรียน

                    </p>
                </div>
            </div>
        </div>

        <div className="flex flex-col md:flex-row  justify-center gap-10 mb-8">
            <div className="flex items-center text-[#536878] gap-5 bg-gray-600/5 p-6 rounded-md shadow-md">
                <MdSupportAgent size={50} />
                <div className="w-60 h-40">
                    <h3 className='text-[#1F306A]'>สวัสดิการรัฐ</h3>
                    <p className="text-[16px] text-[#536878]">
                    บุตรข้าราชการสามารถเบิกค่าเล่าเรียนได้ตลอดหลักสูตร

                    </p>
                </div>
            </div>
            <div className="flex items-center text-[#536878] gap-5 bg-gray-600/5 p-6 rounded-md shadow-md">
                <TbStars size={50} />
                <div className="w-72 h-40">
                    <h3 className='text-[#1F306A]'>นักศึกษาวิชาทหาร</h3>
                    <p className="text-[16px] text-[#536878]">นักศึกษามีสิทธิ์สมัครเรียนวิชาการ (รด.) 
                            ต่อเนื่องปี 4 ปี 5 ได้ 
                            พร้อมทำเรื่องผ่อนผันการเกณฑ์ทหาร</p>
                </div>
            </div>
        </div>

        
    </div>
</RootLayout>

  )
}
