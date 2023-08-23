import Activityloader from "@/components/Activityloader";
import Newloader from "@/components/Newloader";
import RootLayout from "@/components/layout";
import { Inter } from "next/font/google";
import Link from 'next/link';


const inter = Inter({ subsets: ["latin"] });

export default function Welfare() {
  return (
    <RootLayout>
      {/* banner คณะและหลักสูตร */}
      <div className="relative">
        <img src="/img/news/building2.png" alt="" />
        <div className="absolute inset-0  mb-2 md:mb-24  flex justify-center items-center">
          {/* <h1 className='text-white text-xl md:text-6xl lg:text-7xl '>
                    วิทยาลัยเทคโนโลยีพนมวันท์
                    </h1>    */}
        </div>
      </div>

      {/* แทบ ข่าวประชาสัมพันธ์ */}
      <div className="">
        <div className="bg-black bg-opacity-80">
          <h1 className="text-xl md:text-3xl text-[#FFBF00] text-center py-4 md:py-6">
            ข่าวประชาสัมพันธ์
          </h1>
        </div>
      </div>

      {/* เนื้อหาข่าวประชาสัมพันธ์ */}
    
      <div className=" p-5">
      <Newloader/>
      </div>




      {/* แทบ ข่าวกิจกรรม */}
      <div className="">
        <div className="bg-black bg-opacity-80">
          <h1 className="text-xl md:text-3xl text-[#FFBF00] text-center py-4 md:py-6">
            ข่าวกิจกรรม
          </h1>
        </div>
      </div>

      

  {/* เนื้อหาข่าวกิจกรรม */}
      <div className=" p-5">
      <Activityloader/>
      </div>



      </RootLayout>
  );
}
