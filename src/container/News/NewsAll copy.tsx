import React, { useEffect, useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { News as PrismaNews, NewsType as PrismaNewsType } from '@prisma/client';
import Link from "next/link";
import TitleText from "@/components/TitleText";

interface News extends PrismaNews {
  map(arg0: (newsItem: any) => React.JSX.Element): React.ReactNode;
}

interface NewsType extends PrismaNewsType {
  News: News;
}
interface Params {
  page: number
  pageSize: number
  keyword: string
}

export const NewsAll: React.FC = () => {
  const [newsMenu, setNewsMenu] = useState<NewsType[]>([]);
  const [selectKey, setSelectKey] = useState('News');
  const [newsArray, setNewsArray] = useState<News[]>([]);
  const [params, setParams] = useState<Params>({
    page: 1,
    pageSize: 10,
    keyword: ''
  })
  const [checkTotal, setCheckTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`/api/newsType`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setNewsMenu(data?.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    fetch(`/api/news/showPage?page=${params.page}&pageSize=${params.pageSize}&keyword=${params.keyword}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        
        // setNewsArray(prevNews => [...prevNews, ...data.data]);
        setCheckTotal(data?.pagination.total);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, [params]);

  useEffect(() => {
    console.log("76 : ", newsArray);
  }, [newsArray]);

  const handleSeeMore = () => {
    setParams(prevParams => ({
      ...prevParams,
      page: prevParams.page + 1,
    }));
  };


  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  return (
    <div className="container m-auto">
      <TitleText titleText={"ข่าว & กิจกรรม"} titleTextTo={"“พนมวันท์”"} />
      <Tabs id="custom-animation" value={selectKey} >
        <TabsHeader
          className="bg-blue-700 text-white flex-wrap md:flex-nowrap justify-center"
          indicatorProps={{
            className: "bg-blue-500 shadow-none !text-gray-900",
          }}
        >
          {newsMenu?.map((type) => (
            <Tab
              key={type?.nameEN}
              value={type?.nameEN}
              className="font-bold text-white w-1/2 md:w-full"
              onClick={() => setSelectKey(type?.nameEN)}
            >
              {type?.nameTH}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody animate={{ initial: { y: 250 }, mount: { y: 0 }, unmount: { y: 250 }, }}>
          {newsMenu?.map((listType) => (
            <TabPanel key={listType?.nameEN} value={listType?.nameEN} className="pt-4  pb-4  bg-white my-8 shadow-lg rounded-xl">
              <ul
                className="bg-slate-50 p-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 text-sm leading-6"
              >
                {/* {newsArray?.filter(list => listType?.id === list?.newsTypeId)?.map(list => (
                  <li key={list?.id} className="flex">
                
                    <Link href={`/news/${list?.id}`} className="hover:border-blue-500 hover:border-solid hover:text-blue-700 hover:bg-blue-100 group w-full flex flex-col px-4 justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium py-3">
                      <div className="flex items-center">
                        <img className="object-cover mr-4 w-36 h-16"
                          src={`https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/${list?.img || "4500f404-dbac-40f3-6696-ae768a38e800"}/150`}
                          alt={list?.title || "Image Alt Text"}
                        />
                        <div className="min-w-0 flex-auto">
                          <p className="text-sm font-semibold leading-6">{list?.title}</p>
                          <p className="mt-1 truncate text-xs leading-5 text-gray-500">{list?.subTitle}</p>
                        </div>
                      </div>
                    </Link>

                  </li>
                ))} */}
                ss
              </ul>
              <div className="text-center">
                <button
                  type="button"
                  className={`text-yellow-800 hover:text-yellow-900 text-sm leading-6 font-medium py-2 px-3 rounded-lg ${checkTotal === params?.page ? 'hidden' : ''}`}
                  onClick={handleSeeMore}  // Add the onClick handler here
                >
                  ดูเพิ่ม {">>>>"}
                </button>
              </div>
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>

    </div>
  );
};