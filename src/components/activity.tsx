import Link from "next/link";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { useState, useEffect } from 'react';




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
  const [indexActivityData, setIndexNewsData] = useState<IndexNews[]>([]); // Use the defined interface here
  const handleLoadMore = () => {
    setVisibleItems(visibleItems + 3);
  };

  useEffect(() => {
    fetch('/api/indexActivity')
      .then((response) => response.json())
      .then((data) => {
        setIndexNewsData(data.indexActivity);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);


  return (
    <div className="py-5 mb-5">
      <div className=" bg-[#1F306A] p-8 md:h-150 lg:h-190 container mx-auto items-center justify-center mb-5">
        <h1 className=" text-lg md:text-3xl  md:ml-0 py-5 text-center text-yellow-400">
          กิจกรรมที่ผ่านมา
        </h1>
        <div className='flex justify-center'>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            {indexActivityData.slice(0, visibleItems).map((indexActivity) => (
              <Link key={indexActivity.id} href={`/activity/${indexActivity.id}`} passHref>
                <div key={indexActivity.id} className='block max-w-sm p-1 bg-gray-50 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
                  <img
                    className='w-full'
                    src={`https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/${indexActivity.activityImg}/public`}
                    alt='indexActivity image'
                  />
                  <div className='px-6 py-4'>
                    <div className='font-bold text-xl mb-2'>{indexActivity.activityTitle}</div>
                    <p className='text-gray-700 text-base'>{indexActivity.activitySubDetail}</p>
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
