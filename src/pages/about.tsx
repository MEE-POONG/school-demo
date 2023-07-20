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


            {/* div container */}
            <div className="container mx-auto text-xl py-8 md:py-24 ">

                <div className='flex justify-between'>
                    <div>
                        <h1 className='text-2xl  md:text-5xl text-[#1F306A] mb-2'>
                        รู้จัก”พนมวันท์”
                        </h1>
                    
                    </div>

                </div>
                {/* div ขีด */}
                <div className='bg-[#1F306A] w-full h-1  mb-7 md:mb-14'></div>
                {/*  */}











{/* ท่อนคณะกรรมการ */}
                {/* div ขีด */}
                <div className='bg-[#1F306A] w-full h-1  mb-7 md:mb-14'></div>
                {/* */}

                {/* แทบ คณะกรรมการสภาวิทยาลัย */}

                <div className="bg-[#1F306A] h-32 justify-center flex flex-col mb-10">
                    <div className="text-white text-2xl  md:text-4xl text-center mb-2">
                    <h1>คณะกรรมการสภาวิทยาลัย</h1>
                    </div>
                    <div className="text-white text-lg md:text-2xl text-center">
                    <h5>รายนามคณะกรรมการสภาวิทยาลัย</h5>
                    </div>
                </div>
                {/*  */}

                {/* นายกสภาวิทยาลัย  */}
                <div className="columns-1">
                    <div className="items-center justify-center flex flex-col">
                        <h1 className="text-[#1F306A] font-bold mb-2">นายกสภาวิทยาลัย</h1>
                        <img src="https://static.wikia.nocookie.net/heroes-and-villain/images/8/8b/Snape_%281%29.jpg" alt="" />
                        <h5 className="text-[#536878] text-sm mt-2 ">ศาสตราจารย์ ดร.บุญทัน ดอกไธสง</h5>
                    </div>
                </div>
                {/*  */}



                {/* กรรมการสภาวิทยาลัย อธิการบดี  */}
                <div className="columns-1">
                    <div className="items-center justify-center flex flex-col mt-10">
                        <h1 className="text-[#1F306A] font-bold mb-2">กรรมการสภาวิทยาลัย อธิการบดี</h1>
                        <img src="https://static.wikia.nocookie.net/heroes-and-villain/images/8/8b/Snape_%281%29.jpg" alt="" />
                        <h5 className="text-[#536878] text-sm mt-2 ">ดร.พิสิษฐ์ ศิริรักษ์</h5>
                    </div>
                </div>
                {/*  */}

                {/* กรรมการสภาวิทยาลัย  */}
                <h1 className="text-[#1F306A] font-bold mb-2 text-center py-12">กรรมการสภาวิทยาลัย</h1>
                
                <div className="columns-1 md:columns-4">
                    <div className="items-center justify-center flex flex-col ">
                        <img src="https://static.wikia.nocookie.net/heroes-and-villain/images/8/8b/Snape_%281%29.jpg" alt="" />
                        <h5 className="text-[#536878] text-sm mt-2 ">ดร.อินทร์ จันทร์เจริญ</h5>
                    </div>

                    <div className="items-center justify-center flex flex-col mt-10">
                        <img src="https://static.wikia.nocookie.net/heroes-and-villain/images/8/8b/Snape_%281%29.jpg" alt="" />
                        <h5 className="text-[#536878] text-sm mt-2 ">ศ.ดร.จุลละพงษ์ จุลละโพธิ์</h5>
                    </div>

                    <div className="items-center justify-center flex flex-col mt-10">
                        <img src="https://static.wikia.nocookie.net/heroes-and-villain/images/8/8b/Snape_%281%29.jpg" alt="" />
                        <h5 className="text-[#536878] text-sm mt-2 ">ดร.ทิวา พงษ์ธนไพบูลย์</h5>
                    </div>

                    <div className="items-center justify-center flex flex-col mt-10">
                        <img src="https://static.wikia.nocookie.net/heroes-and-villain/images/8/8b/Snape_%281%29.jpg" alt="" />
                        <h5 className="text-[#536878] text-sm mt-2 ">รอง ศ.ดร.ชัยยุทธ ช่างสาร</h5>
                    </div>


                    <div className="items-center justify-center flex flex-col ">
                        <img src="https://static.wikia.nocookie.net/heroes-and-villain/images/8/8b/Snape_%281%29.jpg" alt="" />
                        <h5 className="text-[#536878] text-sm mt-2 ">ผู้ช่วย ศ.ฉัตรชัย เธียรหิรัญ</h5>
                    </div>

                    <div className="items-center justify-center flex flex-col mt-10">
                        <img src="https://static.wikia.nocookie.net/heroes-and-villain/images/8/8b/Snape_%281%29.jpg" alt="" />
                        <h5 className="text-[#536878] text-sm mt-2 ">ดร.วราภรณ์ สีหนาท</h5>
                    </div>

                    <div className="items-center justify-center flex flex-col mt-10">
                        <img src="https://static.wikia.nocookie.net/heroes-and-villain/images/8/8b/Snape_%281%29.jpg" alt="" />
                        <h5 className="text-[#536878] text-sm mt-2 ">ดร.รอง ศ.ดร.อัญชลี สารรัตนะ</h5>
                    </div>

                    <div className="items-center justify-center flex flex-col mt-10">
                        <img src="https://static.wikia.nocookie.net/heroes-and-villain/images/8/8b/Snape_%281%29.jpg" alt="" />
                        <h5 className="text-[#536878] text-sm mt-2 ">รอง ศ.ดร.ปพฤกษ์ อุตสาหะวาณิชกิจ</h5>
                    </div>


                </div>
                {/*  */}



                {/* เลขานุการสภาวิทยาลัย  */}
                <div className="columns-1">
                    <div className="items-center justify-center flex flex-col mt-20 ">
                        <h1 className="text-[#1F306A] font-bold mb-2">เลขานุการสภาวิทยาลัย</h1>
                        <img src="https://static.wikia.nocookie.net/heroes-and-villain/images/8/8b/Snape_%281%29.jpg" alt="" />
                        <h5 className="text-[#536878] text-sm mt-2 ">ผู้ช่วย ศ.กุลธนี ศิริรักษ์</h5>
                    </div>
                </div>
                {/*  */}



                {/* กรรมการสภาวิทยาลัย อธิการบดี  */}
                <div className="columns-1">
                    <div className="items-center justify-center flex flex-col mt-10">
                        <h1 className="text-[#1F306A] font-bold mb-2">ผู้ช่วยเลขานุการสภามหาวิทยาลัย</h1>
                        <img src="https://static.wikia.nocookie.net/heroes-and-villain/images/8/8b/Snape_%281%29.jpg" alt="" />
                        <h5 className="text-[#536878] text-sm mt-2 ">ผู้ช่วย ศ.ดร.สมพร เจนคุณาวัฒน์</h5>
                    </div>
                </div>
                {/*  */}

                


                

            {/* div container */}
            </div>

        </RootLayout>
    );
}
