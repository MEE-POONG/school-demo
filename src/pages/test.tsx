import RootLayout from "@/components/layout";
import { BsFill1CircleFill } from "react-icons/bs";

export default function Test() {
    return (
        <RootLayout>
            <div className="container mx-auto text-xl font-fontTH font-bold py-24">
                <div className="flex flex-row justify-center gap-24 mb-8">
                    <div className="flex text-emerald-600 gap-5">
                        <BsFill1CircleFill size={50} />
                        <div>
                            <h3>หัวข้อ 1</h3>
                            <p>รายละเอียดของหัวข้อ 1</p>
                        </div>
                    </div>
                    <div className="flex text-emerald-600 gap-5">
                        <BsFill1CircleFill size={50} />
                        <div>
                            <h3>หัวข้อ 1</h3>
                            <p>รายละเอียดของหัวข้อ 1</p>
                        </div>
                    </div>
                    
                </div>

                <div className="flex flex-row justify-center gap-24 mb-10">
                    <div className="flex text-emerald-600 gap-5">
                        <BsFill1CircleFill size={50} />
                        <div>
                            <h3>หัวข้อ 1</h3>
                            <p>รายละเอียดของหัวข้อ 1</p>
                        </div>
                    </div>
                    <div className="flex text-emerald-600 gap-5">
                        <BsFill1CircleFill size={50} />
                        <div>
                            <h3>หัวข้อ 1</h3>
                            <p>รายละเอียดของหัวข้อ 1</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row justify-center gap-24">
                    <div className="flex text-emerald-600 gap-5">
                        <BsFill1CircleFill size={50} />
                        <div>
                            <h3>หัวข้อ 1</h3>
                            <p>รายละเอียดของหัวข้อ 1</p>
                        </div>
                    </div>
                    <div className="flex text-emerald-600 gap-5">
                        <BsFill1CircleFill size={50} />
                        <div>
                            <h3>หัวข้อ 1</h3>
                            <p>รายละเอียดของหัวข้อ 1</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </RootLayout>
    )
}