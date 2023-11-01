import React, { useEffect, useState } from "react";
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
import { News, NewsType } from "@prisma/client";
import Link from "next/link";
import { newsMenu, newsRelations } from "@/data/news";
import Aos from "aos";
import TitleText from "@/components/TitleText";
import Slider from "react-slick";

interface Params {
  page: number
  pageSize: number
  keyword: string
  newsTypeId: string
}

// const repeatDataUntilMinLength = (data: any, minLength: number) => {
//   let result = [...data];
//   while (result.length < minLength) {
//     result = result.concat(data);
//   }
//   return result;
// };


export const NewNews: React.FC = () => {
  const [newsMenu, setNewsMenu] = useState<NewsType[]>([]);
  const [params, setParams] = useState<Params>({
    page: 1,
    pageSize: 10,
    keyword: '',
    newsTypeId: ''
  })
  const [checkTotal, setCheckTotal] = useState(0);
  const [newsArray, setNewsArray] = useState<News[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    fetch('/api/newsType')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setNewsMenu(data?.newsType);
        setParams(prevParams => ({
          ...prevParams,
          newsTypeId: data?.newsType[0]?.id
        }));
        setCheckTotal(data?.pagination?.total)
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch(`/api/newsType/search?page=${params.page}&pageSize=${params.pageSize}&keyword=${params.keyword}&newsTypeId=${params.newsTypeId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log("data : ", data);

        setNewsArray(data?.newsData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setError(error.message);
        setIsLoading(false);
      });
  }, [params]);

  useEffect(() => {
    console.log("newsArray : ", newsArray);
  }, [newsArray])

  const handleSeeMore = () => {
    setParams(prevParams => ({
      ...prevParams,
      pageSize: prevParams.pageSize + 10,
    }));
  };

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

  // const newsToDisplay = repeatDataUntilMinLength(newsArray, 4);


  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container m-auto">
      <TitleText titleText={"ข่าวสาร "} titleTextTo={"“พนมวันท์”"} />
      <Tabs id="custom-animation" value={params.newsTypeId} >
        <TabsHeader
          className="bg-yellow-800 "
          indicatorProps={{
            className: "bg-yellow-800 shadow-none ",
          }}
        >
          {newsMenu?.filter(type => type?.nameEN === "News" || type?.nameEN === "Relations")?.map((type) => (
            <Tab
              key={type?.id}
              value={type?.id}
              className="font-bold text-white w-1/2 md:w-full"
              onClick={() => setParams(prevParams => ({
                ...prevParams,
                newsTypeId: type?.id
              }))}
            >
              {type?.nameTH}
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
          <Slider {...settings}
             swipeToSlide={true}
             focusOnSelect={true}

          >
            {newsArray.map((list) => (
              <div key={list?.id} >
                <Card className="my-6 w-72 overflow-hidden mx-auto">
                  <CardHeader floated={false} shadow={false} color="transparent" className="m-0 rounded-none">
                    <img className="h-48 object-cover"
                      src={`https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/${list?.img || "4500f404-dbac-40f3-6696-ae768a38e800"}/150`}
                      alt={list?.title || "Image Alt Text"}
                    />
                  </CardHeader>
                  <CardBody>
                    <Typography variant="h6" color="blue-gray" className="title-clamp text-xs md:text-base">
                      {list?.title}
                    </Typography>
                    <Typography variant="lead" color="gray" className="mt-3 font-normal text-xs md:text-base subtitle-clamp">
                      {list?.subTitle}
                    </Typography>
                  </CardBody>
                  <CardFooter className="pt-0">
                    <Link href={`/news/${list?.id}`}
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
            {newsArray?.length < 4 ?
              newsArray.map((list) => (
                <div key={list?.id} >
                  <Card className="my-6 w-72 overflow-hidden mx-auto">
                    <CardHeader floated={false} shadow={false} color="transparent" className="m-0 rounded-none">
                      <img className="h-48 object-cover"
                        src={`https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/${list?.img || "4500f404-dbac-40f3-6696-ae768a38e800"}/150`}
                        alt={list?.title || "Image Alt Text"}
                      />
                    </CardHeader>
                    <CardBody>
                      <Typography variant="h6" color="blue-gray" className="title-clamp text-xs md:text-base">
                        {list?.title}
                      </Typography>
                      <Typography variant="lead" color="gray" className="mt-3 font-normal text-xs md:text-base subtitle-clamp">
                        {list?.subTitle}
                      </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                      <Link href={`/news/${list?.id}`}
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
              )) :
              ""
            }
          </Slider>
        </TabsBody>
      </Tabs>

    </div>
  );
};