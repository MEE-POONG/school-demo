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
import { useEffect, useState } from "react";
import Slider from "react-slick";
import { News } from "@prisma/client";
import Loading from "@/components/loading";
import { newsRelations } from "../../data/news";


export const Relations: React.FC = () => {
  const [selectType, setSelectType] = useState("Relations");
  const [newsArray, setNewsArray] = useState<News[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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
    <div className="container m-auto">
      {isLoading && <Loading />}
      <TitleText titleText={"ประชาสัมพันธ์"} titleTextTo={""} />
      <Tabs id="custom-animation" value={selectType}>
        <TabsHeader className="bg-blue-700 text-white0"
          indicatorProps={{
            className: "bg-blue-500 shadow-none !text-gray-900",
          }}
        >
          {newsRelations.map(({ label, value }) => (
            <Tab key={value} value={value}
              className={`font-bold text-white `}
              onClick={() => setSelectType(value)}
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody
          className="pb-8 pt-4"
          animate={{
            initial: { y: 250 },
            mount: { y: 0 },
            unmount: { y: 250 },
          }}
        >
          <ul role="list" className="divide-y rounded divide-gray-100 h-[40rem] overflow-y-auto bg-gray-100 ">
            {newsArray.map((list) => (
              <Link href={""}>
                <li key={list?.id} className="flex justify-between py-2 hover:text-yellow-900 hover:bg-blue-100">
                  <div className="flex min-w-0 gap-x-4 mx-4">
                    <div className="min-w-0 flex-auto">
                      <p className="text-sm font-semibold leading-6">{list?.title}</p>
                      <p className="mt-1 truncate text-xs leading-5 text-gray-500">{list?.subTitle}</p>
                    </div>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </TabsBody>
      </Tabs>
    </div>
  );
}