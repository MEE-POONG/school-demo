import Image from 'next/image'
import { Inter } from 'next/font/google'
import TheLayout from '@/components/TheLayout'
import { useState, useEffect } from 'react'; // เพิ่มการ import useEffect
import Loading from '@/components/loading'; // เพิ่มการ import คอมโพเนนต์ Loading
import AddressContact from './address';




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
            <div className=' px-2 md:px-14 py-10'>
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

            <div>
                <AddressContact/>
            </div>


        







        </TheLayout>

    )
}
