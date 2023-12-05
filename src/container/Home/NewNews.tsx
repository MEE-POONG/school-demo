import React, { useEffect, useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Card,
  CardHeader,
  CardBody,
  Typography,
  CardFooter
} from "@material-tailwind/react";
import { News as PrismaNews, NewsType as PrismaNewsType } from "@prisma/client";
import Link from "next/link";
import { newsMenu } from "@/data/news";
import Aos from "aos";
import TitleText from "@/components/TitleText";
import Slider from "react-slick";

interface News extends PrismaNews {
}

export const NewNews: React.FC = () => {
  const [selectKey, setSelectKey] = useState("ข่าว");
  const [newsArray, setNewsArray] = useState<News[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Aos.init({
      duration: 1000
    });
  }, []);

  useEffect(() => {
    fetch(`/api/news/searchType?search=${selectKey}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setNewsArray(data?.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setError(error.message);
        setIsLoading(false);
      });
  }, [selectKey]);

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
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container m-auto">
      <TitleText titleText={"ข่าว & กิจกรรม"} titleTextTo={"“พนมวันท์”"} />
      <Tabs id="custom-animation" value={selectKey}>
        <TabsHeader
          className="bg-yellow-800 "
          indicatorProps={{
            className: "bg-yellow-800 shadow-none "
          }}
        >
          {newsMenu?.map((type) => (
            <Tab
              key={type?.nameEN}
              value={type?.nameTH}
              className="font-bold text-white w-1/2 md:w-full"
              onClick={() => setSelectKey(type?.nameTH)}
            >
              {type?.nameTH}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody
          animate={{
            initial: { y: 250 },
            mount: { y: 0 },
            unmount: { y: 250 }
          }}
        >
          <Slider {...settings} swipeToSlide={true} focusOnSelect={true}>
            {newsArray?.map((newsItem: any) => (
              <div key={newsItem?.id}>
                <Card className="my-6 w-72 overflow-hidden mx-auto">
                  <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="m-0 rounded-none"
                  >
                    <img
                      className="h-48 object-cover"
                      src={`https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/${newsItem?.img ||
                        "4500f404-dbac-40f3-6696-ae768a38e800"
                        }/350`}
                      alt={newsItem?.title || "Image Alt Text"}
                    />
                  </CardHeader>
                  <CardBody>
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="title-clamp text-xs md:text-base"
                    >
                      {newsItem?.title}
                    </Typography>
                    <Typography
                      variant="lead"
                      color="gray"
                      className="mt-3 font-normal text-xs md:text-base subtitle-clamp"
                    >
                      {newsItem?.subTitle}
                    </Typography>
                  </CardBody>
                  <CardFooter className="pt-0">
                    <Link
                      href={`/news/${newsItem?.id}`}
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
            {/* {newsArray?.length < 4 &&
              Array.from({ length: 4 - newsArray.length }, (_, index) => (
                <div key={index}>
                  <Card className="my-6 w-72 overflow-hidden mx-auto">
                    <CardHeader
                      floated={false}
                      shadow={false}
                      color="transparent"
                      className="m-0 rounded-none"
                    >
                      <img
                        className="h-48 object-cover w-full"
                        src={`https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/4500f404-dbac-40f3-6696-ae768a38e800/350`}
                        alt={"หัวข้อ" || "Image Alt Text"}
                      />
                    </CardHeader>
                    <CardBody>
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="title-clamp text-xs md:text-base"
                      >
                        หัวข้อ
                      </Typography>
                      <Typography
                        variant="lead"
                        color="gray"
                        className="mt-3 font-normal text-xs md:text-base subtitle-clamp"
                      >
                        เนื้อหา
                      </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                      <Link
                        href={`#`}
                        className="flex w-fit mx-auto items-center bg-gray-800 text-white px-6 py-2 rounded-lg text-xs md:text-base"
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
              ))
            } */}
          </Slider>
        </TabsBody>
      </Tabs>

    </div>
  );
};
