import Navbar from '@/components/TheNavbar'
import TheLayout from '@/components/TheLayout'
import Link from 'next/link';
import { useState, useEffect } from 'react'; // เพิ่มการ import useEffect
import Loading from '@/components/loading'; // เพิ่มการ import คอมโพเนนต์ Loading
import Aos from 'aos';


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

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);


  return (
    <TheLayout>
      <div className='mt-20 md:mt-24'>
        {isLoading && <Loading />} {/* แสดงหน้าต่าง Loading ถ้า isLoading เป็น true */}

        {/* banner คณะและหลักสูตร */}
        <div className='relative flex h-80 content-center items-center justify-center pt-24'>
          <div className="absolute top-0 h-full w-full bg-[url('/img/faculty/facuban.png')] bg-cover bg-center" />
          <div className="absolute top-0 h-full w-full bg-black/50 bg-cover bg-center" />
          <div className="max-w-8xl container relative mx-auto">
            <div className="flex flex-wrap items-center">
              <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
                <p
                  className="mb-6 font-medium text-xl md:text-4xl text-amber-600"
                >
                  คณะและหลักสูตร
                </p>
              </div>
            </div>
          </div>
        </div>


        {/* container ใหญ่ */}
        <div className='max-w-5xl container mx-auto p-6 lg:p-10 lg:mt-24 mb-10 '>
          {/* คณะบริหารธุรกิจ*/}
          <div data-aos="zoom-in"
            className="lg:mx-auto md:flex md:items-center bg-neutral-800 overflow-hidden 
                      rounded-lg drop-shadow-lg text-black border-b-2 
                      "
          >
            <div className="h-auto md:w-[380px] flex-none bg-cover rounded-t md:rounded-t-none md:rounded-l text-center overflow-hidden" >
              <img className=''
                src="/img/faculty/sFbus.png" alt="" />
            </div>
            <div className="mx-5 my-4">
              <p className='text-[#6CB4EE] text-[16px] md:text-xl lg:text-2xl '> คณะบริหารธุรกิจ </p>
              <p className='text-[#6CB4EE] text-[13px] md:text-md lg:text-xl mb-2'> Faculty of Business Administration</p>
              <ul className="list-disc list-inside text-black ml-3 text-[10px] md:text-[14px] lg:text-base">
                <li className='py-1 md:py-0.5  '>สาขาวิชาการบัญชี (บช.บ.) +</li>
                <li className='py-1 md:py-0.5 '>สาขาวิชาการจัดการ (บธ.บ.) +</li>
                <li className='py-1 md:py-0.5 '>สาขาวิชาระบบสารสนเทศ (บธ.บ.) +</li>
                <li className='py-1 md:py-0.5 '>สาขาวิชาการจัดการโรงแรมและการท่องเที่ยว (บธ.บ.)</li>
                <li className='py-1 md:py-0.5 '>สาขาวิชาการจัดการอุตสาหกรรมและโลจิสติกส์ (บธ.บ)</li>
              </ul>
            </div>
          </div>



          {/* คณะวิทยาศาสตร์และเทคโนโลยี */}
          <div data-aos="fade-right"
            className="mt-5 lg:mx-auto md:flex md:flex-row-reverse md:items-center bg-neutral-800/75 
              overflow-hidden rounded-lg  drop-shadow-lg text-black border-b-2
             "
          >
            <div className="h-auto md:w-[350px] flex-none bg-cover rounded-t md:rounded-t-none md:rounded-l text-center overflow-hidden" >
              <img className=''
                src="/img/faculty/sFsci.png" alt="" />
            </div>
            <div className="mx-5 my-4">
              <p className='text-[#6CB4EE] text-[16px] md:text-xl lg:text-2xl'> คณะวิทยาศาสตร์และเทคโนโลยี </p>
              <p className='text-[#6CB4EE] text-[13px] md:text-md lg:text-xl mb-2'> Faculty of Science and Technology</p>
              <ul className="list-disc list-inside text-black ml-3 text-[10px] md:text-[14px] lg:text-base">
                <li className='py-1 md:py-0.5 lg:py-2 '>สาขาวิชาสาธารณสุขศาสตร์ (สบ.) +</li>
              </ul>
            </div>
          </div>


          {/* คณะศิลปศาสตร์*/}
          <div data-aos="fade-left"
            className="mt-5 lg:mx-auto md:flex md:items-center bg-neutral-800 overflow-hidden rounded-lg  
              drop-shadow-lg text-black border-b-2
              "
          >
            <div className=" md:w-[350px] md:h-[230px] flex-none bg-cover rounded-t md:rounded-t-none md:rounded-l text-center overflow-hidden" >
              <img className='h-full'
                src="/img/faculty/Flib.png" alt="" />
            </div>
            <div className="mx-5 my-4">
              <p className='text-[#6CB4EE] text-[16px] md:text-xl lg:text-2xl '> คณะศิลปศาสตร์ </p>
              <p className='text-[#6CB4EE] text-[13px] md:text-md lg:text-xl mb-2'> Faculty of Liberal arts</p>
              <ul className="list-disc list-inside text-black ml-3 text-[10px] md:text-[14px] lg:text-base">
                <li className='py-1 md:py-0.5 lg:py-2 '>สาขาวิชารัฐประศาสนศาสตร์ (รป.บ) +</li>
              </ul>
            </div>
          </div>

          {/* คณะวิศวกรรมศาสตร์ */}
          <div data-aos="fade-right"
            className="mt-5 lg:mx-auto md:flex md:flex-row-reverse md:items-center bg-neutral-800/75 
              overflow-hidden rounded-lg  drop-shadow-lg text-black border-b-2
             "
          >
            <div className="h-auto md:w-[350px] flex-none bg-cover rounded-t md:rounded-t-none md:rounded-l text-center overflow-hidden" >
              <img className=''
                src="/img/faculty/sFeng.png" alt="" />
            </div>
            <div className="mx-5 my-4">
              <p className='text-[#6CB4EE] text-[16px] md:text-xl lg:text-2xl '> คณะวิศวกรรมศาสตร์ </p>
              <p className='text-[#6CB4EE] text-[13px] md:text-md lg:text-xl mb-2'> Faculty of Engineering</p>
              <ul className="list-disc list-inside text-black ml-3 text-[10px] md:text-[14px] lg:text-base">
                <li className='py-1 md:py-0.5 lg:py-2 '>สาขาวิชาวิศวกรรมยานยนต์ (วศ.บ.) +</li>
              </ul>
            </div>
          </div>


          <div className='mx-3 mt-8'>
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
      </div>

    </TheLayout >
  )
}
