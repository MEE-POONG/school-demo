import RootLayout from "@/components/layout"

export default function Contact() {
    return (
        <RootLayout>
            <div className="container ml-60 py-28 text-blue-900 ">
                <h1 className="font-fontTH text-4xl">ติดต่อเรา</h1>
                <div className=" w-2/4 h-0.5 bg-black mt-2"></div>
                <h1 className=" mt-2 text-2xl ">
                    วิทยาลัยเทคโนโลยีพนมวันท์
                </h1>
                <div className="flex flex-row">
                    <div>ที่อยู่</div>
                    

                    <div className=" text-slate-500 ml-3">198 ถ.มิตรภาพ-จอหอ ต.บ้านโพธิ์ อ.เมือง จ.นครราชสีมา 30310</div>
                </div>
                


            </div>
        </RootLayout>
    )
}