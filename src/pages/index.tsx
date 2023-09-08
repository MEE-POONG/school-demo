import RootLayout from "@/components/layout";
import Thesliderbar from '@/container/Home/Thesliderbar';
import Activity from "@/container/Home/activity";
import Menu from "@/container/Home/menu";
import SliderNews from "@/container/Home/sliderNew";
import Statistics from "@/container/Home/statistics";


export default function Index() {
  return (
    <>
      <RootLayout>
        <Thesliderbar />
        {/* <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-6xl mx-10 mt-6 text-[#1F306A]/70">Menu</h1>
        <div className="md:w-full h-1  mb-3 bg-gradient-to-r from-blue-900 via-yellow-500 to-blue-900"></div> */}
        <Menu />
        <div className="container mx-auto  md:py-10 py-2 text-center mt-5">
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl mx-5 mt-6">
            <span className=" text-blue-800 ">ข่าว</span>
            <span className=" text-yellow-500">“พนมวันท์”</span>
          </span>
          <div className="md:w-full h-1 mt-4 bg-gradient-to-r from-blue-900 via-yellow-500 to-blue-900"></div>
          <div className=" mx-auto py-2 items-center justify-center w-full">
            <SliderNews />
          </div>
        </div>
        <Activity />
        <Statistics />

        {/* <div className="container mx-auto  md:py-10 py-2  ">
          <div className="flex justify-center items-center ">
            <div className="bg-blue-900 w-20 h-0.5"></div>
            <div className=" text-blue-900 text-xl md:text-2xl mx-2">สถิติ</div>
            <div className="bg-blue-900 w-20 h-0.5"></div>
          </div>
        </div> */}



      </RootLayout>
    </>
  )
}