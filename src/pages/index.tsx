import Image from "next/image";
import { Inter } from "next/font/google";
import RootLayout from "../../components/layout";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
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
            <div className=" mt-8">
                <div className="md:w-full h-1   bg-gradient-to-r from-blue-900 via-yellow-500 to-blue-900"></div>
                <Slider />
                <div className="md:w-full h-1  mt-4 bg-gradient-to-r from-blue-900 via-yellow-500 to-blue-900"></div>
            </div>
            <div className="relative w-full h-full mt-3 ">
                <img className=" relative w-full h-28 md:h-44" src="/img/event/111.png" />
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
                                <FaMoneyBill className="mx-auto" />
                            </Link>
                        </div>
                        <p className="text-white hover:text-orange-500 text-xs md:text-base ">ทุนการศึกษา</p>
                    </div>

                    <div className="text-center">
                        <div className=" text-[30px] md:text-[70px] text-white hover:text-orange-500">
                            <Link href="">
                                <RiGraduationCapLine className="mx-auto" />
                            </Link>
                        </div>
                        <p className="text-white hover:text-orange-500 text-xs md:text-base">ปรึกษาเพิ่มเติม</p>
                    </div>

                    <div className="text-center">
                        <div className=" text-[30px] md:text-[70px] text-white hover:text-orange-500">
                            <Link href="">
                                <FaUserGraduate className="mx-auto" />
                            </Link>
                        </div>
                        <p className="text-white hover:text-orange-500 text-xs md:text-base">คณะที่เปิดสอน</p>
                    </div>
                </div>
            </div>

            <div className="md:w-full h-1  mb-7 bg-gradient-to-r from-blue-900 via-yellow-500 to-blue-900"></div>
            <div className="container mx-auto  md:py-10 py-2 text-center">
                <span className=" text-2xl md:text-4xl">
                    <span className=" text-blue-800 ">ข่าว</span>
                    <span className=" text-yellow-500">“พนมวันท์”</span>
                </span>
                <div className="md:w-full h-0.5 mt-4 bg-gradient-to-r from-blue-900 via-yellow-500 to-blue-900"></div>
                <div className=" mx-auto py-2 items-center justify-center">
                    <Slider />

                </div>

            </div>

            <div className=" p-8">
                <div className="  bg-blue-900 md:h-56 lg:h-96">
                    <div className=" container mx-auto items-center justify-center">
                        <h1 className=" text-xl md:text-xl  md:ml-0 mt-1 text-center text-yellow-400">
                            กิจกรรมที่ผ่านมา
                        </h1>
                        <div className="grid grid-cols-3 gap-3 mt-5 container mx-auto">
                            <Link href="" >
                                <img className=""
                                    src="/img/event/event1.png" />
                            </Link>
                            <Link href="">
                                <img src="/img/event/event6.png" />
                            </Link>
                            <Link href="">
                                <img
                                    src="/img/event/event3.png" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="md:w-full h-0.5 mt-4 bg-gradient-to-r from-blue-900 via-yellow-500 to-blue-900"></div>

            </div>

            <div className="text-center min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-1 lg:overflow-visible ">
                <button
                    className=" underline underline-offset-1 middle none center mr-4 rounded-lg bg-blue-900 py-3 px-6 font-sans text-sm font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    data-ripple-light="true">
                    อ่านทั้งหมด
                </button>
            </div>

            <div className="container mx-auto  md:py-2 py-2  ">
                <div className="flex justify-center items-center ">
                    <div className="bg-blue-900 w-20 h-0.5"></div>
                    <div className=" text-blue-900 text-xl md:text-2xl mx-2">สถิติ</div>
                    <div className="bg-blue-900 w-20 h-0.5"></div>
                </div>

            </div>
            <div className=" bg-slate-800 w-full h-48 md:h-full">
            <div className="md:grid md:grid-flow-col md:auto-cols-max md:gap-2 md:justify-center h-20 text-center">
                <div className=" my-auto text-2xl text-yellow-400 md:border-r-2 border-gray-500">
                    4 
                    <span className="my-auto text-xl text-white mr-2">&nbsp;คณะ</span>
                </div>
                <div className=" my-auto text-2xl text-yellow-400 md:border-r-2 border-gray-500">
                    9 
                    <span className="my-auto text-xl text-white mr-2">&nbsp;หลักสูตร</span>
                </div>
                <div className=" my-auto text-2xl text-yellow-400 md:border-r-2 border-gray-500">
                    20 
                    <span className="my-auto text-xl text-white mr-2">&nbsp;บุคลากร</span>
                </div>
                <div className=" my-auto text-2xl text-yellow-400 md:border-r-2 border-gray-500">
                    500 
                    <span className="my-auto text-xl text-white mr-2">&nbsp;นักศึกษาปัจจุบัน</span>
                </div>
                <div className=" my-auto text-2xl text-yellow-400 ">
                    1000 
                    <span className="my-auto text-xl text-white mr-2">&nbsp;ผู้เข้าชมเว็บไซต์</span>
                </div>
            </div>
            </div>

        </RootLayout>
    );
}
