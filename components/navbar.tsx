import React, { useState } from "react";
import LogoPanomwan from "@/container/LOGO/LogoPanomwan";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
const ComponentsNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" bg-[#1F306A] h-[130px] font-fontTH ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-wrap  h-[100%] justify-between ">
        {/* <div className="container flex flex-wrap items-center justify-between h-16 "> */}
          {/* <div className="flex flex-wrap items-center mt-[2%] "> */}
            {/* <div className="flex md:order-2 ml-5"> */}
              <LogoPanomwan/>
              <div
              className={`md:flex justify-between items-center w-full md:w-auto md:order-1 ${
                isOpen ? "" : "hidden"
              }`}
              id="mobile-menu-3"
            >
              <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-lg  md:font-medium  ">
                <a
                  href="./"
                  className="text-white  hover:bg-[#18BCEB] hover:text-white px-3 py-2 rounded-md  font-medium "
                >
                  หน้าแรก
                </a>

                <a
                  href="about"
                  className="text-white  hover:bg-[#18BCEB] hover:text-white px-3 py-2 rounded-md  font-medium"
                >
                  รู้จัก &quot;พนมวันท์&quot;
                </a>

                <a
                  href="faculty"
                  className="text-white  hover:bg-[#18BCEB] hover:text-white px-3 py-2 rounded-md  font-medium"
                >
                  คณะ/หลักสูตร
                </a>

                <a
                  href="welfare"
                  className="text-white  hover:bg-[#18BCEB] hover:text-white px-3 py-2 rounded-md  font-medium"
                >
                  สวัสดิการ
                </a>
                <a>

                  <Menu as="div" className="relative inline-block z-50 ">
                    <div>
                      <Menu.Button className="inline-flex w-full gap-x-1.5 rounded-md px-3 py-2 text-20 font-medium text-white text-lg font-fontTH  shadow-sm">
                        สนใจสมัครเรียน
                        <ChevronDownIcon
                          className="-mr-1 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </div>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-lg"
                                )}
                              >
                                วิธีการสมัคร
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-lg"
                                )}
                              >
                                ทีมที่ปรึกษา
                              </a>
                            )}
                          </Menu.Item>

                          <form method="POST" action="#"></form>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </a>
              </ul>
            </div>
            {/* </div> */}
          {/* </div> */}
        </div>
      {/* </div> */}
      {/*------------------------ mobile -----------------*/}
      <div className="">
                                  
      </div>
    </nav>

  );
};
export default ComponentsNavbar;
