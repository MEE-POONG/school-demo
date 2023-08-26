import Thesliderbar from "@/components/Thesliderbar";
import Visiter from "@/components/visiter";
import Activity from "@/components/activity";
import RootLayout from "@/components/layout";
import SliderNews from "@/components/sliderNew";
import Menu from "@/container/menu";
import { Inter } from "next/font/google";

import Link from "next/link";
import Slider from "react-slick";


const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (

    <RootLayout>
      <Thesliderbar />
      <div className="fixed bottom-[150px]  left-0 right-5 z-40 px-4 py-2 ">
        <Link href="https://www.facebook.com/PhanomwanCollege/">
          <p className="text-gray-400 underline"> <img
            className=" absolute inset-y-0 right-0 w-16"
            src="/img/messenger-Logo.png"
          /></p>
        </Link>
      </div>

      <Menu />
      <div className="md:w-full h-1  mb-7 bg-gradient-to-r from-blue-900 via-yellow-500 to-blue-900"></div>
      <div className="container mx-auto  md:py-10 py-2 text-center">
        <span className=" text-2xl md:text-4xl">
          <span className=" text-blue-800 ">ข่าว</span>
          <span className=" text-yellow-500">“พนมวันท์”</span>
        </span>

        <div className="md:w-full h-0.5 mt-4 bg-gradient-to-r from-blue-900 via-yellow-500 to-blue-900"></div>

        <div className=" mx-auto py-2 items-center justify-center w-full">
          <SliderNews />
        </div>

      </div>
      <Activity />
      <div className="container mx-auto  md:py-10 py-2  ">
        <div className="flex justify-center items-center ">
          <div className="bg-blue-900 w-20 h-0.5"></div>
          <div className=" text-blue-900 text-xl md:text-2xl mx-2">สถิติ</div>
          <div className="bg-blue-900 w-20 h-0.5"></div>
        </div>
      </div>

      <div className=" bg-slate-800 w-full sm:h-52 md:h-full   ">
        <div className="md:grid md:grid-flow-col md:auto-cols-max md:gap-2 md:justify-center h-36 text-center">
          <p className=" pt-3 md:pt-0 my-auto px-5 text-yellow-400 border-r-2 border-gray-500  text-2xl">
            4<span className="my-auto px-5 text-white   text-xl md:text-2xl">คณะ</span>
          </p>
          <p className=" my-auto px-5 text-yellow-400 border-r-2 border-gray-500 text-xl md:text-2xl">
            {" "}
            20
            <span className="my-auto px-5 text-white  text-xl md:text-2xl">หลักสูตร</span>
          </p>
          <p className=" my-auto px-5 text-yellow-400 border-r-2 border-gray-500 text-xl md:text-2xl">
            {" "}
            500
            <span className="my-auto px-5 text-white  text-xl md:text-2xl">
              กำลังศึกษา
            </span>
          </p>
          <div className=" my-auto px-5 text-yellow-400  text-xl md:text-2xl" >
            <Visiter />
          </div>
          {/* <span className="my-auto px- text-white  text-2xl">
            ผู้เข้าชมเว็บไซต์
          </span> */}
        </div>
      </div>

    </RootLayout>
  );
}
