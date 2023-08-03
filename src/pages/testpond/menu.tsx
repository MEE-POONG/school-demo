import { RiFilePaper2Line } from "react-icons/ri";
import { FaMoneyBill } from "react-icons/fa";
import { RiGraduationCapLine } from "react-icons/ri";
import { FaUserGraduate } from "react-icons/fa";

export default function Menu() {
  return (
    <div className="relative ">
      <img className=" relative w-full h-40" src="/img/event/111.png" />
      <div className="absolute  inset-1 mb-8 flex flex-wrap place-content-evenly h-[100%] items-center">
        <a href="/register" className="contactIcon text-center ">
          <RiFilePaper2Line className="mx-auto mb-2 h-[80px] w-16 md:w-32 lg:w-48 " />
          สมัครเรียน
        </a>
        <a href="/welfare" className="contactIcon  text-center ">
          <FaMoneyBill className="mx-auto mb-2 h-[80px] w-16 md:w-32 lg:w-48" />
          สวัสดิการ
        </a>
        <a href="/advisor" className="contactIcon  text-center ">
          <RiGraduationCapLine className="mx-auto mb-2 h-[80px] w-16 md:w-32 lg:w-48" />
          ปรึกษาเพิ่มเติม
        </a>
        <a href="/faculty" className="contactIcon text-center ">
          <FaUserGraduate className="mx-auto mb-2 h-[80px] w-12 md:w-32 lg:w-48 " />
          คณะที่เปิดสอน
        </a>
      </div>
    </div>

  );
}
