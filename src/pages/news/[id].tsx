import React, { useEffect, useState } from "react";
import { News } from "@prisma/client";
import { useRouter } from "next/router";
import { AiTwotoneCalendar } from "react-icons/ai";
import { FaHandPointRight } from "react-icons/fa";
import TheLayout from "@/components/TheLayout";


const ReadNews: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const [news, setNews] = useState<News | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`/api/news/${id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data: News) => {
          setNews(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error('Error:', error);
          setError(error.message);
          setIsLoading(false);
        });
    }
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!news) {
    return <div>News not found</div>;
  }

  return (
    <TheLayout>
      <div className="container mx-auto py-16">
        <div className="mt-24 px-5 lg:px-0">
          <h3 className="text-xl md:text-3xl font-semibold">{news.title}</h3>

          <div className="h-0.5 bg-blue-400 w-full my-2 rounded-full"></div>
          <img
            className="w-full h-auto lg:h-[450px] object-cover rounded-md shadow-lg"
            src={`https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/${news.img}/700`}
            width={1024}
            height={100}
            alt="Pictue of News"
          />
          <p className="flex items-center mt-10 text-xs md:text-base">
            <AiTwotoneCalendar /> &nbsp;
            วันที่ :<span className="text-blue-400">&nbsp;5 ตุลาคม 2566</span>
          </p>
          <div className="mt-3 bg-white p-7 shadow-lg rounded-md">
            <div className="text-xs md:text-base indent-8 ">
              {news.detail}
            </div>
            <a href="#" className="text-xs md:text-base flex items-center mt-8">
              <FaHandPointRight className="animate-pulse animate-infinite animate-duration-[900ms] text-amber-800" />
              <span className="ml-2 text-blue-400 hover:underline">ต้องการโหลดรูปภาพ คลิก</span>
            </a>
          </div>

        </div>
      </div>
    </TheLayout>
  );
};

export default ReadNews;
