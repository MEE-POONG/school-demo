import Link from "next/link";
import React from "react";

export default function LogoPanomwan2() {
  return (
    <div className="w-full mt-10 md:max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <Link href="./" className="mb-4 flex">
        <img
          src="/img/Logo_panomwan.png"
          className="h-[70px] mr-3"
          alt="Flowbite Logo"
        />

        <span className="self-center text-sm md:text-base font-semibold text-gray-300">
          <p>PHANOMWAN COLLEGE OF TECHNOLOGY</p>
          <hr className="w-[220px] h-[2px] bg-white" />
          <p>198 ถ.มิตรภาพ-จอหอ ต.บ้านโพธิ์ อ.เมือง จ.นครราชสีมา 30310</p>
          <p>TEL : 044-955121-122 FAX : 044-955120</p>
        </span>
      </Link>
    </div>
  );
}
