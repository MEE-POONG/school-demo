import Image from "next/image";
import { Inter } from "next/font/google";
import RootLayout from "../../components/layout";
import Footer from "@/components/footer";
import Navbar from "@/pages/navbar";
import Slider from "@/pages/slider";
import { RiFilePaper2Line } from "react-icons/ri";
import { GrMoney } from "react-icons/gr";
import { RiGraduationCapLine } from "react-icons/ri";
import { FaUserGraduate } from "react-icons/fa";
import Link from "next/link";
import { FaMoneyBill } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
    return (
        <RootLayout>
         <div className=" mt-3">
            <Slider />
            </div>
            <div className="relative w-full h-full mt-3 ">
            <img className=" relative w-full h-44" src="/img/event/111.png"/>         
            <div className=" absolute inset-0 flex justify-evenly md:grid-flow-col md:gap-20 md:justify-center mt-6  ">
                <div className="text-center">
                    <div className="text-[28px] md:text-[70px] text-white hover:text-orange-500">
                        <Link href="">
                            <RiFilePaper2Line className="mx-auto" />
                        </Link>
                    </div>
                    <p className="text-white hover:text-orange-500 text-sm md:text-base">สมัครเรียน</p>
                </div>

                <div className="text-center">
                    <div className="text-[30px] md:text-[70px] text-white hover:text-orange-500">
                        <Link href="" className="">
                            <FaMoneyBill className="mx-auto"/>
                        </Link>
                    </div>
                    <p className="text-white hover:text-orange-500 text-xs md:text-base ">ทุนการศึกษา</p>
                </div>

                <div className="text-center">
                    <div className=" text-[30px] md:text-[70px] text-white hover:text-orange-500">
                        <Link href="">
                            <RiGraduationCapLine className="mx-auto"/>
                        </Link>
                    </div>
                    <p className="text-white hover:text-orange-500 text-xs md:text-base">ปรึกษาเพิ่มเติม</p>
                </div>

                <div className="text-center">
                    <div className=" text-[30px] md:text-[70px] text-white hover:text-orange-500">
                        <Link href="">
                            <FaUserGraduate className="mx-auto"/>
                        </Link>
                    </div>
                    <p className="text-white hover:text-orange-500 text-xs md:text-base">คณะที่เปิดสอน</p>
                </div>
            </div>
            </div>
            <div className="container mx-auto  md:py-10 py-2 text-center">
            <span className="text-4xl ">
                     <span className=" text-blue-800">ข่าว</span> 
                     <span className=" text-yellow-500">“พนมวันท์”</span> 
                </span>
                {/* <h1 className=" text-xl md:text-4xl ml-3 md:ml-0 mt-5  ">
                    ข่าวประชาสัมพันธ์
                </h1> */}    
                {/* <div className="flex justify-between  text-blue-900 ">
                    <div className="order-last text-xs md:text-lg">
                        <Link href="about">อ่านทั้งหมด</Link>
                    </div>
                    <div></div>
                </div> */}
                <div className="md:w-full h-0.5 bg-blue-900 mb-7"></div>
                <div className=" container mx-auto py-2 items-center justify-center">
                    <img src="/img/imgSlider/school1.jpg" />
                </div>
                <div className="grid grid-cols-3 gap-3 mt-5  lg:container mx-auto ">
                    <Link href="">
                        <img
                            src="/img/imgSlider/school6.jpg"
                    
                        />
                    </Link>
                    <Link href="">
                        <img src="/img/register/regis.png" />
                    </Link>
                    <Link href="">
                        <img
                            src="/img/imgSlider/school3.jpg"
                            
                        />
                    </Link>
                </div>
            </div>

            <div className="container mx-auto md:py-24 text-blue-900  ">
                <h1 className="font-fontTH text-xl md:text-4xl  md:ml-0 mt-5">
                    ข่าวกิจกรรม
                </h1>
                <div className="flex justify-between">
                    <div className="order-last text-xs md:text-lg">
                        <Link href="about">อ่านทั้งหมด</Link>
                    </div>
                    <div></div>
                </div>
                <div className="h-0.5 bg-blue-900 md:ml-1"></div>
                <div className=" container mx-auto py-2 items-center justify-center"></div>
                <div className="grid grid-cols-3 gap-3 mt-5 ">
                    <Link href="">
                        <img
                            src="/img/event/event1.png"
                        />
                    </Link>
                    <Link href="">
                        <img src="/img/event/event6.png" />
                    </Link>
                    <Link href="">
                        <img
                            src="/img/event/event3.png"
                          
                        />
                    </Link>
                </div>
                


                <div className="grid grid-cols-3 md:grid-cols-5 gap-5 m-10 place-items-center">
                    <div className="outline outline-1 h-12 w-12 md:h-32 md:w-32 flex flex-col items-center justify-center">
                        <h1 className=" text-blue-800 text-xs md:text-lg">คณะ</h1>
                        <h1 className=" text-blue-500 text-xl md:text-3xl">4</h1>
                    </div>

                    <div className="outline outline-1 h-12 w-12 md:h-32 md:w-32 flex flex-col items-center justify-center">
                        <h1 className=" text-blue-800 text-xs md:text-lg">หลักสูตร</h1>
                        <h1 className=" text-blue-500 text-xl md:text-3xl">4</h1>
                    </div>

                    <div className="outline outline-1 h-12 w-12 md:h-32 md:w-32 flex flex-col items-center justify-center">
                        <h1 className=" text-blue-800 text-xs md:text-lg">บุคลากร</h1>
                        <h1 className=" text-blue-500 text-xl md:text-3xl">54</h1>
                    </div>

                    <div className="outline outline-1 h-12 w-24 ml-12 md:ml-0 md:h-32 md:w-32  flex flex-col items-center justify-center">
                        <h1 className=" text-blue-800 text-xs md:text-lg">นักศึกษาปัจจุบัน</h1>
                        <h1 className=" text-blue-500 text-xl md:text-3xl">1500</h1>
                    </div>

                    <div className="outline outline-1 h-12 w-24 ml-32 md:ml-0 md:h-32 md:w-32  flex flex-col items-center justify-center">
                        <h1 className=" text-blue-800 text-xs md:text-lg">ผู้เข้าชมเว็บไซต์</h1>
                        <h1 className=" text-blue-500 text-xl md:text-3xl">1222</h1>
                    </div>

                </div>
            </div>
        </RootLayout>
    );
}
