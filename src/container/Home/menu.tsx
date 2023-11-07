import React, { useEffect } from "react";
import Aos from "aos";
import { Card, CardHeader, Typography } from "@material-tailwind/react";
import Link from "next/link";
import { FaMoneyBill, FaUserGraduate } from "react-icons/fa";
import { RiFilePaper2Line, RiGraduationCapLine } from "react-icons/ri";

export const Menu: React.FC = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      mirror: true
    });
  }, []);
  return (
    <div className="container m-auto my-6 flex justify-around flex-wrap">
      <Link
        href="/applyToStudy"
        className="p-4 w-1/2  md:w-1/4 lg:w-1/6  flex my-2 justify-center drop-shadow-lg"
        data-aos="fade-up"
        data-aos-delay="0"
        data-aos-duration="100"
      >
        <Card className="w-full p-4 bg-blue-400 hover:bg-yellow-800">
          <Typography
            variant="small"
            color="white"
            className="font-normal uppercase text-center text-sm sm:text-base md:text-md lg:text-lg xl:text-1xl"
          >
            สมัครเรียน
          </Typography>
          <Typography
            color="white"
            className="mt-3 flex justify-center gap-1 text-2xl md:text-4xl"
          >
            <RiFilePaper2Line />
          </Typography>
        </Card>
      </Link>
      <Link
        href="/welfare"
        className="p-4 w-1/2  md:w-1/4 lg:w-1/6 flex my-2 justify-center drop-shadow-lg"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="100"
      >
        <Card className="w-full p-4 bg-blue-400 hover:bg-yellow-800">
          <Typography
            variant="small"
            color="white"
            className="font-normal uppercase text-center text-sm sm:text-base md:text-md lg:text-lg xl:text-1xl"
          >
            สวัสดิการ
          </Typography>
          <Typography
            color="white"
            className="mt-3 flex justify-center gap-1 text-2xl md:text-4xl"
          >
            <FaMoneyBill className="" />
          </Typography>
        </Card>
      </Link>
      <Link
        href="/advisor"
        className="p-4 w-1/2  md:w-1/4 lg:w-1/6 flex my-2 justify-center drop-shadow-lg"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="100"
      >
        <Card className="w-full p-4 bg-blue-400 hover:bg-yellow-800">
          <Typography
            variant="small"
            color="white"
            className="font-normal uppercase text-center text-sm sm:text-base md:text-md lg:text-lg xl:text-1xl"
          >
            ปรึกษาเพิ่มเติม
          </Typography>
          <Typography
            color="white"
            className="mt-3 flex justify-center gap-1 text-2xl md:text-4xl"
          >
            <RiGraduationCapLine className="" />
          </Typography>
        </Card>
      </Link>
      <Link
        href="/faculty"
        className="p-4 w-1/2  md:w-1/4 lg:w-1/6 flex my-2 justify-center drop-shadow-lg"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="100"
      >
        <Card className="w-full p-4 bg-blue-400 hover:bg-yellow-800">
          <Typography
            variant="small"
            color="white"
            className="font-normal uppercase text-center text-sm sm:text-base md:text-md lg:text-lg xl:text-1xl"
          >
            คณะที่เปิดสอน
          </Typography>
          <Typography
            color="white"
            className="mt-3 flex justify-center gap-1 text-2xl md:text-4xl"
          >
            <FaUserGraduate className="" />
          </Typography>
        </Card>
      </Link>
    </div>
  );
};
