import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#1F306A] h-[130px] font-fontTH">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center mt-[5%]">
            <div className="flex-shrink-0 mt-[]">
              {/* Your logo or brand */}
              <Link href="/">
                <img
                  className="h-[70px] mr-3"
                  src="/img/Logo_panomwan.png"
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <div className="">
                <p className="text-gray-300 text-sm/[20px]">
                  วิทยาลัยเทคโนโลยีพนมวันท์
                </p>
                <hr className="w-65 h-[2px] bg-white" />
                <p className="text-gray-300 text-sm/[20px]">
                  Phanomwan College of Technology
                </p>
              </div>
            </div>

            {/* <hr className=" w-72 h-[2px] bg-white" />
               <div className=" w-72 h-2 bg-white" ></div> */}

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {/* Navigation links */}
                <Link
                  href="about"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-20 font-medium "
                >
                  หน้าแรก
                </Link>
                <Link
                  href=""
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-20 font-medium"
                >
                  รู้จัก &quot;พนมวันท์&quot;
                </Link>
                <Link
                  href="faculty"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-20 font-medium"
                >
                  คณะ/หลักสูตร
                </Link>
                <Link
                  href="welfare"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-20 font-medium"
                >
                  สวัสดิการ
                </Link>
                <div className="relative">
                  <button
                    className=" text-white py-2 px-4 rounded-md focus:outline-none"
                    onClick={toggleDropdown}
                  >
                    <span className=" flex">
                      สนใจสมัครเรียน
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-4 h-4 mt-1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </button>
                  {isOpen && (
                    <ul className="absolute top-10 right-0 bg-white shadow-lg rounded-md py-2 px-4">
                      <li>
                        <Link
                          href="#"
                          className="text-gray-800 hover:bg-gray-200 block py-2"
                        >
                          วิธีการสมัคร
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-gray-800 hover:bg-gray-200 block py-2"
                        >
                          ทีมที่ปรึกษา
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>

                {/* Add more links as needed */}
              </div>
            </div>
          </div>
          {/* Right-aligned elements */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
