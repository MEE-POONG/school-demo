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
            <div className='bg-black bg-opacity-80 px-2 md:px-14 pb-10'>
                {/* คำอธิบายทีมที่ปรึกษา */}

                <div className='container mx-auto'>
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
                    </div>


                    {/* ปิด 3 รูปและข้อมูล */}
                









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
                    </div>


                    {/* ปิด 3 รูปและข้อมูล */}
                </div>
                {/* ปิด เนื้อหา */}
            </div>


            {/* ช่องทางการติดต่อ กับ ขีด */}  
            <div className=' px-2 md:px-14 py-5'>
                <h1 className='text-2xl  md:text-5xl text-[#1F306A]'>
                    ช่องทางการติดต่อ
                </h1>
                {/* ขีด */}
                <div className='bg-gradient-to-r from-[#1F306A] via-[#FFBF00] to-black w-full h-1 '></div>
            </div>

            {/* เนื้อหาส่วนช่องทางการติดต่อ */}
            <div className='bg-black bg-opacity-80 px-2 md:px-14 pb-10'>
                <div className='py-4'>
                    <h1 className='text-[#FFBF00] text-xl mx-a'>วิทยาลัยเทคโนโลยีพนมวันท์</h1>
                </div>
                {/* ที่อยู่วิทยาลัย */}
                <div className='grid grid-cols-12 text-white mb-5 lg:text-lg md:text-sm text-[7px]  '>
                    <div className='col-span-1 space-y-2'>
                        <p>ที่อยู่</p>
                        <p>โทร</p>
                        <p>แฟ็กซ์</p>
                        <p>อีเมล</p>
                    </div>

                    <div className='col-span-7 space-y-2' >
                        <p>198 ถ.มิตรภาพ-จอหอ ต.บ้านโพธิ์ อ.เมือง จ.นครราชสีมา 30310</p>
                        <p>044-955121-122</p>
                        <p>044-955-120</p>
                        <p>phanomwanu@gmail.com</p>
                    </div>

                    <div className='col-span-4 flex justify-center' >
                        <img className="w-12 h-12 md:w-24 md:h-24 lg:w-32 lg:h-32" src="/img/Logo_panomwan.png" />
                    </div>

                </div>

                {/* ขีดเทา */}
                <div className='bg-[#536878] w-full h-0.5 '></div>

                <div className='py-4 flex gap-2 '>
                    <h1 className='text-[#FFBF00] text-xl'>พรพิมล ลักขษร</h1>
                    <h2 className='text-white text-md my-auto   '>ผู้ช่วยที่ปรึกษา</h2>
                </div>
                {/* ที่อยู่อาจารย์ */}
                <div className='grid grid-cols-12 text-white mb-5 lg:text-lg md:text-sm text-[7px] '>
                    <div className='col-span-1 space-y-2'>
                        <p>ที่อยู่</p>
                        <p>โทร</p>
                        <p>Faecbook</p>
                    </div>

                    <div className='col-span-7 space-y-2 md:ml-4 lg:ml-0' >
                        <p>198 ถ.มิตรภาพ-จอหอ ต.บ้านโพธิ์ อ.เมือง จ.นครราชสีมา 30310</p>
                        <p>061-019-8815</p>
                        <p className='ml-2 md:ml-0'>teacher Pornpimol</p>
                    </div>

                    <div className='col-span-4 flex justify-center' >
                        <img className="w-12 h-12 md:w-24 md:h-24 lg:w-32 lg:h-32" src="/img/Qrline.jpg" />
                    </div>

                </div>
                {/* map */}
                <div className=''>
                    <iframe className="  md:w-full h-72 rounded-lg" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15410.825965346847!2d102.1841477!3d15.0643421!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311949e7e29a02b3%3A0x8b0fbbc3758d561f!2z4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4LmA4LiX4LiE4LmC4LiZ4LmC4Lil4Lii4Li14Lie4LiZ4Lih4Lin4Lix4LiZ4LiX4LmMIFBoYW5vbXdhbiBDb2xsZWdlIG9mIFRlY2hub2xvZ3k!5e0!3m2!1sth!2sth!4v1689326551888!5m2!1sth!2sth" ></iframe>
                </div>

                <div className='md:px-48'>
                    <div className='bg-black rounded-lg mt-2  flex justify-center items-center drop-shadow-lg'>
                        <FaLocationDot className='text-[#FFBF00] mr-2 text-center' />
                        <h1 className='text-2xl text-[#FFBF00] text-center'>Main Campus</h1>
                        </div>
                    </div>
                </div>







        </RootLayout>

    )
}
