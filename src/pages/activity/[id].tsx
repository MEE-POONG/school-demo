import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import RootLayout from '@/components/layout';
import Link from 'next/link';
import Loading from "@/components/loading";


const NewsArticle: React.FC = () => {
  const router = useRouter();
  const { id } = router.query; // ดึงค่า id จาก query parameters

  const [articleData, setArticleData] = useState<any>({}); // กำหนดประเภทของข้อมูลบทความข่าว
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    if (id) {
      fetch(`/api/activitySchool/${id}`)
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
    <RootLayout>
      <div className="relative p-7 md:p-3">
      {isLoading && <Loading />} {/* แสดงหน้าต่าง Loading ถ้า isLoading เป็น true */}
        <div className="w-full md:w-3/5 mx-auto">
          <div className="mx-5 my-3 text-sm">
            <Link href="/news" className=" font-bold tracking-widest underline">
              กลับ
            </Link>
          </div>
          <div className="w-full text-blue-900 text-2xl md:text-4xl px-5 font-bold leading-none py-2">
            {articleData.activityTitle}
          </div>
          <p className="text-end">{articleData.activityDate}</p>
          <img className="" src={`https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/${articleData.activityImg}/public`} alt={articleData.newImg} />
          <p className="text-lg md:text-2xl text-blue-900 py-2">{articleData.activitySubTitle}</p>
          <p>
            {articleData.activityDescription}
          </p>
        </div>
      </div>
    </RootLayout>
  );
};

export default NewsArticle;
