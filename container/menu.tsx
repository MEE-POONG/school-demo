import { RiFilePaper2Line } from "react-icons/ri";
import Link from "next/link";
import { FaMoneyBill } from "react-icons/fa";
import { RiGraduationCapLine } from "react-icons/ri";
import { FaUserGraduate } from "react-icons/fa";

export default function Menu() {
  return (
    <div className="relative w-full h-40 mt-3 ">
      <img
        className=" relative w-full h-full"
        src="/img/event/111.png"
      />
      <div className="absolute  inset-0 flex md:grid-flow-col md:gap-20 md:justify-center items-center">
        <Link href="" className="text-white text-[30px] text-center mx-5 px-5 ">
          <RiFilePaper2Line className="mx-auto h-20 w-20 mb-2" />
          สมัครเรียน
        </Link>
        <Link href="" className="text-white text-[30px] text-center mx-5 px-5 hover:text-sky-400">
          <FaMoneyBill className="mx-auto h-20 w-20 mb-2" />
          ทุนการศึกษา
        </Link>
        <Link href="" className="text-white text-[30px] text-center mx-5 px-5 hover:text-sky-400">
          <RiGraduationCapLine className="mx-auto h-20 w-20 mb-2" />
          ปรึกษาเพิ่มเติม
        </Link>
        <Link href="">
          <div className="text-white text-[30px] text-center mx-5 px-5 hover:text-sky-400   hover:bg-[#18BCEB]">
            <FaUserGraduate className="mx-auto h-20 w-20 mb-2" />
            คณะที่เปิดสอน
          </div>
        </Link>


      </div>
      {/* <div className=" absolute inset-0 flex justify-evenly md:grid-flow-col md:gap-20 md:justify-center mt-6 py-7 ">


        <div className="text-center text-[30px] md:text-[70px] text-white hover:text-orange-500">
          <Link href="" className="">
            <FaMoneyBill className="mx-auto" />
          </Link>
          <p className="text-white hover:text-orange-500 text-xs md:text-base ">
            ทุนการศึกษา
          </p>
        </div>

        <div className="text-center text-[30px] md:text-[70px] text-white hover:text-orange-500">
          <Link href="">
            <RiGraduationCapLine className="mx-auto" />
          </Link>
          <p className="text-white hover:text-orange-500 text-xs md:text-base">
            ปรึกษาเพิ่มเติม
          </p>
        </div>

        <div className="text-center text-[30px] md:text-[70px] text-white hover:text-orange-500" >

          <Link href="">
            <FaUserGraduate className="mx-auto" />
          </Link>

          <p className="text-white hover:text-orange-500 text-xs md:text-base">
            คณะที่เปิดสอน
          </p>
        </div>
      </div> */}
    </div>
  );
}
