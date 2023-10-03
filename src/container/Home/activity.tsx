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
  Tooltip,
  Avatar,
} from "@material-tailwind/react";
import Link from "next/link";
import { useState } from "react";
import Slider from "react-slick";
import { newsArray, newsMenu } from "../../../data/news";

export const Activity: React.FC = () => {
  const [selectType, setSelectType] = useState("");
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div className="container m-auto">
      <TitleText titleText={"ข่าว & กิจกรรม"} titleTextTo={"“พนมวันท์”"} />
      <Tabs id="custom-animation" value={selectType}>
        <TabsHeader className="bg-yellow-800 text-blue-700"
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
          className="py-8"
          animate={{
            initial: { y: 250 },
            mount: { y: 0 },
            unmount: { y: 250 },
          }}
        >
          <Slider {...settings}>
            {(() => {
              const filteredNews = newsArray.filter(news => (selectType !== "" ? news.type === selectType : true));
              const displayNews = filteredNews.length < 3 ? filteredNews.concat(filteredNews) : filteredNews;
              return displayNews.slice(selectType ? 0 : -10).map(news => (
                <div key={news.id}>
                  <Card className="my-6 w-96 overflow-hidden">
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
                      <Typography variant="h4" color="blue-gray">
                        {news.title}
                      </Typography>
                      <Typography variant="lead" color="gray" className="mt-3 font-normal">
                        {news.subTitle}
                      </Typography>
                    </CardBody>
                    <CardFooter className="flex items-center justify-between">
                      <Link href="#" className="inline-block">
                        <Button variant="text" className="flex items-center gap-2 bg-blue-400 hover:text-white hover:bg-yellow-800">
                          Learn More
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
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
              ));
            })()}
          </Slider>
        </TabsBody>
      </Tabs>
    </div>
  );
}