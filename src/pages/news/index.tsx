import Image from 'next/image'
import { Inter } from 'next/font/google'
import RootLayout from '@/components/layout'
import { BsBuildingFill } from "react-icons/bs";
import { IoNewspaperSharp } from "react-icons/io5";
import { PiHandCoinsBold } from "react-icons/pi";
import { GoBook } from "react-icons/go";
import { MdSupportAgent } from "react-icons/md";
import { TbStars } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";




const inter = Inter({ subsets: ['latin'] })

export default function Welfare() {
    return (
        <RootLayout>

        {/* banner คณะและหลักสูตร */}
        <div className="relative">
            <img src="/img/news/building2.png" alt="" />
                <div className="absolute inset-0  mb-2 md:mb-24  flex justify-center items-center">
                    {/* <h1 className='text-white text-xl md:text-6xl lg:text-7xl '>
                    วิทยาลัยเทคโนโลยีพนมวันท์
                    </h1>    */}
                </div>
            </div>

    
        {/* แทบ ข่าวประชาสัมพันธ์ */}
        <div className=''>
                    <div className="bg-black bg-opacity-80">
                        <h1 className='text-xl md:text-3xl text-[#FFBF00] text-center py-4 md:py-6'>
                            ข่าวประชาสัมพันธ์
                        </h1>
                    
                    </div>

        </div>

        {/* เนื้อหาข่าวประชาสัมพันธ์ */}
        <div className='bg-[#E5E4E2]'>
            {/* คอลั่ม */}
            <div className=' container mx-auto'>
            <div className='grid grid-cols-2 md:grid-cols-4'>
            {/* ข้อมูลในคอลั่ม */}


                <div className='p-5'>
                    <div className='box-content shadow-xl rounded-lg '>
                        <img className='rounded-lg' src="/img/imgSlider/school7.jpg" alt="" />
                        <h1 className='text-[#1F306A] px-2 pt-2 h-14 text-sm truncate '>
                        เปิดรับสมัครนักศึกษาใหม่ 2566

                        </h1>
                    </div>
                </div>


                <div className='p-5'>
                    <div className='box-content shadow-xl rounded-lg '>
                        <img className='rounded-lg' src="/img/imgSlider/school7.jpg" alt="" />
                        <h1 className='text-[#1F306A] px-2 pt-2 h-14 text-sm truncate '>
                        เปิดรับสมัครนักศึกษาใหม่ 2566

                        </h1>
                    </div>
                </div>


                <div className='p-5'>
                    <div className='box-content shadow-xl rounded-lg '>
                        <img className='rounded-lg' src="/img/imgSlider/school7.jpg" alt="" />
                        <h1 className='text-[#1F306A] px-2 pt-2 h-14 text-sm truncate '>
                        เปิดรับสมัครนักศึกษาใหม่ 2566

                        </h1>
                    </div>
                </div>


                <div className='p-5'>
                    <div className='box-content shadow-xl rounded-lg '>
                        <img className='rounded-lg' src="/img/imgSlider/school7.jpg" alt="" />
                        <h1 className='text-[#1F306A] px-2 pt-2 h-14 text-sm truncate '>
                        เปิดรับสมัครนักศึกษาใหม่ 2566

                        </h1>
                    </div>
                </div>


            {/* ปิดคอลั่ม */}
            </div>
            </div>
        </div>


        {/* ปุ่มโหลดเพิ่มเติม 1 */}
        <div className=' py-8 flex justify-center items-center'>
            <button className='bg-black bg-opacity-80 text-white rounded-lg  drop-shadow-lg h-12 w-28'>โหลดเพิ่มเติม</button>
        </div>

        {/* แทบ ข่าวกิจกรรม */}
        <div className=''>
                    <div className="bg-black bg-opacity-80">
                        <h1 className='text-xl md:text-3xl text-[#FFBF00] text-center py-4 md:py-6'>
                            ข่าวกิจกรรม
                        </h1>
                    
                    </div>

        </div>


        {/* เนื้อหาข่าวกิจกรรม */}
        <div className='bg-[#E5E4E2]'>
        <div className=' container mx-auto'>
                    {/* คอลั่ม */}
            <div className='grid grid-cols-2 md:grid-cols-4'>
            {/* ข้อมูลในคอลั่ม */}

                <div className='p-5'>
                    <div className='box-content shadow-xl rounded-lg '>
                        <img className='rounded-lg' src="/img/imgSlider/school7.jpg" alt="" />
                        <h1 className='text-[#1F306A] px-2 pt-2 h-14 text-sm truncate '>
                        เปิดรับสมัครนักศึกษาใหม่ 2566

                        </h1>
                    </div>
                </div>


                <div className='p-5'>
                    <div className='box-content shadow-xl rounded-lg '>
                        <img className='rounded-lg' src="/img/imgSlider/school7.jpg" alt="" />
                        <h1 className='text-[#1F306A] px-2 pt-2 h-14 text-sm truncate '>
                        เปิดรับสมัครนักศึกษาใหม่ 2566

                        </h1>
                    </div>
                </div>


                <div className='p-5'>
                    <div className='box-content shadow-xl rounded-lg '>
                        <img className='rounded-lg' src="/img/imgSlider/school7.jpg" alt="" />
                        <h1 className='text-[#1F306A] px-2 pt-2 h-14 text-sm truncate '>
                        เปิดรับสมัครนักศึกษาใหม่ 2566

                        </h1>
                    </div>
                </div>


                <div className='p-5'>
                    <div className='box-content shadow-xl rounded-lg '>
                        <img className='rounded-lg' src="/img/imgSlider/school7.jpg" alt="" />
                        <h1 className='text-[#1F306A] px-2 pt-2 h-14 text-sm truncate '>
                        เปิดรับสมัครนักศึกษาใหม่ 2566

                        </h1>
                    </div>
                </div>


            {/* ปิดคอลั่ม */}
            </div>
            </div>
        </div>


        {/* ปุ่มโหลดเพิ่มเติม 2 */}
        <div className=' py-8 flex justify-center items-center'>
            <button className='bg-black bg-opacity-80 text-white rounded-lg  drop-shadow-lg h-12 w-28'>โหลดเพิ่มเติม</button>
        </div>


        </RootLayout>

    )
}
