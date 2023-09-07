// import { RiFilePaper2Line } from "react-icons/ri";
// import { FaMoneyBill } from "react-icons/fa";
// import { RiGraduationCapLine } from "react-icons/ri";
// import { FaUserGraduate } from "react-icons/fa";
// import Link from "next/link";

// export default function Menu() {
//   return (
//     <div className="relative">
//       <img className="relative w-full " src="/img/event/111.png" />
//       <div className="absolute  inset-1 mb-8 flex flex-wrap place-content-evenly h-[100%] items-center">
//         <Link href="/register/form" className="contactIcon text-center ">
//           <RiFilePaper2Line className="mx-auto mb-2 h-[80px] w-12 md:w-32 lg:w-48 " />
//           สมัครเรียน
//         </Link>
//         <Link href="/welfare" className="contactIcon  text-center ">
//           <FaMoneyBill className="mx-auto mb-2 h-[80px] w-12 md:w-32 lg:w-48" />
//           สวัสดิการ
//         </Link>
//         <Link href="/advisor" className="contactIcon  text-center ">
//           <RiGraduationCapLine className="mx-auto mb-2 h-[80px] w-12 md:w-32 lg:w-48" />
//           ปรึกษาเพิ่มเติม
//         </Link>
//         <Link href="/faculty" className="contactIcon text-center ">
//           <FaUserGraduate className="mx-auto mb-2 h-[80px] w-12 md:w-32 lg:w-48 " />
//           คณะที่เปิดสอน
//         </Link>
//       </div>
//     </div>

//   );
// }

import Link from "next/link";
import { FaMoneyBill, FaUserGraduate } from "react-icons/fa";
import { RiFilePaper2Line, RiGraduationCapLine } from "react-icons/ri";

export default function Menu() {
    return (
        <>

            <div>

                <div className="relative">
                    <img className="w-full mx-auto my-auto h-[150px] sm:h-[200px] md:h-[300px] lg:h-[300px] xl:h-[200px] mb-3 bg-gradient-to-r from-blue-900 via-yellow-500 to-blue-900" src="/img/event/111.png" alt="Event" />

                    <div className="absolute  inset-0 mb-8 flex flex-wrap place-content-evenly h-[100%] items-center">
                        <Link href="/register/form" className="contactIcon text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                            <RiFilePaper2Line className="mx-auto mb-2 h-[80px] w-10 sm:w-30 md:w-48 lg:w-62 xl:w-80" />
                            สมัครเรียน
                        </Link>
                        <Link href="/welfare" className="contactIcon text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                            <FaMoneyBill className="mx-auto mb-2 h-[80px] w-10 sm:w-30 md:w-48 lg:w-62 xl:w-80" />
                            สวัสดิการ
                        </Link>
                        <Link href="/advisor" className="contactIcon text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                            <RiGraduationCapLine className="mx-auto mb-2 h-[80px] w-10 sm:w-30 md:w-48 lg:w-62 xl:w-80" />
                            ปรึกษาเพิ่มเติม
                        </Link>
                        <Link href="/faculty" className="contactIcon text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                            <FaUserGraduate className="mx-auto mb-2 h-[80px] w-10 sm:w-30 md:w-48 lg:w-62 xl:w-80" />
                            คณะที่เปิดสอน
                        </Link>


                    </div>
                </div>

            </div>


        </>
    );
};


{/* <div className="md:w-full h-[200px]  mb-3 bg-gradient-to-r from-blue-900 via-yellow-500 to-blue-900"> */ }
{/* <div className="w-full md:w-full mx-auto my-auto h-[600px] ms:h-full mb-3 bg-gradient-to-r from-blue-900 via-yellow-500 to-blue-900"> */ }
{/* <div className="w-full sm:w-[100%] md:w-[100%] lg:w-[50%] xl:w-[25%] mx-auto my-auto h-[600px] sm:h-[300px] md:h-[300px] lg:h-[500px] xl:h-full mb-3 bg-gradient-to-r from-blue-900 via-yellow-500 to-blue-900"> */ }