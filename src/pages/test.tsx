import RootLayout from "@/components/layout";
import Link from "next/link";
import { BsEmojiNeutral, BsFill1CircleFill,BsEmojiFrown,BsEmojiSmile,BsEmojiLaughing } from "react-icons/bs";

export default function Test() {
    return (
        <RootLayout>
            <div className="container mx-auto text-xl font-fontTH font-bold py-24">
                <div className="flex flex-col md:flex-row justify-center mx-10 gap-5 mb-5 ">
                    <div className="flex items-center text-emerald-600 gap-5 bg-gray-600/5 p-6 rounded-md shadow-md hover:scale-105 ">
                        <BsFill1CircleFill size={50} />
                        <div className=" w-72 h-40">
                            <h3>หัวข้อ 1</h3>
                            <p className="text-[16px]">รายละเอียดของหัวข้อ 1รายละเอียดของหัวข้อ 1รายละเอียดของหัวข้อ 1รายละเอียดของหัวข้อ 1รายละเอียดของหัวข้อ 1รายละเอียดของหัวข้อ 1</p>
                        </div>
                    </div>
                    <div className="flex items-center text-emerald-600 gap-5 bg-gray-600/5 p-6 rounded-md shadow-md">
                        <BsFill1CircleFill size={50} />
                        <div className="w-72 h-40">
                            <h3>หัวข้อ 1</h3>
                            <p className="text-[16px]">รายละเอียดของหัวข้อ 1รายละเอียดของหัวข้อ 1รายละเอียดของหัวข้อ 1รายละเอียดของหัวข้อ 1รายละเอียดของหัวข้อ 1รายละเอียดของหัวข้อ 1</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-center mx-10 gap-5 mb-5">
                    <div className="flex items-center text-emerald-600 gap-5 bg-gray-600/5 p-6 rounded-md shadow-md">
                        <BsFill1CircleFill size={50} />
                        <div className="w-72 h-40">
                            <h3>หัวข้อ 1</h3>
                            <p className="text-[16px]">รายละเอียดของหัวข้อ 1รายละเอียดของหัวข้อ 1รายละเอียดของหัวข้อ 1รายละเอียดของหัวข้อ 1รายละเอียดของหัวข้อ 1รายละเอียดของหัวข้อ 1</p>
                        </div>
                    </div>
                    <div className="flex items-center text-emerald-600 gap-5 bg-gray-600/5 p-6 rounded-md shadow-md">
                        <BsFill1CircleFill size={50} />
                        <div className="w-72 h-40">
                            <h3>หัวข้อ 1</h3>
                            <p className="text-[16px]">รายละเอียดของหัวข้อ 1รายละเอียดของหัวข้อ 1รายละเอียดของหัวข้อ 1รายละเอียดของหัวข้อ 1รายละเอียดของหัวข้อ 1รายละเอียดของหัวข้อ 1</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-center mx-10 gap-5 mb-5">
                    <div className="flex items-center text-emerald-600 gap-5 bg-gray-600/5 p-6 rounded-md shadow-md">
                        <BsFill1CircleFill size={50} />
                        <div className="w-72 h-40">
                            <h3>หัวข้อ 1</h3>
                            <p className="text-[16px]">รายละเอียดของหัวข้อ 1รายละเอียดของหัวข้อ 1รายละเอียดของหัวข้อ 1รายละเอียดของหัวข้อ 1รายละเอียดของหัวข้อ 1รายละเอียดของหัวข้อ 1</p>
                        </div>
                    </div>
                    <div className="flex items-center text-emerald-600 gap-5 bg-gray-600/5 p-6 rounded-md shadow-md">
                        <BsFill1CircleFill size={50} />
                        <div className="w-72 h-40">
                            <h3>หัวข้อ 1</h3>
                            <p className="text-[16px]">รายละเอียดของหัวข้อ 1รายละเอียดของหัวข้อ 1รายละเอียดของหัวข้อ 1รายละเอียดของหัวข้อ 1รายละเอียดของหัวข้อ 1รายละเอียดของหัวข้อ 1</p>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 md:grid-rows-3 gap-10 mx-24">
                    <div className="md:flex justify-center items-center p-2 bg-blue-300/5">
                        <BsFill1CircleFill size={150} />
                        <div className="ml-4">
                            <h3>หัวข้อ 1</h3>
                            <p className="text-[16px]">รายละเอียดของหัวข้อ 1รายละเอียดของหัวข้อ 1รายละเอียดของหัวข้อ 1รายละเอียดของหัวข้อ 1รายละเอียดของหัวข้อ 1รายละเอียดของหัวข้อ 1</p>
                        </div>
                    </div>

                    <div className="md:flex justify-center items-center p-2 bg-blue-300/5">
                        <BsFill1CircleFill size={150} />
                        <div className="ml-4">
                            <h3>หัวข้อ 1</h3>
                            <p className="text-[16px]">รายละเอียดของหัวข้อ 1รายละเอียดของหัวข้อ 1รายละเอียดของหัวข้อ 1รายละเอียดของหัวข้อ 1รายละเอียดของหัวข้อ 1รายละเอียดของหัวข้อ 1</p>
                        </div>
                    </div>

                </div>

                {/* Emoji */}
                <div className="grid md:grid-flow-col justify-center gap-5">
                    <div className="bg-red-500 text-white p-3 rounded-full hover:bg-white hover:text-red-500 border-2 border-red-600">
                       <Link href=""><BsEmojiFrown size={80}/></Link>
                    </div>

                    <div className="bg-amber-600 text-white p-3 rounded-full hover:bg-white hover:text-amber-500 border-2 border-amber-600">
                        <Link href=""><BsEmojiNeutral size={80}/></Link>
                    </div>

                    <div className="bg-green-500 text-white p-3 rounded-full hover:bg-white hover:text-green-500 border-2 border-green-600">
                        <Link href=""><BsEmojiSmile size={80}/></Link>
                    </div>

                    <div className="bg-pink-500 text-white p-3 rounded-full hover:bg-white hover:text-pink-500 border-2 border-pink-600">
                        <Link href=""><BsEmojiLaughing size={80}/></Link>
                    </div>
                </div>


            </div>
        </RootLayout>
    )
}