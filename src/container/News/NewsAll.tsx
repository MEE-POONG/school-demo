import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { News, NewsType } from '@prisma/client';
import Link from "next/link";
interface NewsAllProps {
  selectKey: string;
  setSelectKey: (key: string) => void; // Define the type of setSelectKey as a function that takes a string and returns void
  setKeyWord: (key: string, page: number) => void; // Define the type of setSelectKey as a function that takes a string and returns void
  menu: NewsType[];
  dataArr: News[];
  checkPage: Pagination[];
}
type Pagination = {
  page: number;
  pageSize: number;
  totalPages: number;
  type: string
}
export const NewsAll: React.FC<NewsAllProps> = ({ selectKey, setSelectKey, menu, dataArr, setKeyWord, checkPage }) => {

  return (
    <Tabs id="custom-animation" value={selectKey} >
      <TabsHeader
        className="bg-blue-700 text-white flex-wrap md:flex-nowrap justify-center"
        indicatorProps={{
          className: "bg-blue-500 shadow-none !text-gray-900",
        }}
      >
        {menu?.map((list) => (
          <Tab
            key={list?.id}
            value={list?.id}
            className="font-bold text-white w-1/2 md:w-full"
            onClick={() => setSelectKey(list?.id)}
          >
            {list?.nameTH}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody animate={{ initial: { y: 250 }, mount: { y: 0 }, unmount: { y: 250 }, }}>
        {menu?.map((listType) => (
          <TabPanel key={listType?.id} value={listType?.id} className="pt-4  pb-4  bg-white my-8 shadow-lg rounded-xl">
            <ul
              className="bg-slate-50 p-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 text-sm leading-6"
            >
              {/* {dataArr?.filter(list => listType?.id === list?.newsTypeId)?.map(list => (
                <li key={list?.id} className="flex">

                  <Link href={`/news/${list?.id}`} className="hover:border-blue-500 hover:border-solid hover:text-blue-700 hover:bg-blue-100 group w-full flex flex-col px-4 justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium py-3">
                    <div className="flex items-center">
                      <img className="object-cover mr-4 w-36 h-16"
                        src={`https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/${list?.img || "4500f404-dbac-40f3-6696-ae768a38e800"}/150`}
                        alt={list?.title || "Image Alt Text"}
                      />
                      <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6">{list?.title} {listType?.id === list?.newsTypeId ? "true" : "false"}</p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">{list?.subTitle}</p>
                      </div>
                    </div>
                  </Link>
                </li>
              ))} */}ss
            </ul>
            {checkPage?.filter(list => listType?.id === list?.type)?.map(list => (
              <div key={list.type} className="text-center">
                <button
                  type="button"
                  //  
                  className={`text-yellow-800 hover:text-yellow-900 text-sm leading-6 font-medium py-2 px-3 rounded-lg  ${list.page === list.totalPages ? 'hidden' : ''}`}
                  onClick={() => setKeyWord(list?.type, (list.page + 1))}
                >
                  ดูเพิ่ม {">>>>"} {list.page + 1}
                </button>
              </div>
            ))}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
};