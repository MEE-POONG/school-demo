import Link from "next/link";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { useState, useEffect } from 'react';
import Loading from "@/components/loading";




interface IndexNews {
  id: number;
  activityImg: string;
  activityTitle: string;
  activitySubDetail: string;
  // Add other properties if there are more
}


export default function Activity() {
  const initialVisibleItems = 3;
  const [visibleItems, setVisibleItems] = useState(initialVisibleItems);
  const [activitySchoolData, setIndexNewsData] = useState<IndexNews[]>([]); // Use the defined interface here
  const [isLoading, setIsLoading] = useState(true);
  const handleLoadMore = () => {
    setVisibleItems(visibleItems + 3);
  };

  useEffect(() => {
    fetch('/api/activitySchool')
      .then((response) => response.json())
      .then((data) => {
        setIndexNewsData(data.activitySchool);
        setIsLoading(false); // ตั้งค่า isLoading เป็น false เมื่อโหลดเสร็จสมบูรณ์
      })
      .catch((error) => {
        console.error('Error:', error);
        setIsLoading(false); // ตั้งค่า isLoading เป็น false เมื่อโหลดเสร็จสมบูรณ์
      });
  }, []);


  return (
    <div className="py-5 mb-5">
            {isLoading && <Loading />} {/* แสดงหน้าต่าง Loading ถ้า isLoading เป็น true */}
      <div className=" bg-[#1F306A] p-8 md:h-150 lg:h-190 container mx-auto items-center justify-center mb-5">
        <h1 className=" text-lg md:text-3xl  md:ml-0 py-5 text-center text-yellow-400">
          กิจกรรมที่ผ่านมา
        </h1>
        <div className='flex justify-center'>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          {activitySchoolData.slice(0, visibleItems).map((activitySchool) => (
            <Link key={activitySchool.id} href={`/activity/${activitySchool.id}`} passHref>
            <div key={activitySchool.id} className='block max-w-sm p-1 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 '>
              <img
                className='w-full h-24 object-cover'
                src={`https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/${activitySchool.activityImg ? activitySchool.activityImg : 'f701ce08-7ebe-4af2-c4ec-2b3967392900'}/public`}
                alt='activitySchool image'
              />
              <div className='px-6 py-4 h-24'>
                <div className=' text-base md:text-base lg:text-lg font-bold mb-2'>{activitySchool.activityTitle}</div>
                {/* <p className='text-gray-700 text-base'>{activitySchool.activitySubDetail}</p> */}
              </div>
            </div>
          </Link>
          ))}
          </div>
        </div>
      </div>
      <div className="md:w-full h-0.5 mt-4 bg-gradient-to-r from-blue-900 via-yellow-500 to-blue-900  md:h-150 lg:h-190 container mx-auto items-center justify-center mb-5"></div>

      <div className="text-center min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-1 lg:overflow-visible ">
        <Link
          href="news"
          className=" underline underline-offset-1 middle none center mr-4 rounded-lg bg-blue-900 py-3 px-5 font-sans text-lg font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          อ่านทั้งหมด
        </Link>
      </div>
    </div>
  );
}
