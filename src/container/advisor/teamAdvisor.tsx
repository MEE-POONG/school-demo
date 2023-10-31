import React from "react";

const TeamAdvisor = () => {
    return (
        <>
            <div className="flex flex-wrap md:flex-nowrap lg:flex-wrap relative items-center justify-center gap-3 lg:gap-12 w-full">
                {/* 1 */}
                <div className="rounded-xl overflow-hidden relative text-center group items-center flex flex-col max-w-sm hover:shadow-2xl transition-all duration-500 shadow-md p-4 bg-white ">
                    <div className="text-blue-400  transition-all h-52 w-40 lg:h-72 lg:w-56 ">
                        <img className="w-full h-full rounded-full" src="/img/advisor/pichapop.png" alt="" />
                    </div>
                    <div className="group-hover:pb-12  transition-all duration-500 delay-200">
                        <h1 className="font-semibold text-gray-700 text-base">นายพิชาภพ ลักขษร</h1>
                        <p className="text-blue-400 text-sm">@หัวหน้าที่ปรึกษา</p>
                    </div>
                    <div className="flex items-center transition-all duration-500 delay-200 group-hover:bottom-3 -bottom-full absolute gap-2 justify-evenly w-full text-center">
                        <div className="text-2xl text-black p-0 transition-all duration-500 delay-200 rounded-full ">
                            <p className="text-gray-700 text-xs px-2 lg:text-sm">&quot;ประสบการณ์ที่เรามีพร้อมช่วยเหลือคุณ&quot;</p>
                            <p className="text-center mx-auto text-xs  lg:text-sm text-black">โทร&nbsp;:&nbsp;061-519-6515</p>

                        </div>
                    </div>
                </div>
                {/* 2 */}
                <div className="rounded-xl overflow-hidden relative text-center group items-center flex flex-col max-w-sm hover:shadow-2xl transition-all duration-500 shadow-md p-4 bg-white">
                    <div className="text-blue-400  transition-all h-52 w-40 lg:h-72 lg:w-56 ">
                        <img className="w-full h-full rounded-full" src="/img/advisor/pornpimol.png" alt="" />
                    </div>
                    <div className="group-hover:pb-12 transition-all duration-500 delay-200">
                        <h1 className="font-semibold text-gray-700 text-base">นางพรพิมล ลักขษร</h1>
                        <p className="text-blue-400 text-sm">@ผู้ช่วยที่ปรึกษา</p>
                    </div>
                    <div className="flex items-center transition-all duration-500 delay-200 group-hover:bottom-3 -bottom-full absolute gap-2 justify-evenly w-full text-center">
                        <div className="text-2xl text-black p-0 transition-all duration-500 delay-200 rounded-full ">
                            <p className="text-gray-700 text-xs  lg:text-sm">&quot;ทุกการศึกษามีความหมายกับเราเสมอ&quot;</p>
                            <p className="text-center mx-auto text-xs  lg:text-sm text-black">โทร&nbsp;:&nbsp;061-019-8815 </p>

                        </div>
                    </div>
                </div>
                {/* 3 */}
                <div className="rounded-xl overflow-hidden relative text-center group items-center flex flex-col max-w-sm hover:shadow-2xl transition-all duration-500 shadow-md p-4 bg-white">
                    <div className="text-blue-400  transition-all h-52 w-40 lg:h-72 lg:w-56 ">
                        <img className="w-full h-full rounded-full" src="/img/advisor/wantanai.png" alt="" />
                    </div>
                    <div className="group-hover:pb-12 transition-all duration-500 delay-200">
                        <h1 className="font-semibold text-gray-700 text-base">นายวรรธนัย บุตรมั้น</h1>
                        <p className="text-blue-400 text-sm">@ประชาสัมพันธ์</p>
                    </div>
                    <div className="flex items-center transition-all duration-500 delay-200 group-hover:bottom-3 -bottom-full absolute gap-2 justify-evenly w-full text-center">
                        <div className="text-2xl text-black p-0 transition-all duration-500 delay-200 rounded-full ">
                            <p className="text-gray-700 text-xs  lg:text-sm">&quot;ต่อยอดความเป็นไปได้ ไปกับเรา&quot;</p>
                            <p className="text-center mx-auto text-xs  lg:text-sm text-black">โทร&nbsp;:&nbsp;061-019-8815 </p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TeamAdvisor;