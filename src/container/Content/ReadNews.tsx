import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import TheLayout from "@/components/TheLayout";
import Image from 'next/image';
import { AiTwotoneCalendar } from "react-icons/ai";
import { FaHandPointRight } from "react-icons/fa";

export default function ReadNewsPage() {
    const router = useRouter();
    const { id } = router.query; // ดึงค่า id จาก query parameters

    const [articleData, setArticleData] = useState<any>({}); // กำหนดประเภทของข้อมูลบทความข่าว
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        if (id) {
            fetch(`/api/news/${id}`)
                .then((response) => response.json())
                .then((data) => {
                    setArticleData(data); // กำหนดข้อมูลบทความข่าวที่ดึงมา
                    //console.log(data);
                    setIsLoading(false); // ตั้งค่า isLoading เป็น false เมื่อโหลดเสร็จสมบูรณ์

                })
                .catch((error) => {
                    console.error('Error:', error);
                    setIsLoading(false); // ตั้งค่า isLoading เป็น false เมื่อโหลดเสร็จสมบูรณ์

                });
        }
    }, [id]);
    return (
        <>
            <TheLayout>
                <div className="container mx-auto py-16">
                    <div className="mt-24 px-5 lg:px-0">
                        <h3 className="text-xl md:text-3xl font-semibold">ชื่อกิจกรรม/หัวห้อของข่าว</h3>

                        <div className="h-0.5 bg-blue-400 w-full my-2 rounded-full"></div>
                        <Image
                            className="w-full h-auto lg:h-[450px] object-cover rounded-md shadow-lg"
                            src='/img/activity/activity3.jpg'
                            width={1024}
                            height={100}
                            alt="Pictue of News"
                        />
                        <p className="flex items-center mt-10 text-xs md:text-base">
                            <AiTwotoneCalendar /> &nbsp;
                            วันที่ :<span className="text-blue-400">&nbsp;5 ตุลาคม 2566</span>
                        </p>
                        <div className="mt-3 bg-white p-7 shadow-lg rounded-md">
                            <div className="text-xs md:text-base indent-8 ">
                            </div>
                            <a href="#" className="text-xs md:text-base flex items-center mt-8">
                                <FaHandPointRight className="animate-pulse animate-infinite animate-duration-[900ms] text-amber-800" />
                                <span className="ml-2 text-blue-400 hover:underline">ต้องการโหลดรูปภาพ คลิก</span>
                            </a>
                        </div>

                    </div>
                </div>
            </TheLayout>
        </>
    )

}