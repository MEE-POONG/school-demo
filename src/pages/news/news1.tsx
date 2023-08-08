import React from 'react';
import RootLayout from '@/components/layout';
import Link from 'next/link';

const NewsArticle: React.FC = () => {
  return (
    <RootLayout>
      <body className="relative">
        <div className="">
          <div className=" p-3">
            <button className="text-2xl font-thin ">
              <i className="fa fa-bars"></i>
            </button>
          </div>
          <div className="w-3/5 p-3">
            <center>
            </center>
          </div>
          
        </div>

        <div className="w-full md:w-3/5 mx-auto">
          <div className="mx-5 my-3 text-sm">
            <Link href="./" className=" font-bold tracking-widest underline">
              กลับ
            </Link>
          </div>
          <div className="w-full text-gray-800 text-4xl px-5 font-bold leading-none py-2">
          พิธีปฐมนิเทศนักศึกษา และ พิธีไหว้ครู 2566</div>
          <p className=' text-end'>2023-06-19</p>
          <img
                  className=""
                  src="/img/news/new1-1.png"
                  alt=""
                />
                <p className=' text-xl py-2'>พิธีปฐมนิเทศนักศึกษา และไหว้ครู ประจำปีการศึกษา 2566 เมื่อวันที่ 19 มิถุนายน 2566 
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

        
      </body>
      </RootLayout>

  );
};

export default NewsArticle;
