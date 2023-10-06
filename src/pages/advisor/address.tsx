import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { BiLogoFacebookCircle } from "react-icons/bi";

const AddressContact = () => {
    return (
        <>
            <div className="container mx-auto px-2 md:px-14 py-5">
                <div className="mt-8">
                    <p className="text-light-blue-600">Contact</p>
                    <p className='text-xl md:text-3xl text-[#1F306A]'>
                        ช่องทางการติดต่อ
                    </p>
                    <div className="flex flex-wrap gap-10">
                        <div className="text-sm md:text-base">
                            <div className="border-b py-2">
                                <p className=" text-amber-600 font-semibold text-xl mb-2">วิทยาลัยเทคโนโลยีพนมวันท์</p>
                                <p>ที่อยู่: &nbsp;
                                    <span>198 ถ.มิตรภาพ-จอหอ ต.บ้านโพธิ์ อ.เมือง จ.นครราชสีมา 30310</span>
                                </p>
                                <p>โทร: &nbsp;
                                    <span>044-955121-122</span>
                                </p>
                                <p>แฟ็กซ์: &nbsp;
                                    <span>044-955121-122</span>
                                </p>
                                <p>อีเมล: &nbsp;
                                    <span>phanomwanu@gmail.com</span>
                                </p>
                            </div>
                            <div className="mt-5">
                                <p className=" text-amber-600 font-semibold text-xl mb-2 flex">
                                    พรพิมล ลักขษร
                                    <span className="text-black font-thin text-lg ml-5">ผู้ช่วยที่ปรึกษา</span>
                                </p>
                                <p>โทร: &nbsp;
                                    <span>061-019-8815</span>
                                </p>
                                <p className="flex items-center"><BiLogoFacebookCircle />
                                    <span>Facebook: &nbsp;061-019-8815</span>
                                </p>
                            </div>
                        </div>

                        {/* mail */}

                        
                    </div>
                    <div className="mt-5">
                        <iframe
                            className="md:w-full h-full md:h-96 rounded-lg"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15410.825965346847!2d102.1841477!3d15.0643421!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311949e7e29a02b3%3A0x8b0fbbc3758d561f!2z4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4LmA4LiX4LiE4LmC4LiZ4LmC4Lil4Lii4Li14Lie4LiZ4Lih4Lin4Lix4LiZ4LiX4LmMIFBoYW5vbXdhbiBDb2xsZWdlIG9mIFRlY2hub2xvZ3k!5e0!3m2!1sth!2sth!4v1689326551888!5m2!1sth!2sth" >

                        </iframe>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AddressContact;