import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
} from "@material-tailwind/react";
import { News } from "@prisma/client";
import Link from "next/link";
import { newsRelations } from "@/data/news";
import React, { useEffect, useState } from "react";

const NewsAll: React.FC = () => {
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
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container">
      <Tabs id="custom-animation" value={selectType} >
        <TabsHeader className="bg-blue-700 text-white flex-wrap md:flex-nowrap justify-center"
          indicatorProps={{
            className: "bg-blue-500 shadow-none !text-gray-900",
          }}
        >
          {newsRelations.map(({ label, value }) => (
            <Tab key={value} value={value}
              className={`font-bold text-white w-1/2 md:w-full`}
              onClick={() => setSelectType(value)}
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody
          className="pb-4 pt-4 bg-white my-8 shadow-lg rounded-xl"
          animate={{
            initial: { y: 250 },
            mount: { y: 0 },
            unmount: { y: 250 },
          }}
        >
          <ul data-aos="fade-up" className="bg-slate-50 p-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 text-sm leading-6">
            {(() => {
              const filteredNews = newsArray.filter(news => news.type === selectType).slice(0, 10);
              const displayNews = filteredNews?.length < 4 ? filteredNews.concat(filteredNews) : filteredNews;
              return displayNews?.slice(selectType ? 0 : -10).map(news => (
                <li key={news?.id} className="flex">
                  <Link href={""} className="hover:border-blue-500 hover:border-solid hover:text-blue-700  hover:bg-blue-100 group w-full flex flex-col px-4 justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium py-3">
                    <div className="flex items-center">
                      <img className="w object-cover mr-4 w-36 h-16"
                        src={`https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/${news?.img || "4500f404-dbac-40f3-6696-ae768a38e800"}/150`}
                        alt={news?.title || "Image Alt Text"}
                      />
                      <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6">{news?.title}</p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">{news?.subTitle}</p>
                      </div>
                    </div>
                  </Link>
                </li>
              ));
            })()}
          </ul>
          <div className="text-center">
            <button
              type="button"
              className="text-yellow-800 hover:text-yellow-900  text-sm leading-6 font-medium py-2 px-3 rounded-lg "
            >ดูข่าวทั้งหมด {">>>>"}
            </button>
          </div>

        </TabsBody>
      </Tabs>

    </div>
  );
};

export default NewsAll;
