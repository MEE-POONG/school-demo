import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import TheLayout from '@/components/TheLayout';
import Link from 'next/link';
import Loading from '@/components/loading';


const NewsArticle: React.FC = () => {
  const router = useRouter();
  const { id } = router.query; // ดึงค่า id จาก query parameters

  const [articleData, setArticleData] = useState<any>({}); // กำหนดประเภทของข้อมูลบทความข่าว
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    if (id) {
      fetch(`/api/newsSchool/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setArticleData(data); // กำหนดข้อมูลบทความข่าวที่ดึงมา
          //console.log(data);
          setIsLoading(false); // ตั้งค่า isLoading เป็น false เมื่อโหลดเสร็จสมบูรณ์

        })
        .catch((error) => {
          console.error('Error:', error);
          setIsLoading(false); // ตั้งค่า isLoading เป็น false เมื่อโหลดเสร็จสมบูรณ์

        });
    }
  }, [id]);

  return (
    <TheLayout>
      {isLoading && <Loading />} {/* แสดงหน้าต่าง Loading ถ้า isLoading เป็น true */}

      <div className="relative p-7 md:p-3">
        <div className="w-full md:w-3/5 mx-auto mt-5">
          <div className="w-full text-blue-900 text-2xl md:text-4xl px-5 font-bold leading-none py-2">
            {articleData.newTitle}
          </div>
          <p className="text-end text-sm md:text-md lg:text-md xl:text-lg ">{articleData.newDate}</p>
          <img className="" src={`https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/${articleData.newImg}/public`} alt={articleData.newImg} />
          <p className=" mt-5 text-xl md:text-md lg:text-md xl:text-3xl text-blue-900 py-2">{articleData.newSubTitle}</p>
          <p className=' mt-3 mb-10 text-sm md:text-md lg:text-lg xl:text-xl' >
            {articleData.newSubDetail}
          </p>
        </div>
      </div>
    </TheLayout>
  );
};

export default NewsArticle;
