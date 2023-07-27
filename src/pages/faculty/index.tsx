import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'
import RootLayout from '@/components/layout'
import Link from 'next/link';


const inter = Inter({ subsets: ['latin'] })

export default function Faculty() {
  return (
    <RootLayout>

{/* banner คณะและหลักสูตร */}
      <div className="relative">
        <img src="/img/faculty/facuban.png" alt="" />
        <div className="absolute inset-0  mb-8 md:mb-24  flex justify-center items-center">
          <h1 className='text-[#FFBF00] text-4xl md:text-6xl lg:text-7xl '>คณะและหลักสูตร</h1>
        </div>
        
      </div>


{/* container ใหญ่ */}
      <div className='container mx-auto md:py-24 py-12'>

      <div className='flex justify-center md:justify-end mb-5 md:mb-5'>
        <Link href="register">
        <button type="button" className="text-4xl md:text-2xl text-[#1F306A] bg-[#FFBF00] hover:bg-[#6CB4EE] rounded-lg  px-5 py-2.5  mb-2 ">
                  สมัครเรียน
                </button> 
                </Link>
      </div>
      {/* ขีด */}
      <div className='bg-gradient-to-r from-black via-[#FFBF00] to-black w-full h-1  mb-7 md:mb-14'></div>
     

      {/* คณะบริหารธุรกิจ*/}
      <div className='bg-neutral-800 rounded-md flex mb-5 '>
          <img className='rounded-l-md hidden md:flex md:object-fill md:w-[350px] md:h-[250px]  lg:w-[350px] lg:h-[300px]   lg:object-cover' src="/img/faculty/sFbus.png" alt="" />
          <div className='pl-4 pt-4'>
            <h1 className='text-[#6CB4EE] text-xl md:text-2xl lg:text-3xl '> คณะบริหารธุรกิจ </h1>
            <h1 className='text-[#6CB4EE] text-xl md:text-2xl lg:text-3xl mb-2'> Faculty of Business Administration</h1>
            <ul className="list-disc list-inside text-white ml-3 text-xs md:text-base  ">
                <li className='py-1 md:py-0.5 lg:py-2 '>สาขาวิชาการบัญชี (บช.บ.) +</li>
                <li className='py-1 md:py-0.5 lg:py-2'>สาขาวิชาการจัดการ (บธ.บ.) +</li>
                <li className='py-1 md:py-0.5 lg:py-2'>สาขาวิชาระบบสารสนเทศ (บธ.บ.) +</li>
                <li className='py-1 md:py-0.5 lg:py-2'>สาขาวิชาการจัดการโรงแรมและการท่องเที่ยว (บธ.บ.)</li>
                <li className='py-1 md:py-0.5 lg:py-2 mb-2 md:mb-0 lg:mb-0'>สาขาวิชาการจัดการอุตสาหกรรมและโลจิสติกส์ (บธ.บ)</li>
              </ul>
          </div>
      </div>



      {/* คณะวิทยาศาสตร์และเทคโนโลยี */}
      <div className='bg-[#536878] rounded-md flex justify-between '>
          
          <div className='pl-4 pt-4 mr-5'>
            <h1 className='text-[#6CB4EE] text-xl md:text-2xl lg:text-3xl '> คณะวิทยาศาสตร์และเทคโนโลยี  </h1>
            <h1 className='text-[#6CB4EE] text-xl md:text-2xl lg:text-3xl mb-2'> Faculty of Science and Technology</h1>
            <ul className="list-disc list-inside text-white ml-3 text-xs md:text-base  ">
                <li className='py-1 md:py-0.5 lg:py-2 mb-2 md:mb-0 lg:mb-0'>สาขาวิชาสาธารณสุขศาสตร์ (สบ.) +</li>
              </ul>
          </div>
          <img className='rounded-r-md hidden md:flex  md:object-fill md:w-[350px] md:h-[250px]  lg:w-[350px] lg:h-[300px]   lg:object-cover' src="/img/faculty/sFsci.png" alt="" />
      </div>

      {/* คณะศิลปศาสตร์*/}
      <div className='bg-neutral-800 rounded-md flex mt-5 '>
          <img className='rounded-l-md hidden md:flex md:object-fill md:w-[350px] md:h-[250px]  lg:w-[350px] lg:h-[300px]   lg:object-cover' src="/img/faculty/sFlib.png" alt="" />
          <div className='pl-4 pt-4'>
            <h1 className='text-[#6CB4EE] text-xl md:text-2xl lg:text-3xl '> คณะศิลปศาสตร์ </h1>
            <h1 className='text-[#6CB4EE] text-xl md:text-2xl lg:text-3xl mb-2'>Faculty of Liberal arts</h1>
            <ul className="list-disc list-inside text-white ml-3 text-xs md:text-base  ">
                <li className='py-1 md:py-0.5 lg:py-2 mb-2 md:mb-0 lg:mb-0'>สาขาวิชารัฐประศาสนศาสตร์ (รป.บ) +</li>
              </ul>
          </div>
      </div>


      {/* คณะวิศวกรรมศาสตร์ */}
      <div className='bg-[#536878] rounded-md flex justify-between mt-5 '>
          
          <div className='pl-4 pt-4 mr-5'>
            <h1 className='text-[#6CB4EE] text-xl md:text-2xl lg:text-3xl '> คณะวิศวกรรมศาสตร์  </h1>
            <h1 className='text-[#6CB4EE] text-xl md:text-2xl lg:text-3xl mb-2'> Faculty of Engineering</h1>
            <ul className="list-disc list-inside text-white ml-3 text-xs md:text-base  ">
                <li className='py-1 md:py-0.5 lg:py-2 mb-2 md:mb-0 lg:mb-0'>สาขาวิชาวิศวกรรมยานยนต์ (วศ.บ.) +</li>
              </ul>
          </div>
          <img className='rounded-r-md hidden md:flex  md:object-fill md:w-[350px] md:h-[250px]  lg:w-[350px] lg:h-[300px]   lg:object-cover' src="/img/faculty/sFeng.png" alt="" />
      </div>

      {/* ขีด */}
      <div className='bg-gradient-to-r from-black via-[#FFBF00] to-black w-full h-1  mt-10 mb-4'></div>
      <h1 className='text-[#1F306A] text-xs md:text-2xl'># หมายเหตุ : เสาร์-อาทิตย์ เรียนออนไลน์  </h1>
      <h1 className='text-[#1F306A] text-xs md:text-2xl'># เครื่องหมาย + แทนสาขาที่เปิดหลักสูตร วันเสาร์-อาทิตย์</h1>

    {/* divใหญ่ที่มี container */}
      </div>


    </RootLayout>
  )
}
