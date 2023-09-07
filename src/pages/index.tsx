import RootLayout from "@/components/layout";
import Thesliderbar from '@/components/Thesliderbar';
import MyCarousel from "./test";
import Menu from "@/container/menu";
import SliderNews from "@/components/sliderNew";


export default function Index(){
    return(
<>
<RootLayout>
<Thesliderbar/>

{/* <h1 className="text-3xl xl:text-6xl mx-10 mt-10 text-[#1F306A]/70">Menu</h1> */}
<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl mx-5 mt-6 text-[#1F306A]/70">Menu</h1>



<div className="md:w-full h-2  mb-3 bg-gradient-to-r from-blue-900 via-yellow-500 to-blue-900"></div>
<Menu/>
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


</RootLayout>
</>
    )
}