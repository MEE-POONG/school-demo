import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import RootLayout from '@/components/layout';
import Link from 'next/link';

const NewsArticle: React.FC = () => {
  const router = useRouter();
  const { id } = router.query; // ดึงค่า id จาก query parameters

  const [articleData, setArticleData] = useState<any>({}); // กำหนดประเภทของข้อมูลบทความข่าว

  useEffect(() => {
    if (id) {
      fetch(`/api/indexActivity/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setArticleData(data); // กำหนดข้อมูลบทความข่าวที่ดึงมา
          //console.log(data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  }, [id]);

  return (
    <RootLayout>
      <div className="relative p-7 md:p-3">
        <div className="w-full md:w-3/5 mx-auto">
          <div className="mx-5 my-3 text-sm">
            <Link href="/" className=" font-bold tracking-widest underline">
              กลับ
            </Link>
          </div>
          <div className="w-full text-blue-900 text-2xl md:text-4xl px-5 font-bold leading-none py-2">
            {articleData.newTitle}
          </div>
          <p className="text-end">{articleData.publishedDate}</p>
          <img className="" src={articleData.imageUrl} alt={articleData.imageAlt} />
          <p className="text-lg md:text-2xl text-blue-900 py-2">{articleData.content}</p>
          <p>
            ด่วน!!! ทำงานอยู่ก็เรียนได้ กู้ กยศ.100% มีทีมที่ปรึกษามืออาชีพตลอดหลักสูตร สนใจสมัครเรียน{' '}
            <Link className="text-yellow-400" href="">
              คลิก
            </Link>
          </p>
        </div>
      </div>
    </RootLayout>
  );
};

export default NewsArticle;
