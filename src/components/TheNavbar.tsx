import React, { useState, useEffect } from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse
} from "@material-tailwind/react";
import Image from "next/image";
import { navbarArray } from "../data/navbar";
import Link from "next/link";

const TheNavbar: React.FC = () => {
  const [openNav, setOpenNav] = useState<boolean>(false);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col lg:mb-0 lg:mt-0 lg:flex-row items-center ">
      {navbarArray.map((item) => {
        if (item.children) {
          return (
            <Typography
              key={item.name}
              as="li"
              variant="small"
              color="blue-gray"
              className=" relative group text-md"
            >
              <button className="flex text-white xl:text-lg items-center text-md px-3 py-2">
                {item.name}
              </button>
              <ul className="absolute w-full left-0 mt-2 bg-white py-1 border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {item.children.map((child) => (
                  <Typography
                    key={child.name}
                    as="li"
                    variant="small"
                    color="blue-gray"
                    className=" "
                  >
                    <a
                      href={child.link}
                      className="flex justify-center text-md xl:text-lg hover:bg-blue-500 hover:text-white"
                    >
                      {child.name}
                    </a>
                  </Typography>
                ))}
              </ul>
            </Typography>
          );
        } else {
          return (
            <Typography
              key={item.name}
              as="li"
              variant="small"
              color="blue-gray"
              className=""
            >
              <a
                href={item.link}
                className="flex text-white items-center text-md xl:text-lg px-3 py-2"
              >
                {item.name}
              </a>
            </Typography>
          );
        }
      })}
    </ul>
  );

  return (
    <Navbar
      className={`font-kanit fixed top-0 z-50 h-max max-w-full border-0 transition-all duration-200 ease-in-out animate-fade-down bg-blue-500/70	${
        !isScrolling ? "bg-gradient-to-r from-blue-500 to-blue-700" : ""
      } rounded-none px-4 py-2 lg:px-8 lg:py-2`}
    >
      <div className="flex items-center justify-between">
        <Typography
          as="a"
          href="/"
          className="mr-4 cursor-pointer font-medium flex flex-row items-center"
        >
          <Image
            src="/img/Logo_panomwan.png"
            width={isScrolling && window.innerWidth >= 1024 ? 50 : 100}
            height={isScrolling && window.innerWidth >= 1024 ? 50 : 100}
            className={`transition-all duration-300 ${
              isScrolling && window.innerWidth >= 1024
                ? "w-[60px]"
                : "w-[65px] md:w-[80px]"
            }`}
            alt=""
          />
          <div className="text-white ml-4">
            <p className="text-sm md:text-lg">วิทยาลัยเทคโนโลยีพนมวันท์</p>
            <div className=" bg-white h-[2px] sm/w-[300px]" />
            <p className="text-[10px] mt-0.5 md:text-sm">
              Phanomwan College of Technology
            </p>
          </div>
        </Typography>
        <div className="flex items-center gap-4">
          <div className="hidden lg:block">{navList}</div>
          <Button
            variant="gradient"
            size="sm"
            className="hidden lg:inline-block bg-gradient-to-r from-blue-500 to-green-400 hover:from-green-400 hover:to-yellow-400 text-md"
          >
            <Link href="/applyToStudy">สมัครเรียน</Link>
          </Button>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden text-white"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav} className="text-center">
        {navList}
        <Button
          variant="gradient"
          size="sm"
          fullWidth
          className="mb-2 text-md bg-gradient-to-r from-blue-500 to-green-400 hover:from-green-400 hover:to-yellow-400 text-md"
        >
          <Link href="/applyToStudy">สมัครเรียน</Link>
        </Button>
      </Collapse>
    </Navbar>
  );
};

export default TheNavbar;
