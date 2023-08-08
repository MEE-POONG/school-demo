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
      <div className="bg-[#E5E4E2]">
        {/* คอลั่ม */}
        <div className=" container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {/* ข้อมูลในคอลั่ม */}

            <div className="p-3">
              <div className="box-content shadow-xl rounded-lg ">
              <Link href="/news/news1">
                <img
                  className="rounded-lg"
                  src="../img/banner/banner4.png"
                  alt=""
                />
                <h1 className="text-[#1F306A] px-2 pt-2 h-14 text-sm truncate ">
                  เปิดรับสมัครนักศึกษาใหม่ 2566
                </h1>
               </Link>
              </div>
            </div>

            <div className="p-3">
              <div className="box-content shadow-xl rounded-lg ">
              <Link href="/news/news2">
                <img
                  className="rounded-lg"
                  src="../img/banner/banner2.png"
                  alt=""
                />
                <h1 className="text-[#1F306A] px-2 pt-2 h-14 text-sm truncate ">
                  กู้ กยศ. 100% สำหรับนักเรียน นักศึกษา
                </h1>
                </Link>
              </div>
            </div>

            <div className="p-3">
              <div className="box-content shadow-xl rounded-lg ">
              <Link href="/news/news3">
                <img
                  className="rounded-lg"
                  src="../img/banner/banner1.png"
                  alt=""
                />
                <h1 className="text-[#1F306A] px-2 pt-2 h-14 text-sm truncate ">
                  ให้คำปรึกษาโดยอาจารย์ผู้เชี่ยวชาญ
                </h1>
                </Link>
              </div>
            </div>

            <div className="p-3">
              <div className="box-content shadow-xl rounded-lg ">
              <Link href="/news/news4">
                <img
                  className="rounded-lg"
                  src="../img/banner/bannerwts.png"
                  alt=""
                />
                <h1 className="text-[#1F306A] px-2 pt-2 h-14 text-sm truncate ">
                  หลักสูตร เสาร์-อาทิตย์ เรียนออนไลน์ 100%
                </h1>
                </Link>
              </div>
            </div>

            {/* ปิดคอลั่ม */}
          </div>
        </div>
      </div>

      {/* ปุ่มโหลดเพิ่มเติม 1 */}
      <div className=" py-8 flex justify-center items-center">
        {/* <button className='bg-black bg-opacity-80 text-white rounded-lg  drop-shadow-lg h-12 w-28'>โหลดเพิ่มเติม</button> */}
        <button className="group relative h-12 w-40 overflow-hidden rounded-2xl bg-black bg-opacity-80 text-lg font-bold text-white">
          โหลดเพิ่มเติม
          <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30" />
        </button>
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
      <div className="bg-[#E5E4E2]">
        <div className=" container mx-auto">
          {/* คอลั่ม */}
          <div className="grid grid-cols-2 md:grid-cols-4">
            {/* ข้อมูลในคอลั่ม */}

            <div className="p-5">
              <div className="box-content shadow-xl rounded-lg ">
               <Link href="/news/news5">
                <img
                  className="rounded-lg"
                  src="/img/activity/activity3.jpg"
                  alt=""
                />
                <h1 className="text-[#1F306A] px-2 pt-2 h-14 text-sm truncate ">
                พิธีไหว้ครู และ ปฐมนิเทศนักศึกษา 2565 
                </h1>
                </Link>
              </div>
            </div>

            <div className="p-5">
              <div className="box-content shadow-xl rounded-lg ">
              <Link href="/news/news6">
                <img
                  className="rounded-lg"
                  src="/img/activity/activity2.jpg"
                  alt=""
                />
                <h1 className="text-[#1F306A] px-2 pt-2 h-14 text-sm truncate ">
                กีฬาสัมพันธ์ 2565
                </h1>
                </Link>
              </div>
            </div>

            <div className="p-5">
              <div className="box-content shadow-xl rounded-lg ">
              <Link href="/news/news7">
                <img
                  className="rounded-lg"
                  src="/img/activity/activity1.jpg"
                  alt=""
                />
                <h1 className="text-[#1F306A] px-2 pt-2 h-14 text-sm truncate ">
                พิธีปัจฉิมนิเทศนักศึกษา 2565
                </h1>
                </Link>
              </div>
            </div>

            <div className="p-5">
              <div className="box-content shadow-xl rounded-lg ">
              <Link href="/news/news8">
                <img
                  className="rounded-lg"
                  src="/img/activity/activity4.jpg"
                  alt=""
                />
                <h1 className="text-[#1F306A] px-2 pt-2 h-14 text-sm truncate ">
                พิธีไหว้ครู และ ปฐมนิเทศนักศึกษา 2566 
                </h1>
                </Link>
              </div>
            </div>

            {/* ปิดคอลั่ม */}
          </div>
        </div>
      </div>

      {/* ปุ่มโหลดเพิ่มเติม 2 */}
      <div className=" py-8 flex justify-center items-center">
        <button className="group relative h-12 w-40 overflow-hidden rounded-2xl bg-black bg-opacity-80 text-lg font-bold text-white">
          โหลดเพิ่มเติม
          <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30" />
        </button>
      </div>
      </RootLayout>
  );
}
