import TitleText from "@/components/TitleText";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  Card,
  CardHeader,
  CardBody,
  Typography,
  CardFooter,
} from "@material-tailwind/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Aos from "aos";
import Slider from 'react-slick';
import { News } from "@prisma/client";
import Loading from "@/components/loading";
import { newsMenu } from "@/data/news";

export const NewNews: React.FC = () => {
  const [selectType, setSelectType] = useState(newsMenu[0]?.value);
  const [newsArray, setNewsArray] = useState<News[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    fetch(`/api/news/search?page=1&pageSize=10&keyword=${selectType}`)
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

  useEffect(() => {
    fetch(`/api/news/search?page=1&pageSize=10&keyword=${selectType}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setNewsArray(data?.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setError(error.message);
        setIsLoading(false);
      });

  }, [selectType]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container m-auto">
      {isLoading && <Loading />}
      <TitleText titleText={"ข่าว & กิจกรรม"} titleTextTo={"“พนมวันท์”"} />
      <Tabs id="custom-animation" value={selectType} data-aos="fade-right">
        <TabsHeader className="bg-yellow-800 "
          indicatorProps={{
            className: "bg-yellow-800 shadow-none ",
          }}
        >
          {newsMenu.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              className={`font-bold text-white `}
              onClick={() => setSelectType(value)}
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody
          animate={{
            initial: { y: 250 },
            mount: { y: 0 },
            unmount: { y: 250 },
          }}
        >
          <Slider {...settings}>
            {newsArray?.map((news) => (
              <div key={news?.id} >
                <Card className="my-6 w-72 overflow-hidden mx-auto">
                  <CardHeader floated={false} shadow={false} color="transparent" className="m-0 rounded-none">
                    <img className="h-48 object-cover"
                      src={`https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/${news?.img || "4500f404-dbac-40f3-6696-ae768a38e800"}/700`}
                      alt={news?.title || "Image Alt Text"}
                    />
                  </CardHeader>
                  <CardBody>
                    <Typography variant="h6" color="blue-gray" className="title-clamp text-xs md:text-base">
                      {news?.title}
                    </Typography>
                    <Typography variant="lead" color="gray" className="mt-3 font-normal text-xs md:text-base subtitle-clamp">
                      {news?.subTitle}
                    </Typography>
                  </CardBody>
                  <CardFooter className="pt-0">
                    <Link href={`/news/${news.id}`}
                      className="flex w-fit mx-auto items-center bg-blue-400 text-white hover:bg-yellow-800 px-6 py-2 rounded-lg text-xs md:text-base"
                    >
                      รายละเอียด
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </Slider>
        </TabsBody>
      </Tabs>
      <button type="button" className="text-yellow-800 hover:text-yellow-900  text-sm leading-6 font-medium py-2 px-3 rounded-lg ">
        <Link href="./news">ดูข่าวทั้งหมด {">>>>"}</Link>
      </button>
    </div>
  );
}