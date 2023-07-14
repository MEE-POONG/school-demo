
import React from "react"
import Image from 'next/image';
export default function Contact() {
    return (
        <div className="container mx-auto py-24 text-blue-900 ">
            <h1 className="font-fontTH text-4xl">ติดต่อเรา</h1>
            <div className=" w-screen h-0.5 bg-black mt-2"></div>
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
            <div className=" w-screen h-0.5 bg-black my-8"></div>
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
                    <img className=" w-36 mx-auto border-black" src="/img/Qrline.jpg" />
                </div>
                <div className=" w-screen h-0.5 bg-black mt-2"></div>

            </div>
        </div>
    )
}