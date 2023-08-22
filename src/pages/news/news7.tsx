import React from 'react';
import RootLayout from '@/components/layout';
import Link from 'next/link';

const NewsArticle: React.FC = () => {
  return (
    <RootLayout>
      
      <div className="relative p-7 md:p-3">
       
          <div className=" p-3 ">
           
        
          
        </div>

        <div className="w-full md:w-3/5 mx-auto">
          <div className="mx-5 my-3 text-sm">
            <Link href="./" className=" font-bold tracking-widest underline">
              กลับ
            </Link>
          </div>
          <div className="w-full text-blue-900 text-2xl md:text-4xl px-5 font-bold leading-none py-2">
          พิธีปฐมนิเทศนักศึกษา และ พิธีไหว้ครู 2566</div>
          <p className=' text-end'>2023-06-19</p>
          <img
                  className=""
                  src="/img/activity/activity1.jpg"
                  alt=""
                />
                <p className=' text-lg md:text-xl py-2'>พิธีปฐมนิเทศนักศึกษา และไหว้ครู ประจำปีการศึกษา 2566 เมื่อวันที่ 19 มิถุนายน 2566 
ณ หอประชุม ศรีพนมวันท์ วิทยาลัยเทคโนโลยีพนมวันท์</p>

<img
                  className=""
                  src="/img/news/new1-2.png"
                  alt=""
                />
                 <img
                  className=" py-2 mb-32"
                  src="/img/news/new1-3.png"
                  alt=""
                />


          


        </div>

        
      </div>
      </RootLayout>

  );
};

export default NewsArticle;
