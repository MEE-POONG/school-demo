import Link from "next/link";
export default function Activity() {
  return (
    <div className="py-5 mb-5">
      <div className=" bg-[#1F306A] p-8 md:h-150 lg:h-190 container mx-auto items-center justify-center mb-5">
        <h1 className=" text-lg md:text-3xl  md:ml-0 py-5 text-center text-yellow-400">
          กิจกรรมที่ผ่านมา
        </h1>
        <div className="grid grid-cols-3 gap-3 container mx-auto">
          <Link href="" className="p-4">
            <img className="" src="/img/event/event1.png" />
          </Link>
          <Link href="" className="p-4">
            <img src="/img/event/event6.png" />
          </Link>
          <Link href="" className="p-4">
            <img src="/img/event/event3.png" />
          </Link>
        </div>
      </div>
      <div className="md:w-full h-0.5 mt-4 bg-gradient-to-r from-blue-900 via-yellow-500 to-blue-900  md:h-150 lg:h-190 container mx-auto items-center justify-center mb-5"></div>

      <div className="text-center min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-1 lg:overflow-visible ">
        <Link href="news" className=" underline underline-offset-1 middle none center mr-4 rounded-lg bg-blue-900 py-3 px-5 font-sans text-lg font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
          อ่านทั้งหมด
        </Link>
      </div>
    </div>
  );
}
