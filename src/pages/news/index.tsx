import TheLayout from "@/components/TheLayout";
import TitleText from "@/components/TitleText";
import Loading from "@/components/loading";
import { NewsAll } from "@/container/News/NewsAll";
import { News, NewsType } from "@prisma/client";
import { useEffect, useState } from "react";

interface Params {
  page: number;
  pageSize: number;
  keyword: string;
}
type NewsDataByType = {
  [key: string]: {
    pagination: Pagination;
  };
};
type Pagination = {
  page: number;
  pageSize: number;
  totalPages: number;
  type: string;
};

export default function NewsPage() {
  const [newsMenu, setNewsMenu] = useState<NewsType[]>([]);
  const [selectKey, setSelectKey] = useState("");
  const [newsArray, setNewsArray] = useState<News[]>([]);
  const [params, setParams] = useState<Params>({
    page: 1,
    pageSize: 10,
    keyword: ""
  });
  const [checkPage, setCheckPage] = useState<Pagination[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`/api/newsType`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data?.data?.length > 0) {
          setSelectKey(data?.data[0].id);
        }
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
    fetch(
      `/api/newsType/joinNews?page=${params.page}&pageSize=${params.pageSize}&keyword=${params.keyword}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setNewsArray((prevNews) => [...prevNews, ...data?.data]);
        setCheckPage(data?.paginationInfo);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    console.log(params.page);

    if (params.keyword !== "")
      fetch(
        `/api/news/searchTypeID?page=${params.page}&pageSize=${params.pageSize}&keyword=${params.keyword}`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log("88 : ", data);

          setNewsArray((prevNews) => [...prevNews, ...data?.data]);

          setCheckPage((prevCheckPage) => {
            const newPaginationInfo = data?.paginationInfo[0];
            const indexToUpdate = prevCheckPage.findIndex(
              (item) => item.type === newPaginationInfo.type
            );
            if (indexToUpdate !== -1) {
              const updatedCheckPage = [
                ...prevCheckPage.slice(0, indexToUpdate),
                newPaginationInfo,
                ...prevCheckPage.slice(indexToUpdate + 1)
              ];
              return updatedCheckPage;
            }
            return prevCheckPage;
          });
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error:", error);
          setError(error.message);
          setIsLoading(false);
        });
  }, [params.page]);

  useEffect(() => {
    console.log(checkPage);
  }, [checkPage]);

  const handleChangeSelectKey = (select: string) => {
    setSelectKey(select);
  };

  const handleChangekeyword = (search: string, page: number) => {
    setParams((prevParams) => ({
      ...prevParams,
      keyword: search,
      page: page
    }));
  };

  return (
    <TheLayout>
    {isLoading && <Loading />}
      <div className="container mx-auto py-16">
        <TitleText titleText={"ข่าว & กิจกรรม"} titleTextTo={"“พนมวันท์”"} />
        {selectKey && <NewsAll selectKey={selectKey} setSelectKey={handleChangeSelectKey} menu={newsMenu} dataArr={newsArray} setKeyWord={handleChangekeyword} checkPage={checkPage} />}
      </div>
    </TheLayout>
  );
}
