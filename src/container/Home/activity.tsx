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
import { useState } from "react";
import Slider from "react-slick";
import { newsArray, newsMenu } from "../../../data/news";

export const Activity: React.FC = () => {
  const [selectType, setSelectType] = useState("");
  const settings = {
    dots: true,
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
                  <Card className="m-4 ">
                    <CardHeader color="blue-gray" className="relative h-56">
                      <img src={news.img} alt="card-image" />
                    </CardHeader>
                    <CardBody>
                      <Typography variant="h5" color="blue-gray" className="mb-2">
                        {news.title}
                      </Typography>
                      <Typography>{news.detail}</Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                      <Button>Read More</Button>
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