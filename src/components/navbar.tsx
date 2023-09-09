import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import Link from "next/link";
import { HiBars4, HiOutlineXMark, HiChevronDown, HiChevronUp } from "react-icons/hi2";
import Image from "next/image";


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
const ComponentsNavbar: React.FC = () => {
  const Links = [
    { name: 'หน้าแรก', link: '/' },
    { name: 'รู้จัก "พนมวันท์"', link: '/about' },
    { name: 'คณะ/หลักสูตร', link: '/faculty' },
    { name: 'สวัสดิการ', link: '/welfare' },
    {
      name: 'ข้อมูลเพิ่มเติม',
      link: '',
      children: [
        { name: 'วิธีการสมัคร', link: '/register' },
        { name: 'ทีมที่ปรึกษา', link: '/advisor' },
      ],
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const [open, setOpen] = useState(false);
  const toggleDropdown = () => {
    setOpen(!open);
  };



  return (
    <nav className="bg-[#1F306A] sm/h-[130px] font-fontTH ">
      <div className="flex justify-around gap-5 mx-auto px-2 sm:px-6 lg:px-8 py-3 flex-wrap  h-[100%] drop-shadow-lg" >
        <div className="grid grid-flow-col items-center gap-5" >
          <div >
            <Link href='/' className="flex items-center gap-2">
              <Image
                src="/img/Logo_panomwan.png"
                width={100}
                height={100}
                className="w-[65px] md:w-[90px]" alt="" />


              <div className="text-white">
                <p className="text-sm md:text-lg ">วิทยาลัยเทคโนโลยีพนมวันท์</p>
                <div className=" bg-white h-[2px] sm/w-[300px]" />
                <p className="text-[10px] mt-0.5 md:text-sm" >Phanomwan College of Technology</p>
              </div>
            </Link>
          </div>

          {/* Button Bar */}
          <div onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {
              isOpen ? <HiOutlineXMark size={30} /> : <HiBars4 size={30} />
            }

          </div>
        </div>

        {/* nav link here */}
        <ul className="md:flex gap-5 hidden font-medium text-sm md:text-md lg:text-lg items-center">
          {Links.map((link) => (
            <li key={link.name} className="text-white hover:bg-[#FFFAFA] hover:text-black px-3 py-2 rounded-md font-medium"
            >
              {link.children ? (
                <div
                  className="dropdown"
                  onClick={toggleDropdown}
                >
                  <button
                    className="btn btn-link flex items-center"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : 'false'}
                  >
                    {link.name}

                    <span
                      className="">
                      {
                        open ? <HiChevronUp size={20} /> : <HiChevronDown size={20} />
                      }
                    </span>
                  </button>

                  <ul
                    className="dropdown-menu mt-3 absolute bg-gray-100 text-gray-900 rounded-md"
                    aria-labelledby="dropdownMenuButton"
                    style={{ display: open ? 'block' : 'none' }}
                  >
                    {link.children.map((child) => (
                      <li key={child.name} className="hover:bg-[#BEBEBE] hover:text-black px-4 py-2 rounded-md "
                      >
                        <a href={child.link}>{child.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <a href={link.link}>{link.name}</a>
              )}
            </li>
          ))}
          <Link
            href="/register/form"
            className="text-black bg-amber-400 hover:bg-white hover:text-[#1F306A] px-3 py-2 rounded-md  font-medium"
          >
            สมัครเรียน
          </Link>
        </ul>
      </div>


      {/* nav link for mobile here */}
      <div className={`px-10 pt-5 absolute z-[-1] w-full h-screen bg-[#1F306A] transition-all animate-flip-down text-[14px]
         ${isOpen ? '' : 'hidden'}`}
      >
        <ul className="">
          {Links.map((link) => (
            <li key={link.name} className="text-white hover:border-b-2 px-3 py-2 font-medium">
              {link.children ? (
                <div
                  className="dropdown "
                  onClick={toggleDropdown}
                >
                  <button
                    className="btn flex items-center "
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : 'false'}
                  >
                    {link.name}
                    <span
                      className="">
                      {
                        open ? <HiChevronUp size={15} /> : <HiChevronDown size={15} />
                      }
                    </span>
                  </button>
                  <ul
                    className="mt-2 border-t-2 bg-[#172450] rounded-sm"
                    aria-labelledby=""
                    style={{ display: open ? 'block' : 'none' }}
                  >
                    {link.children.map((child) => (
                      <li key={child.name} className="my-1 py-1 pl-3 hover:border-l-2 hover:border-neutral-700">
                        <a href={child.link}>{child.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <a href={link.link}>{link.name}</a>
              )}
            </li>
          ))}

        </ul>
        <ul className="mt-1.5 text-center ">
            <Link href="/register/form">
            <button className="w-full bg-amber-400 hover:bg-white px-4 py-1.5 rounded-md  ">
              <p className="text-black hover:text-[#1F306A]">สมัครเรียน</p>
              </button>
            </Link>
        </ul>
      </div>

    </nav>
  );
};
export default ComponentsNavbar;
