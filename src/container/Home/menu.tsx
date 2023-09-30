import { Card, CardHeader, Typography } from "@material-tailwind/react";
import Link from "next/link";
import { FaMoneyBill, FaUserGraduate } from "react-icons/fa";
import { RiFilePaper2Line, RiGraduationCapLine } from "react-icons/ri";

export default function Menu() {
    return (
        <div className="py-8 my-8 sm:py-4 flex justify-between">
            <Link href="/register/form" className="m-auto">
                <Card color="blue" variant="gradient" className="w-full max-w-[12rem] md:max-w-[10rem] sm:max-w-[8rem] p-4">
                    <CardHeader floated={false} shadow={false} color="transparent" className="m-0 rounded-none text-center">
                        <Typography variant="small" color="white" className="font-normal uppercase text-center text-sm sm:text-base md:text-md lg:text-lg xl:text-1xl">
                            สมัครเรียน
                        </Typography>
                        <Typography variant="h1" color="white" className="mt-6 flex justify-center gap-1 text-7xl font-normal">
                            <RiFilePaper2Line className="mx-auto h-[70px] w-10 sm:w-30 md:w-48 lg:w-62 xl:w-80" />
                        </Typography>
                    </CardHeader>
                </Card>
            </Link>
            <Link href="/welfare" className="m-auto">
                <Card color="blue" variant="gradient" className="w-full max-w-[12rem] md:max-w-[10rem] sm:max-w-[8rem] p-4">
                    <CardHeader floated={false} shadow={false} color="transparent" className="m-0 rounded-none text-center">
                        <Typography variant="small" color="white" className="font-normal uppercase text-center text-sm sm:text-base md:text-md lg:text-lg xl:text-1xl">
                            สวัสดิการ
                        </Typography>
                        <Typography variant="h1" color="white" className="mt-6 flex justify-center gap-1 text-7xl font-normal">
                            <FaMoneyBill className="mx-auto  h-[70px] w-10 sm:w-30 md:w-48 lg:w-62 xl:w-80" />
                        </Typography>
                    </CardHeader>
                </Card>
            </Link>
            <Link href="/advisor" className="m-auto">
                <Card color="blue" variant="gradient" className="w-full max-w-[12rem] md:max-w-[10rem] sm:max-w-[8rem] p-4">
                    <CardHeader floated={false} shadow={false} color="transparent" className="m-0 rounded-none text-center">
                        <Typography variant="small" color="white" className="font-normal uppercase text-center text-sm sm:text-base md:text-md lg:text-lg xl:text-1xl">
                            ปรึกษาเพิ่มเติม
                        </Typography>
                        <Typography variant="h1" color="white" className="mt-6 flex justify-center gap-1 text-7xl font-normal">
                            <RiGraduationCapLine className="mx-auto  h-[70px] w-10 sm:w-30 md:w-48 lg:w-62 xl:w-80" />
                        </Typography>
                    </CardHeader>
                </Card>
            </Link>
            <Link href="/faculty" className="m-auto">
                <Card color="blue" variant="gradient" className="w-full max-w-[12rem] md:max-w-[10rem] sm:max-w-[8rem] p-4">
                    <CardHeader floated={false} shadow={false} color="transparent" className="m-0 rounded-none text-center">
                        <Typography variant="small" color="white" className="font-normal uppercase text-center text-sm sm:text-base md:text-md lg:text-lg xl:text-1xl">
                            คณะที่เปิดสอน
                        </Typography>
                        <Typography variant="h1" color="white" className="mt-6 flex justify-center gap-1 text-7xl font-normal">
                            <FaUserGraduate className="mx-auto  h-[70px] w-10 sm:w-30 md:w-48 lg:w-62 xl:w-80" />
                        </Typography>
                    </CardHeader>
                </Card>
            </Link>
        </div>
    );
};