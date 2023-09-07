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

<<<<<<< HEAD
=======
    <RootLayout>
      <div className=" bg-slate-200">
      <Thesliderbar />
      <div className="fixed bottom-[150px]  left-0 right-5 z-40 px-4 py-2 ">
        <Link href="https://www.facebook.com/PhanomwanCollege/">
          <p className="text-gray-400 underline"> <img
            className=" absolute inset-y-0 right-0 w-16"
            src="/img/messenger-Logo.png"
          /></p>
        </Link>
      </div>
>>>>>>> 8ddd4bcc13668048762114af31bf0f03571fd37e


<div className="md:w-full h-2  mb-3 bg-gradient-to-r from-blue-900 via-yellow-500 to-blue-900"></div>
<Menu/>
<div className="md:w-full h-1  mb-7 bg-gradient-to-r from-blue-900 via-yellow-500 to-blue-900"></div>
      <div className="container mx-auto  md:py-10 py-2 text-center">
        <Link href="/news">
      <button type="button" className="px-5 py-3 text-base  shadow-md font-medium text-center bg-blue-900 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
      <span className=" text-2xl md:text-4x">
          <span className=" text-white ">ข่าว</span>
          <span className=" text-yellow-400">“พนมวันท์”</span>
        </span>
      </button>
      </Link>
	

        <div className="md:w-full h-0.5 mt-4 bg-gradient-to-r from-blue-900 via-yellow-500 to-blue-900"></div>

        <div className=" mx-auto py-2 items-center justify-center w-full">
          <SliderNews />
        </div>

      </div>


<<<<<<< HEAD
</RootLayout>
</>
    )
}
=======
            <span className="my-auto px-5 text-white  text-lg md:text-xl lg:text-2xl">
              ผู้เข้าชม
            </span>

          </div>
          {/* <span className="my-auto px- text-white  text-2xl">
            ผู้เข้าชมเว็บไซต์
          </span> */}
        </div>
      </div>
      </div>
    </RootLayout>
  );
}
>>>>>>> 8ddd4bcc13668048762114af31bf0f03571fd37e
