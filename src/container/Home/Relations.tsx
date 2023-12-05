import React, { useEffect, useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel
} from "@material-tailwind/react";
import { News as PrismaNews, NewsType as PrismaNewsType } from "@prisma/client";
import Link from "next/link";
import { newsRelations } from "@/data/news";
import TitleText from "@/components/TitleText";
import Aos from "aos";

interface News extends PrismaNews {
}

export const Relations: React.FC = () => {
  const [selectKey, setSelectKey] = useState("กิจกรรม");
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
          className="bg-blue-700 text-white flex-wrap md:flex-nowrap justify-center"
          indicatorProps={{
            className: "bg-blue-500 shadow-none !text-gray-900"
          }}
        >
          {newsRelations?.map((type) => (
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
          className="pt-4  pb-4  bg-white my-8 shadow-lg rounded-xl"
        >
          <>
            <ul className="bg-slate-50 p-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 text-sm leading-6">
              {newsArray?.map((newsItem: any) => (
                <li key={newsItem?.id} className="flex">
                  <Link
                    href={`/news/${newsItem?.id}`}
                    className="hover:border-blue-500 hover:border-solid hover:text-blue-700 hover:bg-blue-100 group w-full flex flex-col px-4 justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium py-3"
                  >
                    <div className="flex items-center">
                      <img
                        className="object-cover mr-4 w-36 h-16"
                        src={`https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/${newsItem?.img ||
                          "4500f404-dbac-40f3-6696-ae768a38e800"
                          }/150`}
                        alt={newsItem?.title || "Image Alt Text"}
                      />
                      <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6">
                          {newsItem?.title}
                        </p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                          {newsItem?.subTitle}
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
              {/* {newsArray?.length < 10 &&
                Array.from({ length: 10 - newsArray.length }, (_, index) => (
                  <li key={index} className="flex">
                    <Link
                      href={`#`}
                      className="hover:border-blue-500 hover:border-solid hover:text-blue-700 hover:bg-blue-100 group w-full flex flex-col px-4 justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium py-3"
                    >
                      <div className="flex items-center">
                        <img
                          className="object-cover mr-4 w-36 h-16"
                          src={`https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/4500f404-dbac-40f3-6696-ae768a38e800/150`}
                          alt={"ข้อมูลรูป" || "Image Alt Text"}
                        />
                        <div className="min-w-0 flex-auto">
                          <p className="text-sm font-semibold leading-6">
                            หัวข้อ
                          </p>
                          <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                            บทย่อ
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>

                ))} */}
            </ul>
            <div className="text-center">
              <Link
                href={"/news"}
                className="text-yellow-800 hover:text-yellow-900 text-sm leading-6 font-medium py-2 px-3 rounded-lg"
              >
                ดูเพิ่มเติม {">>>>"}
              </Link>
            </div>
            {/* </TabPanel> */}
          </>
        </TabsBody>
      </Tabs>
    </div>
  );
};
