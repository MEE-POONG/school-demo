import Link from "next/link";
import React from "react";


const Footer = () => {
  return (
    <footer className=" bg-[#1F306A] w-full font-fontTH">
      <div className="container mx-auto p-7 lg:flex lg:justify-between items-center md:py-8 lg:my-16">
        <div>
          <Link href="./" className="flex">
            <img
              src="/img/Logo_panomwan.png"
              className="h-[50px]  md:h-[120px] mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-[10px] md:text-lg font-medium text-white">
              <p>PHANOMWAN COLLEGE OF TECHNOLOGY</p>
              <hr className="w-full h-[2px] bg-white my-1" />
              <p>198 ถ.มิตรภาพ-จอหอ ต.บ้านโพธิ์ อ.เมือง จ.นครราชสีมา 30310</p>
              <p>TEL : 044-955121-122 &nbsp;FAX : 044-955120</p>
            </span>
          </Link>
        </div>

        <div className="mt-5 md:flex justify-around gap-16">
          <div className="">
            <h4 className="md:mb-3 text-[12px] md:text-[18px] md:font-semibold text-white">
              คณะที่เปิดสอน
            </h4>
            <div className="bg-white w-full h-[0.25px] md:hidden mb-1"></div>
            <ul className="text-white text-[10px] md:text-[16px]">
              <li className="mb-1">
                คณะบริหารธรุกิจ
              </li>
              <li className="mb-1">
                คณะวิทยาศาสตร์และเทคโนโลยี
              </li>
              <li className="mb-1">
                คณะวิทยาศาสตร์
              </li>
              <li>
                คณะศิลปศาสตร์
              </li>
            </ul>
          </div>

          <div className="mt-5 md:mt-0">
            <h4 className=" md:mb-3 text-[12px] md:text-[18px] md:font-semibold text-white">รายการ</h4>
            <div className="bg-white w-full h-[0.25px] md:hidden mb-1"></div>
            <ul className="text-white text-[10px] md:text-[16px]">
              <li className="mb-1">
                <Link href="/register" className="hover:underline ">
                  สมัครเรียน
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/advisor" className="hover:underline ">
                  ปรึกษาเรื่องสมัครเรียน
                </Link>
              </li>
            </ul>
          </div>

        </div>

      </div>


      <div className=" bg-black w-full p-2">
        <div className=" text-white text-center text-[9px] md:text-xs">
          © 2023&nbsp;
          <Link href="" className="hover:underline hover:text-amber-400">
            Me Prompt Technology COMPANY LIMITED.
          </Link>
          &nbsp;All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
