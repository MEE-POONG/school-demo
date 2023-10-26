import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  CardFooter,
  Slider,
} from "@material-tailwind/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import TheLayout from "@/components/TheLayout";

export default function ShowContentAll() {

  return (
    <TheLayout>
      <div className="container mx-auto mt-24 py-20">
        <h3 className="text-xl md:text-3xl ml-8 md:ml-0">ข่าวประชาสัมพันธ์</h3>
        <div className="flex flex-wrap justify-center md:justify-start">
          <div>
            <Card className="my-6 w-64 md:w-72 overflow-hidden mx-auto">
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
              >
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                  alt="ui/ux review check"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h6" color="blue-gray" className="title-clamp">
                  tt
                </Typography>
                <Typography variant="lead" color="gray" className="mt-3 text-xs md:text-sm subtitle-clamp">
                  dd
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Link href="./ReadNews" className="flex w-fit mx-auto text-xs md:text-sm items-center bg-blue-400 text-white hover:bg-yellow-800 px-6 py-2 rounded-lg">
                  รายละเอียด
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </TheLayout >
  );
}