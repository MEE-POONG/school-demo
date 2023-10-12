import TitleText from "@/components/TitleText";
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
  Button,
  CardFooter,
} from "@material-tailwind/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Aos from "aos";
import Slider from "react-slick";
import { News } from "@prisma/client";
import Loading from "@/components/loading";
import { newsMenu } from "@/data/news";


export const NewNews: React.FC = () => {
  const [selectType, setSelectType] = useState("");
  const [newsArray, setNewsArray] = useState<News[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    fetch('/api/news')
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
    console.log(newsArray);

  }, [newsArray]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container m-auto" data-aos="fade-right">
      {isLoading && <Loading />}
      <TitleText titleText={"ข่าว & กิจกรรม"} titleTextTo={"“พนมวันท์”"} />
      <Tabs id="custom-animation" value={selectType}>
        <TabsHeader className="bg-yellow-800 "
          indicatorProps={{
            className: "bg-yellow-800 shadow-none !text-gray-900",
          }}
        >
          {newsMenu.map(({ label, value }) => (
            <Tab key={value} value={value}
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
            {(() => {
              const filteredNews = newsArray?.filter(news => (selectType !== "" ? news.type === selectType : true));
              const displayNews = filteredNews?.length < 4 ? filteredNews.concat(filteredNews) : filteredNews;
              return displayNews?.slice(selectType ? 0 : -10).map(news => (
                <div key={news.id}>
                  <Card className="my-6 w-72 overflow-hidden mx-auto">
                    <CardHeader
                      floated={false}
                      shadow={false}
                      color="transparent"
                      className="m-0 rounded-none"
                    >
                      <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                        alt="ui/ux review check"
                      />
                    </CardHeader>
                    <CardBody>
                      <Typography variant="h6" color="blue-gray" className="title-clamp">
                        {news.title}
                      </Typography>
                      <Typography variant="lead" color="gray" className="mt-3 font-normal text-sm subtitle-clamp">
                        {news.subTitle}
                      </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                      <Link href="#" className="flex w-fit mx-auto items-center bg-blue-400 text-white hover:bg-yellow-800 px-6 py-2 rounded-lg">
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
              ));
            })()}
          </Slider>
        </TabsBody>
      </Tabs>
      <button type="button" className="text-yellow-800 hover:text-yellow-900  text-sm leading-6 font-medium py-2 px-3 rounded-lg ">ดูข่าวทั้งหมด {">>>>"}</button>
    </div>
  );
}