import React from 'react';
import RootLayout from '@/components/layout';
import Link from 'next/link';
import { Head } from 'next/document';

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
          หลักสูตร เสาร์-อาทิตย์ เรียนออนไลน์ 100%</div>
          <p className=' text-end'>2023-07-20</p>
          <img
                  className=""
                  src="/img/banner/bannerwts.png"
                  alt=""
                />
                <p className=' text-lg md:text-2xl text-blue-900 py-2'>วิทยาลัยเทคโนโลยีพนมวันท์ เปิดรับนักศึกษาใหม่ ประจำปีการศึกษา 2566 </p>

                <p>ด่วน!!! ทำงานอยู่ก็เรียนได้ กู้ กยศ.100% มีทีมที่ปรึกษามืออาชีพตลอดหลักสูตร   สนใจสมัครเรียน <Link className=' text-yellow-400' href="">คลิก</Link> </p>


        </div>
        <div className=" p-3">
           </div>
    

        
      </div>
      </RootLayout>

  );
};

export default NewsArticle;
