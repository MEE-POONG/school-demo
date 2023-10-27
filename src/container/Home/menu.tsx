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
          mirror: true,
        });
      }, []);
    return (
        <div className="container m-auto my-8 flex justify-around flex-wrap">
            <Link href="/register/form" className="p-4 md:max-w-[12rem] w-1/2 flex my-4 justify-center drop-shadow-lg" data-aos="fade-up" data-aos-delay="0"  data-aos-duration="100">
                <Card className="w-full sm:max-w-[10rem] p-4 bg-blue-400 hover:bg-yellow-800">
                    <CardHeader floated={false} shadow={false} color="transparent" className="m-0 rounded-none text-center">
                        <Typography variant="small" color="white" className="font-normal uppercase text-center text-sm sm:text-base md:text-md lg:text-lg xl:text-1xl">
                            สมัครเรียน
                        </Typography>
                        <Typography variant="h1" color="white" className="mt-6 flex justify-center gap-1 text-7xl font-normal">
                            <RiFilePaper2Line className="mx-auto h-[70px] sm:w-30 md:w-48 lg:w-62 xl:w-80" />
                        </Typography>
                    </CardHeader>
                </Card>
            </Link>
            <Link href="/welfare" className="p-4 md:max-w-[12rem] w-1/2 flex my-4 justify-center drop-shadow-lg"  data-aos="fade-up" data-aos-delay="100"  data-aos-duration="100">
                <Card className="w-full sm:max-w-[10rem] p-4 bg-blue-400 hover:bg-yellow-800">
                    <CardHeader floated={false} shadow={false} color="transparent" className="m-0 rounded-none text-center">
                        <Typography variant="small" color="white" className="font-normal uppercase text-center text-sm sm:text-base md:text-md lg:text-lg xl:text-1xl">
                            สวัสดิการ
                        </Typography>
                        <Typography variant="h1" color="white" className="mt-6 flex justify-center gap-1 text-7xl font-normal">
                            <FaMoneyBill className="mx-auto  h-[70px] sm:w-30 md:w-48 lg:w-62 xl:w-80" />
                        </Typography>
                    </CardHeader>
                </Card>
            </Link>
            <Link href="/advisor" className="p-4 md:max-w-[12rem] w-1/2 flex my-4 justify-center drop-shadow-lg"  data-aos="fade-up" data-aos-delay="200"  data-aos-duration="100">
                <Card className="w-full sm:max-w-[10rem] p-4 bg-blue-400 hover:bg-yellow-800">
                    <CardHeader floated={false} shadow={false} color="transparent" className="m-0 rounded-none text-center">
                        <Typography variant="small" color="white" className="font-normal uppercase text-center text-sm sm:text-base md:text-md lg:text-lg xl:text-1xl">
                            ปรึกษาเพิ่มเติม
                        </Typography>
                        <Typography variant="h1" color="white" className="mt-6 flex justify-center gap-1 text-7xl font-normal">
                            <RiGraduationCapLine className="mx-auto  h-[70px] sm:w-30 md:w-48 lg:w-62 xl:w-80" />
                        </Typography>
                    </CardHeader>
                </Card>
            </Link>
            <Link href="/faculty" className="p-4 md:max-w-[12rem] w-1/2 flex my-4 justify-center drop-shadow-lg"  data-aos="fade-up" data-aos-delay="300"  data-aos-duration="100" >
                <Card className="w-full sm:max-w-[10rem] p-4 bg-blue-400 hover:bg-yellow-800">
                    <CardHeader floated={false} shadow={false} color="transparent" className="m-0 rounded-none text-center">
                        <Typography variant="small" color="white" className="font-normal uppercase text-center text-sm sm:text-base md:text-md lg:text-lg xl:text-1xl">
                            คณะที่เปิดสอน
                        </Typography>
                        <Typography variant="h1" color="white" className="mt-6 flex justify-center gap-1 text-7xl font-normal">
                            <FaUserGraduate className="mx-auto  h-[70px] sm:w-30 md:w-48 lg:w-62 xl:w-80" />
                        </Typography>
                    </CardHeader>
                </Card>
            </Link>
        </div>
    );
};