import { RiFilePaper2Line } from "react-icons/ri";
import Link from "next/link";
import { FaMoneyBill } from "react-icons/fa";
import { RiGraduationCapLine } from "react-icons/ri";
import { FaUserGraduate } from "react-icons/fa";

export default function Menu(){
    return(
        <div className="relative w-full h-full mt-3 ">
        <img
          className=" relative w-full h-28 md:h-44"
          src="/img/event/111.png"
        />
        <div className=" absolute inset-0 flex justify-evenly md:grid-flow-col md:gap-20 md:justify-center mt-6  ">
          <div className="text-center">
            <div className="text-[28px] md:text-[70px] text-white hover:text-orange-500">
              <Link href="">
                <RiFilePaper2Line className="mx-auto" />
              </Link>
            </div>
            <p className="text-white hover:text-orange-500 text-sm md:text-base">
              สมัครเรียน
            </p>
          </div>

          <div className="text-center">
            <div className="text-[30px] md:text-[70px] text-white hover:text-orange-500">
              <Link href="" className="">
                <FaMoneyBill className="mx-auto" />
              </Link>
            </div>
            <p className="text-white hover:text-orange-500 text-xs md:text-base ">
              ทุนการศึกษา
            </p>
          </div>

          <div className="text-center">
            <div className=" text-[30px] md:text-[70px] text-white hover:text-orange-500">
              <Link href="">
                <RiGraduationCapLine className="mx-auto" />
              </Link>
            </div>
            <p className="text-white hover:text-orange-500 text-xs md:text-base">
              ปรึกษาเพิ่มเติม
            </p>
          </div>

          <div className="text-center">
            <div className=" text-[30px] md:text-[70px] text-white hover:text-orange-500">
              <Link href="">
                <FaUserGraduate className="mx-auto" />
              </Link>
            </div>
            <p className="text-white hover:text-orange-500 text-xs md:text-base">
              คณะที่เปิดสอน
            </p>
          </div>
        </div>
      </div>

    )
}