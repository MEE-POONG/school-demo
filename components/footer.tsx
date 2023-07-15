import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1F306A] shadow dark:bg-gray-900 w-full">
      <div className="mx-auto py-8 container">
        <div className="flex items-center justify-between">
          <Link href="/" className="mb-4 ">
            <img
              src="/img/Logo_panomwan.png"
              className="h-[70px] mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-x font-semibold whitespace-nowrap text-gray-300">
              <p>PHANOMWAN COLLEGE OF TECHNOLOGY</p>
              <hr className="w-[320px] h-[2px] bg-white" />
              <p>198 ถ.มิตรภาพ-จอหอ ต.บ้านโพธิ์ อ.เมือง จ.นครราชสีมา 30310</p>
              <p>TEL : 044-955121-122 FAX : 044-955120</p>
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <div className=" mr-10">
              <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                คณะที่เปิดสอน
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link
                    href="faculty"
                    className="hover:underline text-white"
                  >
                    คณะบริหารธรุกิจ
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="faculty"
                    className="hover:underline text-white"
                  >
                    คณะวิทยาศาสตร์และเทคโนโลยี
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="faculty"
                    className="hover:underline text-white"
                  >
                    คณะวิทยาศาสตร์
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://tailwindcss.com/"
                    className="hover:underline text-white"
                  >
                    คณะศิลปศาสตร์
                  </Link>
                </li>
              </ul>
            </div>

            <div className="">
              <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                รายการ
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link
                    href=""
                    className="hover:underline text-white"
                  >
                    สมัครเรียน
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="https://tailwindcss.com/"
                    className="hover:underline text-white"
                  >
                    ปรึกษาเรื่องทุน
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="https://tailwindcss.com/"
                    className="hover:underline text-white"
                  >
                    ปรึกษาเรื่องสมัครเรียน
                  </Link>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
      <div className=" bg-black h-6 ">
        <hr className="" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        <p className="text-white"> © 2023{" "} Me Prompt Technology CONPANY LIMITED. All Rights Reserved.</p>
          <Link href="https://flowbite.com/" className="hover:underline">
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
