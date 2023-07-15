import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1F306A] w-full font-fontTH">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between">
          <Link href="/" className="mb-4 flex">
            <img
              src="/img/Logo_panomwan.png"
              className="h-[70px] mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-x font-semibold text-gray-300">
              <p>PHANOMWAN COLLEGE OF TECHNOLOGY</p>
              <hr className="w-[320px] h-[2px] bg-white" />
              <p>198 ถ.มิตรภาพ-จอหอ ต.บ้านโพธิ์ อ.เมือง จ.นครราชสีมา 30310</p>
              <p>TEL : 044-955121-122 FAX : 044-955120</p>
            </span>
          </Link>

          <div className="md:flex text-gray-500 my-8">
            <div className="">
              <h2 className="mb-6 text-md font-semibold text-white">
                คณะที่เปิดสอน
              </h2>
              <ul className="text-gray-500">
                <li className="mb-4">
                  <Link
                    href="https://flowbite.com/"
                    className="hover:underline text-white"
                  >
                    คณะบริหารธรุกิจ
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="https://flowbite.com/"
                    className="hover:underline text-white"
                  >
                    คณะวิทยาศาสตร์และเทคโนโลยี
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="https://flowbite.com/"
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
              <h2 className="mb-6 text-sm font-semibold text-white ">
                รายการ
              </h2>
              <ul className="text-white">
                <li className="mb-4">
                  <Link
                    href=""
                    className="hover:underline "
                  >
                    สมัครเรียน
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="https://tailwindcss.com/"
                    className="hover:underline "
                  >
                    ปรึกษาเรื่องทุน
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="https://tailwindcss.com/"
                    className="hover:underline "
                  >
                    ปรึกษาเรื่องสมัครเรียน
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-black h-9">
        {/* <hr className="" /> */}
        <span className="block text-sm">
          © 2023{" "}  
          <Link href="" className="hover:underline ">
            Me Prompt Technology CONPANY LIMITED.
          </Link>
          All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
