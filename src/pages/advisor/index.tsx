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
                    <h1 className='text-white underline text-4xl md:text-6xl lg:text-7xl '>
                        ติดต่อเรา
                    </h1>
                </div>
            </div>

            {/* ทีมที่ปรึกษา กับ ขีด */}
            <div className=' px-2 md:px-14 py-5'>
                <h1 className='text-2xl  md:text-5xl text-[#1F306A]'>
                    ทีมที่ปรึกษา
                </h1>
                {/* ขีด */}
                <div className='bg-gradient-to-r from-[#1F306A] via-[#FFBF00] to-black w-full h-1 '></div>
            </div>


            {/* เนื้อหาส่วนทีมที่ปรึกษา */}
            <div className='bg-black bg-opacity-80 px-2 md:px-14'>
                {/* คำอธิบายทีมที่ปรึกษา */}
                <div>
                    <p className='text-white text-sm md:text-xl py-5'>
                    ทีมอาจารย์ที่ปรึกษาคอยดูแลตลอดหลักสูตรการเรียน  ด้วยประสบการณ์มากกว่า 20 ปี
                    ไม่ว่าจะติดปัญหาด้านการเงิน เวลา หรือระยะทางให้พวกเราทีมอาจารย์ที่ปรึกษาช่วยแก้ปัญหา
                    พร้อมแนะแนวแผนการเรียนให้ฟรี
                    </p>
                </div>

                {/* แบบ md ขึ้นไป รูปและข้อมูล 3 คน  */}
                <div className='md:grid md:grid-cols-3 hidden'>
                    {/* พรพิมล */}
                    <div className='bg-white'>
                        <div className='flex flex-col'>
                        <img className='border-x-8 border-t-8 border-[#FFBF00] ' src="/img/advisor/pornpimol.png" alt="" />
                            <div className=' text-center'>
                                <h1 className='text-[#1F306A] text-xl md:text-2xl lg:text-4xl mt-4'>นาง พรพิมล ลักขษร</h1>
                                <h2 className='text-[#8DB600] text-lg md:text-xl lg:text-2xl mt-2'>ผู้ช่วยที่ปรึกษา</h2>
                                <h2 className='text-[#536878] text-lg md:text-xl lg:text-2xl mt-1'>061-519-6551</h2>
                                <h2 className='text-[#1F306A] text-lg md:text-xl lg:text-2xl mt-2 mb-4'>“ทุกระบบจบที่เรา”</h2>
                            </div>
                        </div>
                    </div>

                    {/* พิชาภพ */}
                    <div className='bg-white'>
                            <div className='flex flex-col h-full'>
                                <div className=' text-center bg-white my-auto'>
                                    <h1 className='text-[#1F306A] text-xl md:text-2xl lg:text-4xl mt-4'>นายพิชาภพ ลักขษร</h1>
                                    <h5 className='text-[#8DB600] text-lg md:text-xl lg:text-2xl mt-2'>หัวหน้าที่ปรึกษา</h5>
                                    <h6 className='text-[#536878] text-lg md:text-xl lg:text-2xl mt-1'>061-519-6515</h6>
                                    <h5 className='text-[#1F306A] text-lg md:text-xl lg:text-2xl mt-2 mb-4'>“ทุกระบบจบที่เรา”</h5>
                                </div>
                                <img className='border-x-8 border-b-8 border-[#FFBF00] mt-auto ' src="/img/advisor/pichapop.png" alt="" />
                            </div>
                    </div>

                    
                    {/*  วรรธนัย  */}
                    <div className='bg-white'>
                        <div className='flex flex-col'>
                        <img className='border-x-8 border-t-8 border-[#FFBF00] ' src="/img/advisor/wantanai.png" alt="" />
                            <div className=' text-center'>
                                <h1 className='text-[#1F306A] text-xl md:text-2xl lg:text-4xl mt-4'>นาย วรรธนัย บุตรมั้น</h1>
                                <h2 className='text-[#8DB600] text-lg md:text-xl lg:text-2xl mt-2'>สื่อและประชาสัมพันธ์</h2>
                                <h2 className='text-[#536878] text-lg md:text-xl lg:text-2xl mt-1'>061-019-8815</h2>
                                <h2 className='text-[#1F306A] text-lg md:text-xl lg:text-2xl mt-2 mb-4'>“ทุกระบ  บจบที่เรา”</h2>
                            </div>
                        </div>
                    </div>
                        

                {/* ปิด 3 รูปและข้อมูล */}
                </div>









                {/* แบบ เล็กสุด รูปและข้อมูล 3 คน  */}
                <div className='grid  md:hidden'>



                    {/* พิชาภพ */}
                    <div className='bg-white'>
                            <div className='flex flex-col h-full'>
                            <img className='border-x-8 border-t-8 border-[#FFBF00] mt-auto ' src="/img/advisor/pichapop.png" alt="" />
                                <div className=' text-center bg-white my-auto'>
                                    <h1 className='text-[#1F306A] text-xl md:text-2xl lg:text-4xl mt-4'>นายพิชาภพ ลักขษร</h1>
                                    <h5 className='text-[#8DB600] text-lg md:text-xl lg:text-2xl mt-2'>หัวหน้าที่ปรึกษา</h5>
                                    <h6 className='text-[#536878] text-lg md:text-xl lg:text-2xl mt-1'>061-519-6515</h6>
                                    <h5 className='text-[#1F306A] text-lg md:text-xl lg:text-2xl mt-2 mb-4'>“ทุกระบบจบที่เรา”</h5>
                                </div>
                                
                            </div>
                        </div>

                        
                    {/* พรพิมล */}
                    <div className='bg-white'>
                        <img className='border-x-8 border-t-8 border-[#FFBF00] ' src="/img/advisor/pornpimol.png" alt="" />
                        
                        <div className='text-center'>
                            <h1 className='text-[#1F306A] text-xl md:text-2xl lg:text-4xl mt-4'>นาง พรพิมล ลักขษร</h1>
                            <h2 className='text-[#8DB600] text-lg md:text-xl lg:text-2xl mt-2'>ผู้ช่วยที่ปรึกษา</h2>
                            <h2 className='text-[#536878] text-lg md:text-xl lg:text-2xl mt-1'>061-519-6551</h2>
                            <h2 className='text-[#1F306A] text-lg md:text-xl lg:text-2xl mt-2 mb-4'>“ทุกระบบจบที่เรา”</h2>
                        </div>

                    </div>

                    

                    {/* วรรธนัย */}
                    <div className='bg-white'>
                        <img className='border-x-8 border-t-8 border-[#FFBF00] ' src="/img/advisor/wantanai.png" alt="" />
                        
                        <div className='text-center'>
                            <h1 className='text-[#1F306A] text-xl md:text-2xl lg:text-4xl mt-4'>นาย วรรธนัย บุตรมั้น</h1>
                            <h2 className='text-[#8DB600] text-lg md:text-xl lg:text-2xl mt-2'>สื่อและประชาสัมพันธ์</h2>
                            <h2 className='text-[#536878] text-lg md:text-xl lg:text-2xl mt-1'>061-019-8815</h2>
                            <h2 className='text-[#1F306A] text-lg md:text-xl lg:text-2xl mt-2 mb-4'>“ทุกระบ  บจบที่เรา”</h2>
                        </div>

                    </div>
                        

                {/* ปิด 3 รูปและข้อมูล */}
                </div>
            {/* ปิด เนื้อหา */}
            </div>


        </RootLayout>

    )
}
