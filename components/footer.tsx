import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1F306A] w-full">
      <div className="w-full p-4 md:py-8s">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center mb-4 sm:mb-0">
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
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <div className=" mr-10">
              <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                คณะที่เปิดสอน
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://flowbite.com/"
                    className="hover:underline text-white"
                  >
                    คณะบริหารธรุกิจ
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://flowbite.com/"
                    className="hover:underline text-white"
                  >
                    คณะวิทยาศาสตร์และเทคโนโลยี
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://flowbite.com/"
                    className="hover:underline text-white"
                  >
                    คณะวิทยาศาสตร์
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline text-white"
                  >
                    คณะศิลปศาสตร์
                  </a>
                </li>
              </ul>
            </div>

            <div className="">
              <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                รายการ
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://flowbite.com/"
                    className="hover:underline text-white"
                  >
                    สมัครเรียน
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline text-white"
                  >
                    ปรึกษาเรื่องทุน
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline text-white"
                  >
                    ปรึกษาเรื่องสมัครเรียน
                  </a>
                </li>
              </ul>
            </div>
          </ul>
        </div>


        <div className="text-white text-sm bg-black mt-3 flex justify-center">
          <div>
            <p className="">© 2023{" "} Me Prompt Technology COMPANY LIMITED. All Rights Reserved.</p>
          </div>
        </div>
      </div>

    </footer>

  );
};

export default Footer;
