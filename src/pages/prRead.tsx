import React from "react";
import TheLayout from "@/components/TheLayout";
import Image from 'next/image';
import { AiTwotoneCalendar } from "react-icons/ai";

const PRforRead: React.FC = () =>{

    return (
        <>
            <TheLayout>
                <div className="container mx-auto py-16">
                    <div className="mt-24 px-5 lg:px-10">
                        <h3 className="text-xl md:text-3xl font-semibold">ประชาสัมพันธ์</h3>

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
                            <h4 className="text-xl md:text-2xl font-semibold mb-2">ชื่อหัวข้อที่จะประชาสัมพันธ์</h4>
                            <div className="text-xs md:text-base text-justify">
                                <article className="indent-8">
                                    Material Tailwind is an easy to use components library for Tailwind CSS
                                    and Material Design. It provides a simple way to customize your
                                    components, you can change the colors, fonts, breakpoints and everything
                                    you need.
                                </article>


                                <p className="mt-8">
                                    เอกสารแนบ (ถ้ามี)
                                    <a href="/pdf/register_form.pdf" className="bg-red-400 py-1 px-3 text-white rounded-full ml-3">
                                        คลิก
                                    </a>
                                </p>


                            </div>
                        </div>

                    </div>
                </div>
            </TheLayout>
        </>
    )

}
export default PRforRead;