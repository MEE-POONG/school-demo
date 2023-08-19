import React, { useState } from 'react';
import Link from 'next/link';

export default function Welfare() {
  const [showAdditionalNews, setShowAdditionalNews] = useState(false);

  const handleLoadMoreClick = () => {
    setShowAdditionalNews(true);
  };

  return (
    <div>
    {/* ส่วนอื่น ๆ ของโค้ดที่คุณมีอยู่ */}
    
    {/* แสดงข่าวเพิ่มเติมเมื่อปุ่มถูกคลิก */}
    {showAdditionalNews && (
      <div className="bg-[#E5E4E2]">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {/* ข้อมูลในคอลั่มเพิ่มเติม */}
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

            {/* ข้อมูลอื่น ๆ ในคอลั่มเพิ่มเติม... */}
          </div>
        </div>
      </div>
    )}

    {/* ปุ่มโหลดเพิ่มเติม */}
    {!showAdditionalNews && (
      <div className="py-8 flex justify-center items-center">
        <button
          onClick={handleLoadMoreClick}
          className="group relative h-12 w-40 overflow-hidden rounded-2xl bg-black bg-opacity-80 text-lg font-bold text-white"
        >
          โหลดเพิ่มเติม
          <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30" />
        </button>
      </div>
    )}
    </div>

    
  );
}
