import AppContextData, { AppContextDataProps } from "@/context";
import Link from "next/link";
import React, { useContext } from "react";

const TheFooter: React.FC = () => {
  const context: any = useContext<AppContextDataProps>(AppContextData);

  return (
    <footer className="bg-blue-500 w-full">
      <div className="container mx-auto p-7 lg:flex lg:justify-between items-center ">
        <div className="md:flex">
          <Link href="./">
            <img
              src="/img/Logo_panomwan.png"
              className="h-[60px] md:h-[100px] mr-3"
              alt="Flowbite Logo"
            />
          </Link>
          <span className="self-center text-xs md:text-base font-medium text-white">
            <p>PHANOMWAN COLLEGE OF TECHNOLOGY</p>
            <hr className="md:w-full h-[1px] lg:w-[400px] xl:w-full bg-white my-1" />
            <p>{`${context?.contactData?.addressOne} ${context?.contactData?.addressTwo} ${context?.contactData?.addressThree} ค.${context?.contactData?.subDistrict} อ.${context?.contactData?.district} จ.${context?.contactData?.province} ${context?.contactData?.zipcode}`}</p>
            <p>TEL : {context?.contactData?.tel} &nbsp;FAX : {context?.contactData?.fax}</p>
          </span>
        </div>

        <div className="mt-5 md:flex justify-around gap-16">
          <div className="">
            <h4 className="md:mb-3 text-sm md:text-base md:font-semibold text-white">
              คณะที่เปิดสอน
            </h4>
            <div className="bg-white w-full h-[0.25px] md:hidden mb-1"></div>
            <ul className="text-white text-xs md:text-sm">
              <li className="mb-1">คณะบริหารธรุกิจ</li>
              <li className="mb-1">คณะวิทยาศาสตร์และเทคโนโลยี</li>
              <li className="mb-1">คณะวิทยาศาสตร์</li>
              <li>คณะศิลปศาสตร์</li>
            </ul>
          </div>

          <div className="mt-5 md:mt-0">
            <h4 className=" md:mb-3 text-sm md:text-base md:font-semibold text-white">
              รายการ
            </h4>
            <div className="bg-white w-full h-[0.25px] md:hidden mb-1"></div>
            <ul className="text-white text-xs md:text-sm">
              <li className="mb-1">
                <Link href="/applyToStudy" className="hover:underline ">
                  สมัครเรียน
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/advisor" className="hover:underline ">
                  ปรึกษาเรื่องสมัครเรียน
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className=" bg-black w-full p-2">
        <div className=" text-white text-center text-[12px] md:text-xs">
          © 2023&nbsp;
          <Link href="" className="hover:underline hover:text-amber-400">
            Me Prompt Technology COMPANY LIMITED.
          </Link>
          &nbsp;All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default TheFooter;
