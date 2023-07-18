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

      <div className="grid md:grid-flow-col justify-center gap-3 md:gap-10 mt-6">
        <div className="text-center">
          <div className="bg-white text-blue-900 p-3 rounded-full hover:bg-blue-900 hover:text-white border-2 border-blue-900">
            <Link href="">
              <RiFilePaper2Line size={70} />
            </Link>
          </div>
          <p className="text-blue-900">สมัครเรียน</p>
        </div>

        <div className="text-center">
          <div className="bg-white text-blue-900 p-3 rounded-full hover:bg-blue-900 hover:text-white border-2 border-blue-900">
            <Link href="">
              <FaMoneyBill size={70} />
            </Link>
          </div>
          <p className="text-blue-900">ทุนการศึกษา</p>
        </div>

        <div className="text-center">
          <div className="bg-white text-blue-900 p-3 rounded-full hover:bg-blue-900 hover:text-white border-2 border-blue-900">
            <Link href="">
              <RiGraduationCapLine size={70} />
            </Link>
          </div>
          <p className="text-blue-900">ปรึกษาเพิ่มเติม</p>
        </div>

        <div className="text-center">
          <div className="bg-white text-blue-900 p-3 rounded-full hover:bg-blue-900 hover:text-white border-2 border-blue-900">
            <Link href="">
              <FaUserGraduate size={70} />
            </Link>
          </div>
          <p className="text-blue-900">คณะที่เปิดสอน</p>
        </div>
      </div>
      <div className="container mx-auto  md:py-10 text-blue-900">
        <h1 className="font-fontTH text-2xl md:text-4xl ml-3 md:ml-0">
          ข่าวประชาสัมพันธ์
        </h1>
        <div className="flex justify-between ...">
          <div className="order-last">
            <Link href="about">อ่านทั้งหมด</Link>
          </div>
          <div></div>
        </div>
        <div className="w-full h-0.5 bg-blue-900 mb-7"></div>
        <div className=" container mx-auto py-2 items-center justify-center">
          <img src="/img/imgSlider/school1.jpg" width="1500px" height="100px" />
        </div>
        <div className="grid grid-cols-3 gap-3 mt-5  lg:container mx-auto">
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

      <div className="container mx-auto md:py-24 text-blue-900 mb-8">
        <h1 className="font-fontTH text-2xl md:text-4xl ml-3 md:ml-0">
          ข่าวกิจกรรม
        </h1>
        <div className="flex justify-between ...">
          <div className="order-last">
            <Link href="about">อ่านทั้งหมด</Link>
          </div>
          <div></div>
        </div>
        <div className="w-full h-0.5 bg-blue-900"></div>
        <div className=" container mx-auto py-2 items-center justify-center"></div>
        <div className="grid grid-cols-3 gap-3 mt-5  lg:container mx-auto">
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
    </RootLayout>
  );
}
