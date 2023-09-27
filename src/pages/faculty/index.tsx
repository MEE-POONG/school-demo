import { Inter } from 'next/font/google'
import Navbar from '@/components/TheNavbar'
import RootLayout from '@/components/layout'
import Link from 'next/link';
import { useState, useEffect } from 'react'; // เพิ่มการ import useEffect
import Loading from '@/components/loading'; // เพิ่มการ import คอมโพเนนต์ Loading


const inter = Inter({ subsets: ['latin'] })

export default function Faculty() {

  const [isLoading, setIsLoading] = useState(true); // เริ่มต้น isLoading เป็น true

  // useEffect สำหรับจำลองการโหลดรูปภาพทุกตัวในหน้า
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
      <div className="relative w-full  h-[150px] md:h-[300px] lg:h-[450px]">
        <img src="/img/faculty/facuban.png" alt="" className=' brightness-30 object-cover' />
        <div className="absolute inset-x-0 top-[15%]  sm:top-[65%] md:top-[20%] xl:top-[35%]  md:h-40 text-center">
          <h2 className='text-[#fbbf24] text-3xl md:text-4xl lg:text-6xl drop-shadow-xl font-semibold'>คณะและหลักสูตร</h2>
        </div>
      </div>


      {/* container ใหญ่ */}
      <div className='container mx-auto my-8 md:my-24 px-5'>
        {/* ขีด */}
        <div className='bg-gradient-to-r from-black via-[#FFBF00] to-black w-full h-0.5 mb-7 md:mb-14'></div>

        {/* คณะบริหารธุรกิจ*/}
        <div className=" lg:max-w-7xl lg:mx-auto md:flex md:items-center bg-neutral-800 overflow-hidden rounded-lg drop-shadow-lg hover:scale-105">
          <div className="h-48 md:h-auto md:w-[450px] flex-none bg-cover rounded-t md:rounded-t-none md:rounded-l text-center overflow-hidden" >
            <img className=''
              src="/img/faculty/sFbus.png" alt="" />
          </div>
          <div className="mx-5 my-4">
            <p className='text-[#6CB4EE] text-[16px] md:text-xl lg:text-2xl '> คณะบริหารธุรกิจ </p>
            <p className='text-[#6CB4EE] text-[13px] md:text-md lg:text-xl mb-2'> Faculty of Business Administration</p>
            <ul className="list-disc list-inside text-white ml-3 text-[10px] md:text-[14px] lg:text-base">
              <li className='py-1 md:py-0.5  '>สาขาวิชาการบัญชี (บช.บ.) +</li>
              <li className='py-1 md:py-0.5 '>สาขาวิชาการจัดการ (บธ.บ.) +</li>
              <li className='py-1 md:py-0.5 '>สาขาวิชาระบบสารสนเทศ (บธ.บ.) +</li>
              <li className='py-1 md:py-0.5 '>สาขาวิชาการจัดการโรงแรมและการท่องเที่ยว (บธ.บ.)</li>
              <li className='py-1 md:py-0.5 '>สาขาวิชาการจัดการอุตสาหกรรมและโลจิสติกส์ (บธ.บ)</li>
            </ul>
          </div>
        </div>



        {/* คณะวิทยาศาสตร์และเทคโนโลยี */}
        <div className="mt-5 lg:max-w-7xl lg:mx-auto md:flex md:flex-row-reverse md:items-center bg-neutral-800/75 overflow-hidden rounded-lg  drop-shadow-lg hover:scale-105">
          <div className="h-48 md:h-auto md:w-[450px] flex-none bg-cover rounded-t md:rounded-t-none md:rounded-l text-center overflow-hidden" >
            <img className=''
              src="/img/faculty/sFsci.png" alt="" />
          </div>
          <div className="mx-5 my-4">
            <p className='text-[#6CB4EE] text-[16px] md:text-xl lg:text-2xl'> คณะวิทยาศาสตร์และเทคโนโลยี </p>
            <p className='text-[#6CB4EE] text-[13px] md:text-md lg:text-xl mb-2'> Faculty of Science and Technology</p>
            <ul className="list-disc list-inside text-white ml-3 text-[10px] md:text-[14px] lg:text-base">
              <li className='py-1 md:py-0.5 lg:py-2 '>สาขาวิชาสาธารณสุขศาสตร์ (สบ.) +</li>
            </ul>
          </div>
        </div>


        {/* คณะศิลปศาสตร์*/}
        <div className="mt-5 lg:max-w-7xl lg:mx-auto md:flex md:items-center bg-neutral-800 overflow-hidden rounded-lg  drop-shadow-lg hover:scale-105">
          <div className="h-48 md:h-auto md:w-[450px] flex-none bg-cover rounded-t md:rounded-t-none md:rounded-l text-center overflow-hidden" >
            <img className=''
              src="/img/faculty/Flib.png" alt="" />
          </div>
          <div className="mx-5 my-4">
            <p className='text-[#6CB4EE] text-[16px] md:text-xl lg:text-2xl '> คณะศิลปศาสตร์ </p>
            <p className='text-[#6CB4EE] text-[13px] md:text-md lg:text-xl mb-2'> Faculty of Liberal arts</p>
            <ul className="list-disc list-inside text-white ml-3 text-[10px] md:text-[14px] lg:text-base">
              <li className='py-1 md:py-0.5 lg:py-2 '>สาขาวิชารัฐประศาสนศาสตร์ (รป.บ) +</li>
            </ul>
          </div>
        </div>

        {/* คณะวิศวกรรมศาสตร์ */}
        <div className="mt-5 lg:max-w-7xl lg:mx-auto md:flex md:flex-row-reverse md:items-center bg-neutral-800/75 overflow-hidden rounded-lg  drop-shadow-lg hover:scale-105">
          <div className="h-48 md:h-auto md:w-[450px] flex-none bg-cover rounded-t md:rounded-t-none md:rounded-l text-center overflow-hidden" >
            <img className=''
              src="/img/faculty/sFeng.png" alt="" />
          </div>
          <div className="mx-5 my-4">
            <p className='text-[#6CB4EE] text-[16px] md:text-xl lg:text-2xl '> คณะวิศวกรรมศาสตร์ </p>
            <p className='text-[#6CB4EE] text-[13px] md:text-md lg:text-xl mb-2'> Faculty of Engineering</p>
            <ul className="list-disc list-inside text-white ml-3 text-[10px] md:text-[14px] lg:text-base">
              <li className='py-1 md:py-0.5 lg:py-2 '>สาขาวิชาวิศวกรรมยานยนต์ (วศ.บ.) +</li>
            </ul>
          </div>
        </div>

        {/* ขีด */}
        <div className='bg-gradient-to-r from-black via-[#FFBF00] to-black w-full h-0.5 mt-5 md:mt-14 mb-4'></div>
        <div className='mx-3'>
          <div className='grid grid-cols-4 md:grid-cols-12 '>
            <div className=''>
              <p className='text-[#1F306A] text-[12px] lg:text-[16px]'>หมายเหตุ :</p>
            </div>

            <div className='col-span-3 md:col-span-11'>
              <p className='text-[#1F306A] text-[12px] lg:text-[16px]'>เสาร์-อาทิตย์ เรียนออนไลน์  </p>
              <p className='text-[#1F306A] text-[12px] lg:text-[16px]'>เครื่องหมาย + แทนสาขาที่เปิดหลักสูตร วันเสาร์-อาทิตย์</p>
            </div>


          </div>
        </div>

      </div>


    </RootLayout>
  )
}
