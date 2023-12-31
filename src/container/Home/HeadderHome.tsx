import { HeadPage } from "@prisma/client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const HeadderHome: React.FC = () => {
    const [headerData, setHeaderData] = useState<HeadPage | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch(`/api/HeadPage`) // Removed the extra slash
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                setHeaderData(data?.[0] || null); // Fallback to null if data[0] is undefined
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error:", error);
                setError(error.message);
                setIsLoading(false);
            });
    }, []);

    return (
        <div className="relative flex h-screen content-center items-center justify-center pt-24">
            <div className="absolute top-0 h-full w-full bg-[url('/img/school/panomtext.png')] bg-fixed bg-center bg-no-repeat bg-cover" />
            <div className="absolute top-0 h-full w-full bg-blue-800/70 bg-cover bg-center " />
            <div className="max-w-8xl container relative mx-auto h-full">
                <div className="py-6 px-4 sm:p-6 md:py-10 md:px-8 w-full h-full flex items-center justify-center">
                    <div className=" mx-auto grid grid-cols-1 lg:gap-x-20 lg:grid-cols-2">
                        <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1 animate-fade-right">
                            <h1 className="mt-1 text-lg xl:text-4xl font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">
                                {headerData?.title}
                            </h1>
                            <p className="mt-64 md:mt-0 text-sm xl:text-2xl leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400">
                                {headerData?.subTitle}
                            </p>
                        </div>
                        <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0 animate-fade-left">
                            <img 
                                src={`https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/${headerData?.imgOne || "4500f404-dbac-40f3-6696-ae768a38e800"}/500`}
                                alt=""
                                className="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full"
                                loading="lazy"
                            />
                            <img
                               src={`https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/${headerData?.imgTwo || "4500f404-dbac-40f3-6696-ae768a38e800"}/350`}
                                alt=""
                                className="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-64"
                                loading="lazy"
                            />
                            <img
                               src={`https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/${headerData?.imgThree || "4500f404-dbac-40f3-6696-ae768a38e800"}/350`}
                                alt=""
                                className="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-64"
                                loading="lazy"
                            />
                        </div>
                        {/* ที่อยู่ */}
                        <dl className="mt-4 text-sm font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2 animate-fade-right">
                            <dt className="sr-only">Location</dt>
                            <dd className="flex items-center text-white">
                                <svg
                                    width="24"
                                    height="24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="mr-1 text-slate-400 dark:text-slate-500"
                                    aria-hidden="true"
                                >
                                    <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
                                    <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                                </svg>
                                Phanomwan, Nakhon Ratchasima
                            </dd>
                        </dl>
                        <div className="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4 text-center lg:text-start animate-fade-right">
                            <Link href={`${headerData?.pathBtn}`}
                                className="bg-yellow-800 hover:bg-yellow-900 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg"
                            >
                                {headerData?.btnTitle}

                            </Link>
                        </div>
                        <p className="mt-4 text-sm  md:text-lg leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400 text-white animate-fade-right">
                            {headerData?.detail}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeadderHome;
