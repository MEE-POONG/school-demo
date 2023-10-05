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

            <div className='container mx-auto px-2 md:px-14 py-5'>
                <p className='text-light-blue-600'>Advisor</p>
                <p className='text-xl md:text-3xl text-[#1F306A]'>ทีมที่ปรึกษา</p>

                <p className='text-black text-xs md:text-base indent-8 py-5'>
                    ทีมอาจารย์ที่ปรึกษาคอยดูแลตลอดหลักสูตรการเรียน  ด้วยประสบการณ์มากกว่า 20 ปี
                    ไม่ว่าจะติดปัญหาด้านการเงิน เวลา หรือระยะทางให้พวกเราทีมอาจารย์ที่ปรึกษาช่วยแก้ปัญหา
                    พร้อมแนะแนวแผนการเรียนให้ฟรี
                </p>
                
            </div>
            <div>
                <AddressContact />
            </div>










        </TheLayout>

    )
}
