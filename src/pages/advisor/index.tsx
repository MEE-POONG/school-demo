import Image from 'next/image'
import { Inter } from 'next/font/google'
import TheLayout from '@/components/TheLayout'
import { BsBuildingFill } from "react-icons/bs";
import { IoNewspaperSharp } from "react-icons/io5";
import { PiHandCoinsBold } from "react-icons/pi";
import { GoBook } from "react-icons/go";
import { MdSupportAgent } from "react-icons/md";
import { TbStars } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";
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
            <div className="relative">
                <img src="/img/advisor/contactban.png" alt="" />
                <div className="absolute inset-0  mb-2 md:mb-24  flex justify-center items-center">
                    <p className='text-white underline text-4xl md:text-6xl lg:text-7xl '>
                        ติดต่อเรา
                    </p>
                </div>
            </div>
            {/* ทีมที่ปรึกษา กับ ขีด */}
            <div className=' px-2 md:px-14 py-5'>
                <p className='text-2xl  md:text-5xl text-[#1F306A]'>
                    ทีมที่ปรึกษา
                </p>
                {/* ขีด */}
                <div className='bg-gradient-to-r from-[#1F306A] via-[#FFBF00] to-black w-full h-1 '></div>
            </div>


            {/* เนื้อหาส่วนทีมที่ปรึกษา */}
            <div className='bg-[#1F306A]/80  bg-opacity-80 px-2 md:px-14 pb-10'>
                {/* คำอธิบายทีมที่ปรึกษา */}

                <div className='container mx-auto'>
                    <div>
                        <p className='text-white text-xs md:text-xl py-5'>
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
                                <img className='border-x-8 border-t-8 border-[#FFBF00] ' src="/img/advisor/pornpimol.png" alt="" style={{
                                    WebkitFilter: 'drop-shadow(2px 2px 5px #444444)',
                                    filter: 'drop-shadow(2px 2px 5px #444444)'
                                }} />
                                <div className=' text-center '>
                                    <p className='text-[#1F306A] text-xl md:text-2xl lg:text-3xl xl:text-3xl mt-4'>นาง พรพิมล ลักขษร</p>
                                    <h2 className='text-[#8DB600] text-lg md:text-xl lg:text-2xl mt-2'>ผู้ช่วยที่ปรึกษา</h2>
                                    <h2 className='text-[#536878] text-lg md:text-xl lg:text-2xl mt-1'>061-519-6551</h2>
                                    <h2 className='text-[#1F306A] text-lg md:text-xl lg:text-2xl mt-2 mb-4 p-2'>“ทุกการศึกษามีความหมายกับเราเสมอ”</h2>
                                </div>
                            </div>
                        </div>

                        {/* พิชาภพ */}
                        <div className='bg-white' >
                            <div className='flex flex-col h-full' >
                                <div className=' text-center bg-white my-auto' >
                                    <p className='text-[#1F306A] text-xl md:text-2xl lg:text-3xl xl:text-3xl mt-4'>นายพิชาภพ ลักขษร</p>
                                    <p className='text-[#8DB600] text-lg md:text-xl lg:text-2xl mt-2'>หัวหน้าที่ปรึกษา</p>
                                    <p className='text-[#536878] text-lg md:text-xl lg:text-2xl mt-1'>061-519-6515</p>
                                    <p className='text-[#1F306A] text-lg md:text-xl lg:text-2xl mt-2 mb-4 p-2'>“ประสบการณ์ที่เรามีพร้อมช่วยเหลือคุณ”</p>
                                </div>
                                <img className='border-x-8 border-b-8 border-[#FFBF00] mt-auto ' src="/img/advisor/pichapop.png" alt="" style={{
                                    WebkitFilter: 'drop-shadow(2px 2px 5px #444444)',
                                    filter: 'drop-shadow(2px 2px 5px #444444)'
                                }} />
                            </div>
                        </div>


                        {/*  วรรธนัย  */}
                        <div className='bg-white'>
                            <div className='flex flex-col'>
                                <img className='border-x-8 border-t-8 border-[#FFBF00] ' src="/img/advisor/wantanai.png" alt="" style={{
                                    WebkitFilter: 'drop-shadow(2px 2px 5px #444444)',
                                    filter: 'drop-shadow(2px 2px 5px #444444)'
                                }} />
                                <div className=' text-center'>
                                    <p className='text-[#1F306A] text-xl md:text-2xl lg:text-3xl xl:text-3xl mt-4'>นาย วรรธนัย บุตรมั้น</p>
                                    <h2 className='text-[#8DB600] text-lg md:text-xl lg:text-2xl mt-2'>สื่อและประชาสัมพันธ์</h2>
                                    <h2 className='text-[#536878] text-lg md:text-xl lg:text-2xl mt-1'>061-019-8815</h2>
                                    <h2 className='text-[#1F306A] text-lg md:text-xl lg:text-2xl mt-2 mb-4 p-2'>“ต่อยอดความเป็นไปได้ ไปกับเรา”</h2>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* ปิด 3 รูปและข้อมูล */}










                    {/* แบบ เล็กสุด รูปและข้อมูล 3 คน  */}
                    <div className='grid  md:hidden'>


                        {/* พิชาภพ */}
                        <div className='bg-white'>
                            <div className='flex flex-col h-full items-center mt-5 mb-10'>
                                <img className='w-60 border-x-8 border-y-8 border-[#FFBF00] mt-auto ' src="/img/advisor/pichapop.png" alt="" style={{
                                    WebkitFilter: 'drop-shadow(2px 2px 5px #444444)',
                                    filter: 'drop-shadow(2px 2px 5px #444444)'
                                }} />
                                <div className=' text-center bg-white mb-14'>
                                    <p className='text-[#1F306A] text-sm md:text-2xl lg:text-4xl mt-4'>นายพิชาภพ ลักขษร</p>
                                    <p className='text-[#8DB600] text-sm md:text-xl lg:text-2xl mt-2'>หัวหน้าที่ปรึกษา</p>
                                    <p className='text-[#536878] text-sm md:text-xl lg:text-2xl mt-1'>061-519-6515</p>
                                    <p className='text-[#1F306A] text-sm md:text-xl lg:text-2xl mt-2 mb-4'>“ประสบการณ์ที่เรามีพร้อมช่วยเหลือคุณ”</p>
                                </div>

                            </div>
                        </div>


                        {/* พรพิมล */}
                        <div className='bg-white flex flex-col h-full items-center '>
                            <img className='w-60 border-x-8 border-y-8 border-[#FFBF00] ' src="/img/advisor/pornpimol.png" alt="" style={{
                                WebkitFilter: 'drop-shadow(2px 2px 5px #444444)',
                                filter: 'drop-shadow(2px 2px 5px #444444)'
                            }} />

                            <div className='text-center mb-14'>
                                <p className='text-[#1F306A] text-sm md:text-2xl lg:text-4xl mt-4'>นาง พรพิมล ลักขษร</p>
                                <h2 className='text-[#8DB600] text-sm md:text-xl lg:text-2xl mt-2'>ผู้ช่วยที่ปรึกษา</h2>
                                <h2 className='text-[#536878] text-sm md:text-xl lg:text-2xl mt-1'>061-519-6551</h2>
                                <h2 className='text-[#1F306A] text-sm md:text-xl lg:text-2xl mt-2 mb-4'>“ทุกการศึกษามีความหมายกับเราเสมอ”</h2>
                            </div>

                        </div>



                        {/* วรรธนัย */}
                        <div className='bg-white flex flex-col h-full items-center'>
                            <img className='w-60 border-x-8 border-y-8 border-[#FFBF00] ' src="/img/advisor/wantanai.png" alt="" style={{
                                WebkitFilter: 'drop-shadow(2px 2px 5px #444444)',
                                filter: 'drop-shadow(2px 2px 5px #444444)'
                            }} />

                            <div className='text-center mb-14'>
                                <p className='text-[#1F306A] text-sm md:text-2xl lg:text-4xl mt-4'>นาย วรรธนัย บุตรมั้น</p>
                                <h2 className='text-[#8DB600] text-sm md:text-xl lg:text-2xl mt-2'>สื่อและประชาสัมพันธ์</h2>
                                <h2 className='text-[#536878] text-sm md:text-xl lg:text-2xl mt-1'>061-019-8815</h2>
                                <h2 className='text-[#1F306A] text-sm md:text-xl lg:text-2xl mt-2 mb-4'>“ต่อยอดความเป็นไปได้ ไปกับเรา”</h2>
                            </div>

                        </div>
                    </div>


                    {/* ปิด 3 รูปและข้อมูล */}
                </div>
                {/* ปิด เนื้อหา */}
            </div>


            {/* ช่องทางการติดต่อ กับ ขีด */}
            <div className=' px-2 md:px-14 py-5'>
                <p className='text-2xl  md:text-5xl text-[#1F306A]'>
                    ช่องทางการติดต่อ
                </p>
                {/* ขีด */}
                <div className='bg-gradient-to-r from-[#1F306A] via-[#FFBF00] to-black w-full h-1 '></div>
            </div>

            {/* เนื้อหาส่วนช่องทางการติดต่อ */}
            <div className='bg-black bg-opacity-80 px-2 md:px-14 pb-10'>
                <div className='py-4'>
                    <p className='text-[#FFBF00] text-lg mx-a'>วิทยาลัยเทคโนโลยีพนมวันท์</p>
                </div>
                {/* ที่อยู่วิทยาลัย */}
                {/* <div className='grid grid-cols-12 text-white mb-5 lg:text-lg md:text-sm text-[7px]  '>
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

                </div> */}


                <div className='grid grid-rows-12 grid-flow-col gap-1 grid-cols-12 text-white mb-5 lg:text-lg text-sm md:text-md   '>

                    <div className='row-start-1 col-start-1'>
                        <p>ที่อยู่</p>
                    </div>
                    <div className='row-start-1 col-start-3 md:col-start-2 col-span-7'>
                        <p>198 ถ.มิตรภาพ-จอหอ ต.บ้านโพธิ์ อ.เมือง จ.นครราชสีมา 30310</p>
                    </div>

                    <div className='row-start-3 col-start-1'>
                        <p>โทร</p>
                    </div>
                    <div className='row-start-3 col-start-3 md:col-start-2 col-span-7'>
                        <p>044-955121-122</p>
                    </div>

                    <div className='row-start-5 col-start-1'>
                        <p>แฟ็กซ์</p>
                    </div>
                    <div className='row-start-5 col-start-3 md:col-start-2 col-span-7'>
                        <p>044-955121-122</p>
                    </div>


                    <div className='row-start-7 col-start-1'>
                        <p>อีเมล</p>
                    </div>
                    <div className='row-start-7 col-start-3 md:col-start-2 col-span-7'>
                        <p>phanomwanu@gmail.com</p>
                    </div>

                    <div className='col-start-10 col-span-3 row-start-1 row-end-7' >
                        <img className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32" src="/img/Logo_panomwan.png" />
                    </div>
                </div>


                {/* ขีดเทา */}
                <div className='bg-[#536878] w-full h-0.5 '></div>

                <div className='py-4 flex gap-2 '>
                    <p className='text-[#FFBF00] text-lg'>พรพิมล ลักขษร</p>
                    <h2 className='text-white text-md my-auto ml-2'>ผู้ช่วยที่ปรึกษา</h2>
                </div>
                {/* ที่อยู่อาจารย์ */}

                <div className='grid grid-rows-12 grid-flow-col gap-1 grid-cols-12 text-white mb-5 lg:text-lg text-sm md:text-md   '>

                    <div className='row-start-1 col-start-1'>
                        <p>ที่อยู่</p>
                    </div>
                    <div className='row-start-1 col-start-3 md:col-start-2 col-span-7'>
                        <p>198 ถ.มิตรภาพ-จอหอ ต.บ้านโพธิ์ อ.เมือง จ.นครราชสีมา 30310</p>
                    </div>

                    <div className='row-start-3 col-start-1'>
                        <p>โทร</p>
                    </div>
                    <div className='row-start-3 col-start-3 md:col-start-2 col-span-7'>
                        <p>061-019-8815</p>
                    </div>

                    <div className='row-start-5 col-start-1'>
                        <p>Faecbook</p>
                    </div>
                    <div className='row-start-5 col-start-3 md:col-start-2 md:pl-6 lg:pl-0 col-span-7'>
                        <p className='ml-2 md:ml-0'>teacher Pornpimol</p>
                    </div>

                    <div className='col-start-10 col-span-3 row-start-1 row-end-7' >
                        <img className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32" src="/img/Qrline.jpg" />
                    </div>
                </div>

                {/* <div className='grid grid-cols-12 text-white mb-5 lg:text-lg md:text-sm text-[7px] '>
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

                </div> */}
                {/* map */}
                <div className='flex justify-center'>
                    <iframe className="  md:w-full h-72 rounded-lg" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15410.825965346847!2d102.1841477!3d15.0643421!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311949e7e29a02b3%3A0x8b0fbbc3758d561f!2z4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4LmA4LiX4LiE4LmC4LiZ4LmC4Lil4Lii4Li14Lie4LiZ4Lih4Lin4Lix4LiZ4LiX4LmMIFBoYW5vbXdhbiBDb2xsZWdlIG9mIFRlY2hub2xvZ3k!5e0!3m2!1sth!2sth!4v1689326551888!5m2!1sth!2sth" ></iframe>
                </div>

                <div className='md:px-48'>
                    <div className='bg-black rounded-lg mt-2  flex justify-center items-center drop-shadow-lg'>
                        <FaLocationDot className='text-[#FFBF00] mr-2 text-center' />
                        <p className='text-2xl text-[#FFBF00] text-center'>Main Campus</p>
                    </div>
                </div>
            </div>







        </TheLayout>

    )
}
