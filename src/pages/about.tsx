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
            <Slider />
            
            <div className="   flex justify-evenly md:grid-flow-col md:gap-10 md:justify-center mt-6">
                <div className="text-center">
                    <div className="bg-white text-[28px] md:text-[70px] text-blue-900 p-4  rounded-full hover:bg-blue-900 hover:text-white border-2 border-blue-900">
                        <Link href="" className="">
                            <RiFilePaper2Line/>
                        </Link>
                    </div>
                    <p className="text-blue-900 text-sm md:text-lg">สมัครเรียน</p>
                </div>

                <div className="text-center">
                    <div className="bg-white text-[30px]  md:text-[70px] text-blue-900 p-4 rounded-full hover:bg-blue-900 hover:text-white border-2 border-blue-900">
                        <Link href="">
                            <FaMoneyBill  />
                        </Link>
                    </div>
                    <p className="text-blue-900 text-xs md:text-lg">ทุนการศึกษา</p>
                </div>

                <div className="text-center">
                    <div className="bg-white text-[30px] md:text-[70px] text-blue-900 p-4 rounded-full hover:bg-blue-900 hover:text-white border-2 border-blue-900">
                        <Link href="">
                            <RiGraduationCapLine  />
                        </Link>
                    </div>
                    <p className="text-blue-900 text-xs md:text-lg">ปรึกษาเพิ่มเติม</p>
                </div>

                <div className="text-center">
                    <div className="bg-white text-[30px] md:text-[70px] text-blue-900 p-4 rounded-full hover:bg-blue-900 hover:text-white border-2 border-blue-900">
                        <Link href="">
                            <FaUserGraduate />
                        </Link>
                    </div>
                    <p className="text-blue-900 text-xs md:text-lg">คณะที่เปิดสอน</p>
                </div>
            </div>
            <div className="container mx-auto  md:py-10 text-blue-900 py-2 justify-evenly">
                <h1 className="font-fontTH text-xl md:text-4xl ml-3 md:ml-0 mt-5 ">
                    ข่าวประชาสัมพันธ์
                </h1>
                <div className="flex justify-between ">
                    <div className="order-last text-xs md:text-lg">
                        <Link href="about">อ่านทั้งหมด</Link>
                    </div>
                    <div></div>
                </div>
                <div className="md:w-full h-0.5 bg-blue-900 mb-7"></div>
                <div className=" container mx-auto py-2 items-center justify-center">
                    <img src="/img/imgSlider/school1.jpg" width="1500px" height="100px" />
                </div>
                <div className="grid grid-cols-3 gap-3 mt-5  lg:container mx-auto ">
                    <Link href="">
                        <img
                            src="/img/imgSlider/school6.jpg"
                            width="490px"
                            height="100px"
                        />
                    </Link>
                    <Link href="">
                        <img src="/img/register/regis.png" width="490px" height="100px" />
                    </Link>
                    <Link href="">
                        <img
                            src="/img/imgSlider/school3.jpg"
                            width="490px"
                            height="100px"
                        />
                    </Link>
                </div>
            </div>

            <div className="container mx-auto md:py-24 text-blue-900  ">
                <h1 className="font-fontTH text-xl md:text-4xl ml-3 md:ml-0 mt-5">
                    ข่าวกิจกรรม
                </h1>
                <div className="flex justify-between">
                    <div className="order-last text-xs md:text-lg">
                        <Link href="about">อ่านทั้งหมด</Link>
                    </div>
                    <div></div>
                </div>
                <div className="w-full h-0.5 bg-blue-900 ml-3 md:ml-1"></div>
                <div className=" container mx-auto py-2 items-center justify-center"></div>
                <div className="grid grid-cols-3 gap-3 mt-5 ml-3">
                    <Link href="">
                        <img
                            src="/img/event/event1.png"
                            width="490px"
                            height="100px"
                        />
                    </Link>
                    <Link href="">
                        <img src="/img/event/event6.png" width="490px" height="100px" />
                    </Link>
                    <Link href="">
                        <img
                            src="/img/event/event3.png"
                            width="490px"
                            height="100px"
                        />
                    </Link>
                </div>
                <div className=" grid grid-cols-3 md:grid-cols-5 text-center container mx-auto py-2 justify-evenly ml-6 md:ml-1">
                <div className="box-border h-24 w-24 md:h-32 md:w-32  p-4 border-4 border-blue-800 text-center mt-4 grid grid-cols-1 gap-2">
                    <h1 className=" text-blue-800 text-xs md:text-lg">คณะ</h1>
                    <h1 className=" text-blue-500 text-xl md:text-3xl">4</h1>
                </div>
                <div className="box-border h-24 w-24 md:h-32 md:w-32 p-4 border-4 border-blue-800 text-center mt-4 grid grid-cols-1 gap-2">
                <h1 className=" text-blue-800 text-xs md:text-lg">หลักสูตร</h1>
                    <h1 className=" text-blue-500 text-xl md:text-3xl">9</h1>
                </div>
                <div className="box-border h-24 w-24  md:h-32 md:w-32 p-4 border-4 border-blue-800 text-center mt-4 grid grid-cols-1 gap-2">
                <h1 className=" text-blue-800 text-xs md:text-lg">บุคลากร</h1>
                    <h1 className=" text-blue-500 text-xl md:text-3xl">54</h1>
                </div>
                <div className="box-border h-24 w-24  md:h-32 md:w-32 p-4 border-4 border-blue-800 text-center mt-4 grid grid-cols-1 gap-2">
                <h1 className=" text-blue-800 text-xs md:text-lg">นักศึกษาปัจจุบัน</h1>
                    <h1 className=" text-blue-500 text-xl md:text-3xl">1500</h1>
                </div>
                <div className="box-border h-24 w-24 md:h-32 md:w-32 p-4 border-4 border-blue-800 text-center mt-4 grid grid-cols-1 gap-2">
                <h1 className=" text-blue-800 text-xs md:text-lg">ผู้เข้าชมเว็บไซต์</h1>
                    <h1 className=" text-blue-500 text-xl md:text-3xl">1222</h1>
                </div>
                </div>
            </div>

        </RootLayout>
    );
}
