import Image from 'next/image'
import { Inter } from 'next/font/google'
import RootLayout from '@/components/layout'
import { BsBuildingFill } from "react-icons/bs";
import { IoNewspaperSharp } from "react-icons/io5";
import { PiHandCoinsBold } from "react-icons/pi";
import { GoBook } from "react-icons/go";
import { MdSupportAgent } from "react-icons/md";
import { TbStars } from "react-icons/tb";
import { useState, useEffect } from 'react'; // เพิ่มการ import useEffect
import Loading from '@/components/loading'; // เพิ่มการ import คอมโพเนนต์ Loading





const inter = Inter({ subsets: ['latin'] })

export default function Welfare() {
  const [isLoading, setIsLoading] = useState(true); // เริ่มต้น isLoading เป็น true

  useEffect(() => {
    const images = document.querySelectorAll('img'); // เลือกทุก <img> ในหน้า
    let loadedImages = 0;

    function handleImageLoad() {
      loadedImages++;
      if (loadedImages === images.length) {
        setIsLoading(false);
      }
    }

    images.forEach((img) => {
      if (img.complete) {
        handleImageLoad();
      } else {
        img.addEventListener('load', handleImageLoad);
      }
    });

    return () => {
      images.forEach((img) => {
        img.removeEventListener('load', handleImageLoad);
      });
    };
  }, []);

  return (
    <RootLayout>
      {isLoading && <Loading />} {/* แสดงหน้าต่าง Loading ถ้า isLoading เป็น true */}
      {/* banner คณะและหลักสูตร */}
      <div className="relative w-full h-[150px] md:h-[300px] lg:h-[500px]">
        <img src="/img/welfare/welfarebanner.png" alt="" className='h-full brightness-50 object-cover' />
        <div className="absolute inset-0 top-10 mb-8 md:mb-24 flex justify-center items-center ">
          <h2 className='text-[#fbbf24] text-3xl md:text-3xl lg:text-6xl drop-shadow-xl font-semibold'>สวัสดิการนักศึกษา</h2>
        </div>

      </div>

      {/* สิ่งที่นักศึกษาจะได้ */}
      <div className='m-5 lg:my-10 text-center sm:flex justify-center gap-4'>
        <p className='text-[15px] md:text-xl lg:text-2xl font-bold'>สิ่งที่นักศึกษาจะได้จากการเรียนที่</p>
        <p className='text-[15px] md:text-xl lg:text-2xl font-bold'>วิทยาลัยเทคโนโลยีพนมวันท์</p>
      </div>


      {/* ข้อมูล 6 ช่อง */}
      <div className='bg-black bg-opacity-80 mb-28'>
        <div className='p-5'>
          <div className='bg-gradient-to-r from-[#1F306A] via-[#FFBF00] to-black w-full h-1 '></div>
        </div>

        {/* 6 คอลั่ม */}
        <div className='container mx-auto md:mt-10 pb-10 md:pb-24'>
          <div className='grid grid-rows-2 gap-4 md:gap-16'>
            <div className="grid sm:grid-cols-3 gap-4 md:gap-16 mx-5">
              {/* 1 */}
              <div className=''>
                <div className='bg-[#1F306A] rounded-t-xl'>
                  <h1 className='font-semibold text-center text-white text-md md:text-lg lg:text-xl py-3 pl-2'>หอพักฟรี</h1>
                </div>
                <div className='bg-white rounded-b-xl h-28 md:h-40 lg:h-36 p-3'>
                  <p className='text-[13px] md:text-[15px] lg:text-base indent-6'>บริการหอพักนักศึกษา ฟรี 1 ปีการศึกษา ห้องพักแต่ละห้องมีสิ่งอำนวยความสะดวกให้นักศึกษาและหอพักอยู่ใต้การดูแลควบคุมของอาจารย์ประจำหอพัก</p>
                </div>
              </div>
              {/* 2 */}
              <div className=''>
                <div className='bg-[#1F306A]  rounded-t-xl'>
                  <h1 className='font-semibold text-center text-white text-md md:text-lg lg:text-xl py-3 pl-2'>กู้เรียน</h1>
                </div>
                <div className='bg-white rounded-b-xl h-28 md:h-40 lg:h-36 p-3'>
                  <p className='text-[13px] md:text-[15px] lg:text-base indent-6'>ได้รับพิจารณาให้กู้ กยศ. หรือ กรอ. ตลอดจนจบการศึกษา โดยไม่ต้องสำรองจ่าย</p>
                </div>
              </div>

              {/* 3 */}
              <div>
                <div className='bg-[#1F306A] rounded-t-xl'>
                  <h1 className='font-semibold text-center text-white text-md md:text-lg lg:text-xl py-3 pl-2'>ศูนย์การเรียนรู้</h1>
                </div>
                <div className='bg-white rounded-b-xl h-28 md:h-40 lg:h-36 p-3'>
                  <p className='text-[13px] md:text-[15px] lg:text-base indent-6'>ศูนย์ระบบสารสนเทศเพื่อการเรียนรู้และห้องสมุดเพื่อให้นักศึกษาและคณะอาจารย์ได้ใช้ประโยชน์</p>
                </div>
              </div>
            </div>

            <div className='grid sm:grid-cols-3 gap-4 md:gap-16 mx-5'>
              {/* 4 */}
              <div>
                <div className='bg-[#1F306A] rounded-t-xl'>
                  <h1 className='font-semibold text-center text-white text-md md:text-lg lg:text-xl py-3 pl-2'>รายได้ระหว่างเรียน</h1>
                </div>
                <div className='bg-white rounded-b-xl h-28 md:h-40 lg:h-36 p-3'>
                  <p className='text-[13px] md:text-[15px] lg:text-base indent-6'> มีบริการจัดหางาน PartTime ช่วงปิดภาคเรียน</p>
                </div>
              </div>

              {/* 5 */}
              <div>
                <div className='bg-[#1F306A] rounded-t-xl'>
                  <h1 className='font-semibold text-center text-white text-md md:text-lg lg:text-xl py-3 pl-2'>สวัสดิการรัฐ</h1>
                </div>
                <div className='bg-white rounded-b-xl h-28 md:h-40 lg:h-36 p-3'>
                  <p className='text-[13px] md:text-[15px] lg:text-base indent-6'> บุตรข้าราชการสามารถเบิกค่าเล่าเรียนได้ตลอดหลักสูตร</p>
                </div>
              </div>

              {/* 6 */}
              <div>
                <div className='bg-[#1F306A] rounded-t-xl'>
                  <h1 className='font-semibold text-center text-white text-md md:text-lg lg:text-xl py-3 pl-2'>นักศึกษาวิชาทหาร</h1>
                </div>
                <div className='bg-white rounded-b-xl h-28 md:h-40 lg:h-36 p-3'>
                  <p className='text-[13px] md:text-[15px] lg:text-base indent-6'> นักศึกษามีสิทธิ์สมัครเรียนวิชาการ (รด.)
                    ต่อเนื่องปี 4 ปี 5 ได้
                    พร้อมทำเรื่องผ่อนผันการเกณฑ์ทหาร</p>
                </div>
              </div>
            </div>





          </div>
        </div>
      </div>

    </RootLayout>

  )
}
