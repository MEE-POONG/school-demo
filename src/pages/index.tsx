import RootLayout from "@/components/layout";
import Thesliderbar from '@/components/Thesliderbar';
import Menu from "@/container/menu";
import SliderNews from "@/components/sliderNew";
import Activitytest from "./test/test2";


export default function Index() {
  return (
    <>
      <RootLayout>
        <Thesliderbar />

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-6xl mx-10 mt-6 text-[#1F306A]/70">Menu</h1>
        <div className="md:w-full h-1  mb-3 bg-gradient-to-r from-blue-900 via-yellow-500 to-blue-900"></div>
        <Menu />

        <div className="container mx-auto  md:py-10 py-2 text-center mt-5">
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-6xl mx-5 mt-6">
            <span className=" text-blue-800 ">ข่าว</span>
            <span className=" text-yellow-500">“พนมวันท์”</span>
          </span>
          <div className="md:w-full h-1 mt-4 bg-gradient-to-r from-blue-900 via-yellow-500 to-blue-900"></div>
          <div className=" mx-auto py-2 items-center justify-center w-full">
            <SliderNews />
          </div>
        </div>

        <Activitytest />

      </RootLayout>
    </>
  )
}