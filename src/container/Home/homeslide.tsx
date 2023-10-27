import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { News } from "@prisma/client";
import Link from "next/link";

const HomeSlider = () => {
  const [newsArray, setNewsArray] = useState<News[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`/api/news`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setNewsArray(data?.newsData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
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
    dots: true,
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
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto">
      <Slider {...settings}>
        {newsArray
          .filter((news) => news.promoteImg) // กรองข่าวที่มีภาพ promteImg ไม่ว่าง
          .map((news) => (
            <div key={news.id}>
              <Link href={'${news.id}'}>
              <img
                className="w-[1800px] h-[600px] object-cover"
                src={`https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/${
                  news.promoteImg
                }/700`}
                alt=""
              />
              </Link>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default HomeSlider;
