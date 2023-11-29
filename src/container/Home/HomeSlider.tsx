import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { News } from "@prisma/client";
import { useRouter } from 'next/router';

export const HomeSlider: React.FC = () => {
  const [newsArray, setNewsArray] = useState<News[]>([]);
  const [mouseDownPos, setMouseDownPos] = useState({ x: 0, y: 0 });
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLImageElement>) => {
    setMouseDownPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = (newsId: string, e: React.MouseEvent<HTMLImageElement>) => {
    if (Math.abs(mouseDownPos.x - e.clientX) < 5 && Math.abs(mouseDownPos.y - e.clientY) < 5) {
      router.push(`/news/${newsId}`);
    }
  };
  useEffect(() => {
    fetch(`/api/news/promoteimg`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setNewsArray(data?.newsData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="container mx-auto drop-shadow-xl">
      <Slider {...settings} className="no-slick-arrow">
        {newsArray.map((news) => (
          <div key={news.id}>
            <div className="w-full aspect-[21/9] ">
              <img
                onDragStart={(e) => e.preventDefault()}
                onMouseDown={handleMouseDown}
                onMouseUp={(e) => handleMouseUp(news.id, e)}
                className="w-full h-full rounded-md object-cover"
                src={`https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/${news.promoteImg}/700`}
                alt=""
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
