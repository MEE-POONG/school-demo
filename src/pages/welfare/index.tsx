import Image from 'next/image'
import { Inter } from 'next/font/google'
import TheLayout from '@/components/TheLayout'
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
    <TheLayout>
      {isLoading && <Loading />} {/* แสดงหน้าต่าง Loading ถ้า isLoading เป็น true */}
      {/* banner คณะและหลักสูตร */}
      <div className='relative flex h-96 content-center items-center justify-center pt-24'>
        <div className="absolute top-0 h-full w-full bg-[url('/img/welfare/welfarebanner.png')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/50 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <p
                className="mb-6 font-medium text-5xl text-white"
              >
                สวัสดิการนักศึกษา
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='m-5 lg:my-10 text-center sm:flex justify-center gap-4 text-[15px] md:text-xl lg:text-2xl font-bold'>
        <p >สิ่งที่นักศึกษาจะได้จากการเรียนที่</p>
        <p >วิทยาลัยเทคโนโลยีพนมวันท์</p>
      </div>


      <div className='container mx-auto p-5 md:p-10 '>
        <div className='grid lg:grid-cols-3 justify-center gap-5'>
          <div className='p-5 shadow-xl rounded-md text-center'>
            <img className='mx-auto' src="/icons/office.png" alt="" />
            <p className='text-lg md:text-xl text-amber-500 font-semibold my-2'>หอพักฟรี</p>
            <p className='text-left indent-6 text-xs md:text-base'>บริการหอพักนักศึกษา ฟรี 1 ปีการศึกษา ห้องพักแต่ละห้องมีสิ่งอำนวยความสะดวกให้นักศึกษาและหอพักอยู่ใต้การดูแลควบคุมของอาจารย์ประจำหอพัก</p>
          </div>
          <div className='p-5 shadow-xl rounded-md text-center'>
            <img className='mx-auto' src="/icons/mortarboard.png" alt="" />
            <p className='text-lg md:text-xl text-amber-500 font-semibold my-2'>กู้เรียน</p>
            <p className='text-left indent-6 text-xs md:text-base'>ได้รับพิจารณาให้กู้ กยศ. หรือ กรอ. ตลอดจนจบการศึกษา โดยไม่ต้องสำรองจ่าย</p>
          </div>
          <div className='p-5 shadow-xl rounded-md text-center'>
            <img className='mx-auto' src="/icons/research-center.png" alt="" />
            <p className='text-lg md:text-xl text-amber-500 font-semibold my-2'>ศูนย์การเรียนรู้</p>
            <p className='text-left indent-6 text-xs md:text-base'>ศูนย์ระบบสารสนเทศเพื่อการเรียนรู้และห้องสมุดเพื่อให้นักศึกษาและคณะอาจารย์ได้ใช้ประโยชน์</p>
          </div>
          <div className='p-5 shadow-xl rounded-md text-center'>
            <img className='mx-auto' src="/icons/profit.png" alt="" />
            <p className='text-lg md:text-xl text-amber-500 font-semibold my-2'>รายได้ระหว่างเรียน</p>
            <p className='text-left indent-6 text-xs md:text-base'>มีบริการจัดหางาน PartTime ช่วงปิดภาคเรียน</p>
          </div>
          <div className='p-5 shadow-xl rounded-md text-center'>
            <img className='mx-auto' src="/icons/welfare.png" alt="" />
            <p className='text-lg md:text-xl text-amber-500 font-semibold my-2'>สวัสดิการรัฐ</p>
            <p className='text-left indent-6 text-xs md:text-base'>บุตรข้าราชการสามารถเบิกค่าเล่าเรียนได้ตลอดหลักสูตร</p>
          </div>
          <div className='p-5 shadow-xl rounded-md text-center'>
            <img className='mx-auto' src="/icons/military.png" alt="" />
            <p className='text-lg md:text-xl text-amber-500 font-semibold my-2'>นักศึกษาวิชาทหาร</p>
            <p className='text-left indent-6 text-xs md:text-base'>นักศึกษามีสิทธิ์สมัครเรียนวิชาการ (รด.) ต่อเนื่องปี 4 ปี 5 ได้ พร้อมทำเรื่องผ่อนผันการเกณฑ์ทหาร</p>
          </div>
        </div>

      </div>





    </TheLayout >

  )
}
