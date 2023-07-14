
import React from "react"
import Image from 'next/image';
import RootLayout from "@/components/layout";
export default function Contact() {
    return (
        <RootLayout>
        <div className="container mx-auto py-24 text-blue-900 ">
            <h1 className="font-fontTH text-4xl">ติดต่อเรา</h1>
            <div className=" w-full h-0.5 bg-black mt-2"></div>
            <h1 className="mt-2 text-2xl">
                วิทยาลัยเทคโนโลยีพนมวันท์
            </h1>
            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                    <p className=" text-slate-600"><strong className="text-blue-900 mr-10">ที่อยู่</strong>198 ถ.มิตรภาพ-จอหอ ต.บ้านโพธิ์ อ.เมือง จ.นครราชสีมา 30310</p>
                    <p className=" text-slate-600"><strong className="text-blue-900 mr-10">โทร</strong>  044-955121-122</p>
                    <p className=" text-slate-600"><strong className="text-blue-900 mr-6">แฟ็กซ์</strong> 044-955-120</p>
                    <p className=" text-slate-600"><strong className="text-blue-900 mr-10">อีเมล</strong>phanomwanu@gmail.com</p>
                </div>
                <div className="">
                    <img className=" w-36 mx-auto" src="/img/Logo_panomwan.png" />
                </div>

            </div>

            <div className=" w-full h-0.5 bg-black my-8"></div>

            <h1 className="  text-2xl">
            ที่ปรึกษา อ.พรพิมล ลักขษร
            </h1>
            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                    <p className=" text-slate-600"><strong className="text-blue-900 mr-10">ที่อยู่</strong>198 ถ.มิตรภาพ-จอหอ ต.บ้านโพธิ์ อ.เมือง จ.นครราชสีมา 30310</p>
                    <p className=" text-slate-600"><strong className="text-blue-900 mr-10">โทร</strong>  061-019-8815</p>
                    <p className=" text-slate-600"><strong className="text-blue-900 mr-2">Facbook</strong> teacher Pornpimol</p>
                </div>
                <div className="">
                    <img className=" w-36 mx-auto border border-black rounded-lg" src="/img/Qrline.jpg" />
                </div>
            </div>

            <div className=" mt-4 ">
            <iframe className=" w-full h-72 rounded-lg" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15410.825965346847!2d102.1841477!3d15.0643421!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311949e7e29a02b3%3A0x8b0fbbc3758d561f!2z4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4LmA4LiX4LiE4LmC4LiZ4LmC4Lil4Lii4Li14Lie4LiZ4Lih4Lin4Lix4LiZ4LiX4LmMIFBoYW5vbXdhbiBDb2xsZWdlIG9mIFRlY2hub2xvZ3k!5e0!3m2!1sth!2sth!4v1689326551888!5m2!1sth!2sth" ></iframe>
            </div>
        </div>
        </RootLayout>
    )
}