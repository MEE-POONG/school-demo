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


    <div className='flex justify-center items-center md:hidden  '>
      <button type="button" className="items-center text-2xl w-full text-white bg-[#1F306A] hover:bg-[#6CB4EE] rounded-lg  px-5 py-2.5 mb-2 ">
      ติดต่อปรึกษา
      </button> 
    </div>



    <div className='flex justify-between'>
              <div><h1 className='text-2xl  md:text-5xl text-[#1F306A]'>ทีมที่ปรึกษา</h1></div>
              <div className='hidden md:flex'>
                <button type="button" className="text-xl text-white bg-[#1F306A] hover:bg-[#6CB4EE] rounded-lg  px-5 py-2.5 mr-2 mb-2 ">
                ติดต่อปรึกษา
                </button>
              </div>
    </div>
    <div className='bg-[#1F306A] w-full h-1'>
    </div>
    <h5 className='text-[#536878] text-base md:text-xl mt-4 mb-14'>ทีมสำหรับให้คำปรึกษา วิทยาลัยพนมวันท์</h5>
 {/*  เนื้อหา แบบ md */}
    <div className='md:grid  md:grid-cols-3 border border-black hidden '>
            {/*  พรพิมล */}
                  <div className=''>
                      <div className='flex flex-col'>
                          <img className='border-8 border-[#1F306A]' src="/img/advisor/pornpimol.png" alt="" />
                          <div className=' text-center'>
                              <h1 className='text-[#1F306A] text-4xl mb-5 mt-5'>นาง พรพิมล ลักขษร</h1>
                              <h5 className='text-[#8DB600] text-2xl'>ผู้ช่วยที่ปรึกษา</h5>
                              <h6 className='text-[#536878] text-2xl'>061-519-6551</h6>
                              <h5 className='text-[#1F306A] text-2xl mb-5 mt-5'>“ทุกระบบจบที่เรา”</h5>
                          </div>
                      </div>
                  </div>
            {/* พิชาภพ */}
                  <div className=''>
                      <div className='flex flex-col h-full'>
                      <img className='border-8 border-[#1F306A] md:hidden lg:hidden xl:hidden  ' src="/img/advisor/pichapop.png" alt="" />

                          <div className=' text-center'>
                              <h1 className='text-[#1F306A] text-4xl mb-5  mt-10 md:mt-20 '>นายพิชาภพ ลักขษร</h1>
                              <h5 className='text-[#8DB600] text-2xl'>หัวหน้าที่ปรึกษา</h5>
                              <h6 className='text-[#536878] text-2xl'>061-519-6515</h6>
                              <h5 className='text-[#1F306A] text-2xl mb-5 mt-5'>“ทุกระบบจบที่เรา”</h5>
                          </div>
                          <img className='border-8 border-[#1F306A] mt-auto ' src="/img/advisor/pichapop.png" alt="" />

                      </div>
                  </div>
            {/*  วรรธนัย  */}
            <div className=''>
                      <div className='flex flex-col'>
                          <img className='border-8 border-[#1F306A]' src="/img/advisor/wantanai.png" alt="" />
                          <div className=' text-center'>
                              <h1 className='text-[#1F306A] text-4xl mb-5 mt-5'>นาง พรพิมล ลักขษร</h1>
                              <h5 className='text-[#8DB600] text-2xl'>สื่อและประชาสัมพันธ์</h5>
                              <h6 className='text-[#536878] text-2xl'>061-519-6551</h6>
                              <h5 className='text-[#1F306A] text-2xl mb-5 mt-5'>“ทุกระบบจบที่เรา”</h5>
                          </div>
                      </div>
                  </div>
    {/* ปิด div grid */}  
    </div>
 {/*  เนื้อหา แบบ sm เล็กสุด */}
 <div className='grid  grid-cols-1 md:hidden lg:hidden xl:hidden 2xl:hidden   '>
            {/* พิชาภพ */}
            <div className=''>
                      <div className='flex flex-col h-full'>
                      <img className='border-8 border-[#1F306A] md:hidden lg:hidden xl:hidden  ' src="/img/advisor/pichapop.png" alt="" />

                          <div className=' text-center'>
                              <h1 className='text-[#1F306A] text-4xl mb-5  mt-10 md:mt-20 '>นายพิชาภพ ลักขษร</h1>
                              <h5 className='text-[#8DB600] text-2xl'>หัวหน้าที่ปรึกษา</h5>
                              <h6 className='text-[#536878] text-2xl'>061-519-6515</h6>
                              <h5 className='text-[#1F306A] text-2xl mb-20 mt-5'>“ทุกระบบจบที่เรา”</h5>
                          </div>

                      </div>
                  </div>
            {/*  พรพิมล */}
                  <div className=''>
                      <div className='flex flex-col'>
                          <img className='border-8 border-[#1F306A]' src="/img/advisor/pornpimol.png" alt="" />
                          <div className=' text-center'>
                              <h1 className='text-[#1F306A] text-4xl mb-5 mt-5'>นาง พรพิมล ลักขษร</h1>
                              <h5 className='text-[#8DB600] text-2xl'>ผู้ช่วยที่ปรึกษา</h5>
                              <h6 className='text-[#536878] text-2xl'>061-519-6551</h6>
                              <h5 className='text-[#1F306A] text-2xl mb-20 mt-5'>“ทุกระบบจบที่เรา”</h5>
                          </div>
                      </div>
                  </div>
            
            {/*  วรรธนัย  */}
            <div className=''>
                      <div className='flex flex-col'>
                          <img className='border-8 border-[#1F306A]' src="/img/advisor/wantanai.png" alt="" />
                          <div className=' text-center'>
                              <h1 className='text-[#1F306A] text-4xl mb-5 mt-5'>นาง พรพิมล ลักขษร</h1>
                              <h5 className='text-[#8DB600] text-2xl'>สื่อและประชาสัมพันธ์</h5>
                              <h6 className='text-[#536878] text-2xl'>061-519-6551</h6>
                              <h5 className='text-[#1F306A] text-2xl mb-20 mt-5'>“ทุกระบบจบที่เรา”</h5>
                          </div>
                      </div>
                  </div>
    {/* ปิด div grid */}  
    </div>
        
    </div>
</RootLayout>

  )
}
