import Activityloader from "@/components/Activityloader";
import Newloader from "@/components/Newloader";
import TheLayout from "@/components/TheLayout";

export default function NewsPage() {
  return (
    <TheLayout>
      {/* banner คณะและหลักสูตร */}
      <div className="relative">
        <img src="/img/news/bg-news.png" alt="" className=" w-full filter brightness-50" />
        {/* <div className="absolute inset-0  mb-2 md:mb-24  flex justify-center items-center"> */}
        <div className="absolute inset-x-0 top-[30%]  sm:top-[65%] md:top-[40%] xl:top-[40%]  md:h-40 text-center">
          <h2 className=' text-white text-3xl md:text-4xl lg:text-6xl drop-shadow-xl font-semibold'>ข่าว “พนมวันท์”</h2>
        </div>
        </div>
      {/* </div> */}

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



      </TheLayout>
  );
}
