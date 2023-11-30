import TheLayout from "@/components/TheLayout";
import TitleText from "@/components/TitleText";
import Loading from "@/components/loading";
import { News, NewsType } from "@prisma/client";
import { useEffect, useState } from "react";
import Aos from "aos";
import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from "@material-tailwind/react";
import Link from "next/link";

interface Params {
  page: number;
  pageSize: number;
  type: string;
  totalPages: number;
}

export default function NewsPage() {
  const [newsMenu, setNewsMenu] = useState<NewsType[]>([]);
  const [params, setParams] = useState<Params>({
    page: 1,
    pageSize: 10,
    totalPages: 1,
    type: "ข่าว"
  });
  const [newsArray, setNewsArray] = useState<News[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [checkPage, setCheckPage] = useState<Params[]>([]);

  useEffect(() => {
    Aos.init({
      duration: 1000
    });
  }, []);

  useEffect(() => {
    fetch(`/api/newsType`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setNewsMenu(data?.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch(`/api/news/searchALL`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setNewsArray(data?.data);
        setCheckPage(data?.paginationInfo);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  const handleLoadMore = (keyword: string) => {
    const item = checkPage.find(pageItem => pageItem.type === keyword);
    // console.log(item);
    if (item) {
      fetch(`/api/news/searchType?page=${item?.page + 1}&search=${item?.type}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data?.data);
          setNewsArray(prevNewsArray => [...prevNewsArray, ...data?.data]);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error:", error);
          setError(error.message);
          setIsLoading(false);
        });
    } else {
      console.log(item);

      console.error('Item not found or last page reached');
    }
  };


  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <TheLayout>
      {isLoading && <Loading />}
      <div className="container mx-auto py-16">
        <TitleText titleText={"ข่าว & กิจกรรม"} titleTextTo={"“พนมวันท์”"} />
        <Tabs id="custom-animation" value={params?.type}>
          <TabsHeader
            className="bg-blue-700 text-white flex-wrap md:flex-nowrap justify-center"
            indicatorProps={{
              className: "bg-blue-500 shadow-none !text-gray-900"
            }}
          >
            {newsMenu?.map((type) => (
              <Tab
                key={type?.nameTH}
                value={type?.nameTH}
                className="font-bold text-white w-1/2 md:w-full"
                onClick={() => setParams((prevParams) => ({
                  ...prevParams,
                  keyword: type?.nameTH,
                }))}
              >
                {type?.nameTH}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody
            animate={{ initial: { y: 250 }, mount: { y: 0 }, unmount: { y: 250 } }}
          >
            {newsMenu?.map((listType) => (
              <TabPanel
                key={listType?.nameTH}
                value={listType?.nameTH}
                className="pt-4  pb-4  bg-white my-8 shadow-lg rounded-xl"
              >
                <ul className="bg-slate-50 p-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 text-sm leading-6">
                  {newsArray
                    ?.filter((newsItem) => newsItem.type === listType?.nameTH) // Filter newsArray based on listType
                    .map((newsItem) => (
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
                </ul>
                <div className="text-center">
                  {checkPage
                    ?.filter((newsItem) => newsItem.type === listType?.nameTH) // Filter newsArray based on listType
                    .map((newsItem) => (newsItem?.page < newsItem?.totalPages ?
                      <button key={newsItem?.type}
                        className="bg-none text-yellow-800 hover:text-yellow-900 text-sm leading-6 font-medium py-2 px-3 rounded-lg"
                        onClick={() => handleLoadMore(newsItem?.type)}
                      >
                        {"v"} ดูเพิ่มเติม {"v"}
                      </button> : ""
                    ))}
                </div>
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </TheLayout>
  );
}
