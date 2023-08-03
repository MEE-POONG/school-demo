import { Inter } from "next/font/google";
import RootLayout from "../../components/layout";
import Menu from "@/container/menu";
import Activity from "@/components/activity";
import Slider from "@/components/slider";
import Thesliderbar from "@/components/Thesliderbar";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <RootLayout>
      <Thesliderbar/>
      <Menu />
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
      <Activity />
      <div className="container mx-auto  md:py-10 py-2  ">
        <div className="flex justify-center items-center ">
          <div className="bg-blue-900 w-20 h-0.5"></div>
          <div className=" text-blue-900 text-xl md:text-2xl mx-2">สถิติ</div>
          <div className="bg-blue-900 w-20 h-0.5"></div>
        </div>
      </div>
      <div className=" bg-slate-800 w-full h-48 md:h-full">
        <div className="md:grid md:grid-flow-col md:auto-cols-max md:gap-2 md:justify-center h-36 text-center">
          <div className="flex my-auto px-5 text-yellow-400 md:border-r-2 border-gray-500 text-2xl	">
            4<span className="my-auto text-2xl text-white mr-2">&nbsp;คณะ</span>
          </div>
          <div className="flex my-auto  px-5 text-yellow-400 md:border-r-2 border-gray-500 text-2xl	">
            20<span className="my-auto text-2xl text-white mr-2">&nbsp;หลักสูตร</span>
          </div>
          <div className="flex my-auto  px-5 text-yellow-400 md:border-r-2 border-gray-500 text-2xl	">
            500<span className="my-auto text-2xl text-white mr-2">&nbsp;กำลังศึกษา</span>
          </div>
          <div className="flex my-auto px-5 text-yellow-400 text-2xl	">
            1000<span className="my-auto text-2xl text-white mr-2">&nbsp;ผู้เข้าชมเว็บไซต์</span>
          </div>
        </div>
      </div>
    </RootLayout>
  );
}
