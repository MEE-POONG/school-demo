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
                <img src="/img/advisor/contactban.png" alt="" />
                <div className="absolute inset-0  mb-2 md:mb-24  flex justify-center items-center">
                    <h1 className='text-white underline text-4xl md:text-6xl lg:text-7xl '>ติดต่อเรา</h1>
                </div>
            </div>
            {/* ทีมที่ปรึกษา grid */}
            <div className="text-xl font-fontTH font-bold py-8 md:py-14">


                <div className='flex justify-between px-10'>
                    <div><h1 className='text-2xl  md:text-5xl text-[#1F306A]'>ทีมที่ปรึกษา</h1></div>
                </div>
                <div className='px-10'>
                    <div className='bg-gradient-to-r from-[#1F306A] via-[#FFBF00] to-black w-full h-1 '></div>
                </div>
                <div className='bg-black bg-opacity-80 pb-20 px-10'>
                    <h5 className='text-white text-base md:text-xl mt-4 py-10'>
                        ทีมอาจารย์ที่ปรึกษาคอยดูแลตลอดหลักสูตรการเรียน  ด้วยประสบการณ์มากกว่า 20 ปี
                        ไม่ว่าจะติดปัญหาด้านการเงิน เวลา หรือระยะทางให้พวกเราทีมอาจารย์ที่ปรึกษาช่วยแก้ปัญหา
                        พร้อมแนะแนวแผนการเรียนให้ฟรี

                    </h5>
                    {/*  เนื้อหา แบบ md */}
                    <div className='md:grid  md:grid-cols-3 border border-black hidden  '>
                        {/*  พรพิมล */}
                        <div className='bg-white'>
                            <div className='flex flex-col'>
                                <img className='border-8 border-[#FFBF00]' src="/img/advisor/pornpimol.png" alt="" />
                                <div className=' text-center bg-white'>
                                    <h1 className='text-[#1F306A] text-4xl mb-5 mt-5'>นาง พรพิมล ลักขษร</h1>
                                    <h5 className='text-[#8DB600] text-2xl'>ผู้ช่วยที่ปรึกษา</h5>
                                    <h6 className='text-[#536878] text-2xl'>061-519-6551</h6>
                                    <h5 className='text-[#1F306A] text-2xl mb-5 mt-5'>“ทุกระบบจบที่เรา”</h5>
                                </div>
                            </div>
                        </div>
                        {/* พิชาภพ */}
                        <div className='bg-white'>
                            <div className='flex flex-col h-full'>
                                <img className='border-8 border-[#1F306A] md:hidden lg:hidden xl:hidden  ' src="/img/advisor/pichapop.png" alt="" />

                                <div className=' text-center bg-white'>
                                    <h1 className='text-[#1F306A] text-4xl mb-5  mt-10 md:mt-20 '>นายพิชาภพ ลักขษร</h1>
                                    <h5 className='text-[#8DB600] text-2xl'>หัวหน้าที่ปรึกษา</h5>
                                    <h6 className='text-[#536878] text-2xl'>061-519-6515</h6>
                                    <h5 className='text-[#1F306A] text-2xl'>“ทุกระบบจบที่เรา”</h5>
                                </div>
                                <img className='border-8 border-[#FFBF00] mt-auto ' src="/img/advisor/pichapop.png" alt="" />

                            </div>
                        </div>
                        {/*  วรรธนัย  */}
                        <div className='bg-white'>
                            <div className='flex flex-col'>
                                <img className='border-8 border-[#FFBF00]' src="/img/advisor/wantanai.png" alt="" />
                                <div className=' text-center bg-white'>
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
                                <img className='border-8 border-[#FFBF00] md:hidden lg:hidden xl:hidden  ' src="/img/advisor/pichapop.png" alt="" />

                                <div className=' text-center bg-white'>
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
                                <img className='border-8 border-[#FFBF00]' src="/img/advisor/pornpimol.png" alt="" />
                                <div className=' text-center bg-white'>
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
                                <img className='border-8 border-[#FFBF00]' src="/img/advisor/wantanai.png" alt="" />
                                <div className=' text-center bg-white'>
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
            </div>
{/* ช่องทางการติดต่อ */}
            <div className='flex justify-between px-10'>
                <div><h1 className='text-2xl  md:text-5xl text-[#1F306A]'>ช่องทางการติดต่อ</h1></div>
            </div>
            <div className='px-10 pb-5'>
                <div className='bg-gradient-to-r from-[#1F306A] via-[#FFBF00] to-black w-full h-1 '></div>
            </div>
{/* ช่องทางการติดต่อ เนื้อหา*/}
            <div className='bg-black bg-opacity-80 pb-20 px-10'>


                    
            </div>


        </RootLayout>

    )
}
