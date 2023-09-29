import { Inter } from "next/font/google";
import TheLayout from "@/components/TheLayout";
import { Typography } from "@material-tailwind/react";
import Link from "next/link";
import { useState, useEffect } from 'react'; // เพิ่มการ import useEffect
import Loading from '@/components/loading'; // เพิ่มการ import คอมโพเนนต์ Loading

const inter = Inter({ subsets: ["latin"] });

export default function About() {
    const [isLoading, setIsLoading] = useState(true); // เริ่มต้น isLoading เป็น true

    // useEffect สำหรับจำลองการโหลดรูปภาพทุกตัวในหน้า
    useEffect(() => {
        const images = document.querySelectorAll('img'); // เลือกทุก <img> ในหน้า
        let loadedImages = 0;

        function handleImageLoad() {
            loadedImages++;
            if (loadedImages === images.length) {
                setIsLoading(false);
            }
        }

        images.forEach((img) => {
            if (img.complete) {
                handleImageLoad();
            } else {
                img.addEventListener('load', handleImageLoad);
            }
        });

        return () => {
            images.forEach((img) => {
                img.removeEventListener('load', handleImageLoad);
            });
        };
    }, []);


    return (
        <TheLayout>
            {isLoading && <Loading />}
            <title>about</title>
            <div className="container mx-auto mt-20 md:py-24 md:mt-24">
                <img className="w-full md:rounded-t-xl" src="/img/school/panomtext.png" alt="" />
                <div className="shadow-xl px-5 py-3">
                    <h2 className='text-black text-center py-5 text-lg md:text-2xl lg:text-4xl drop-shadow-xl font-semibold'>
                        รู้จัก”พนมวันท์”
                    </h2>

                    <div className="md:mt-10 text-justify border-b-2 border-gray-500/30">
                        <p className="text-[#2797FF] text-base md:text-2xl mb-2">ข้อมูลสถาบัน</p>
                        <p className="mb-4 indent-5 md:indent-8 text-black text-xs md:text-base lg:text-lg">
                            วิทยาลัยเทคโนโลยีพนมวันท์ ก่อตั้งขึ้นเมื่อวันที่ 21 พฤศจิกายน 2550 ด้วยเจตนารมณ์ที่ตระหนักถึงความสำคัญของการศึกษา
                            ในระดับปริญญาตรีอันจะนำไปสู่การพัฒนาทางด้านความคิดทักษะเชิงวิชาชีพมนุษยสัมพันธ์และคุณธรรม
                            ซึ่งจะช่วยส่งเสริมและพัฒนาเยาวชนและประชาชนในท้องถิ่นโดยเฉพาะจังหวัดนครราชสีมาและจังหวัดใกล้เคียงรวมทั้งประเทศชาติ
                            แบบยั่งยืน ดังนั้นวิทยาลัยเทคโนโลยีพนมวันท์ จึงจัดให้มีการเรียนการสอน โดยให้ความสำคัญกับการเตรียมความพร้อม
                            ในด้านศักยกาพและทรัพยากรสนับสนุนต่างๆเพื่อให้การจัดการเรีนการสอนเป็นไปอย่างมีประสิทธิภาพและบรรลุตามปนิธานที่ได้ตั้งไว้
                        </p>

                        <p className="mb-4 indent-5 md:indent-8 text-black text-xs md:text-base lg:text-lg">
                            วิทยาลัยได้เริ่มเปิดทำการสอนตั้งแต่ปีการศึกษา 2551 ซึ่งได้จัดการเรียนการสอนในหลักสูตรบริหารธุรกิจบัณทิต
                            และหลักสูตรบัญชีบัณฑิตด้วยความมุ่งมั่นของผู้ก่อตั้ง ผู้บริหาร และ คณาจารย์ที่จะพัฒนาวิทยาลัยเทคโนโลยีพนมวันท์ ให้มี
                            ความเจริญก้าวหน้าอย่างต่อเนื่องและมั่นคงสามารถผลิตบุคลากรที่มีคุณค่าต่อสังคมเพื่อตอบสนองต่อความต้องการของท้องถิ่น
                            และประเทศชาติ พร้อมทั้งเป็นแหล่งข้อมูลเชิงวิชาการให้แก่ ชุมชนและท้องถิ่นทั้งนี้เพื่อให้วิทยาลัยฯ
                            ได้อย่างแท้จริงตามเจตนารมณ์ของการก่อตั้งวิทยาลัยเทคโนโลยีพนมวันท์

                        </p>
                    </div>

                    <div className="mt-7 border-b-2 border-gray-500/30 pb-5 text-center">
                        <p className="text-[#2797FF] text-base md:text-2xl mb-1">ตราสัญลักษณ์</p>
                        <p className="text-[#2797FF] text-base md:text-2xl ">วิทยาลัยเทคโนโลยีพนมวันท์</p>
                        <img className="w-36 mx-auto my-5" src="/img/Logo_panomwan.png" alt="" />
                        <p className=" indent-5 md:indent-8 text-black text-xs md:text-base lg:text-lg">
                            สัญลักษณ์ของวิทยาลัยเทคโนโลยีพนมวันท์มีเครื่องหมายเป็นรูปตรา
                            วงกลม ภานในวงกลม เป็นรูปดอกบัวบาน 8  กลีบล้อมรอบ
                            ปราสาทหิน
                        </p>

                        <div className="md:flex justify-center gap-3 text-xs md:text-base lg:text-lg text-center">
                            <p className="text-[#6CB4EE]">ดอกบัวบาน 8 กลีบ</p>
                            <span className="text-black indent-10 md:indent-0">หมายถึง ทางแห่งความสำเร็จมรรค 8 </span>
                        </div>
                        <div className="md:flex justify-center gap-3 text-xs md:text-base lg:text-lg text-center">
                            <p className="text-[#6CB4EE]">กลีบบัวทั้ง 8 </p>
                            <span className="text-black indent-10 md:indent-0">หมายถึง ปรัชญาและปณิธานของวิทยาลัย </span>
                        </div>
                        <div className="lg:flex justify-center gap-3 text-xs md:text-base lg:text-lg text-center">
                            <p className="text-[#6CB4EE]">ยอดปราสาทหิน </p>
                            <span className="text-black indent-10 lg:indent-0"> หมายถึง ความสูงสุด ความแข็งแกร่งอุตสาหะ พากเพียร ศิลปและวัฒนธรรมท้องถิ่น </span>
                        </div>
                        <div className="text-xs md:text-base lg:text-lg text-center">
                            <p className="text-[#6CB4EE]">ปรัชญาและปณิธานของวิทยาลัย </p>
                            <span className="text-black italic text-center ">&quot; ฝีมือ เทคโนโลยี วิจัย วัฒนธรรม คุณธรรม ความก้าวหน้า ความสำเร็จและสนองสังคม &quot;</span>
                        </div>
                    </div>

                    <div className="my-5 text-center border-b-2 border-gray-500/30 pb-5">
                        <p className="text-[#2797FF] text-base md:text-2xl mb-5">สีของวิทยาลัยเทคโนโลยีพนมวันท์</p>
                        <div className="bg-[#1F306A] w-28 h-9 md:w-60 md:h-20 mx-auto "></div>
                        <div className="bg-[#FFBF00] w-28 h-9 md:w-60 md:h-20 mx-auto "></div>

                        <p className="text-black text-xs md:text-base lg:text-lg indent-5 md:indent-8 my-3">สีของวิทยาลัยเทคโนโลยีพนมวันท์ คือ น้ำเงินและเหลืองทอง</p>

                        <p className="text-[#80bfff] mr-2 text-xs md:text-base lg:text-lg">
                            น้ำเงิน
                            <span className="text-black text-xs md:text-base lg:text-lg indent-5 "
                            >
                                &nbsp;&nbsp;หมายถึง ความลุ่มลึก ความหนักแน่น มั่นคงในเชิง วิชาการ เปรียบ เสมือนน้ำทะเลสีน้ำเงิน
                            </span>
                        </p>

                        <p className="text-[#FFBF00] mr-2 text-xs md:text-base lg:text-lg">
                            เหลืองทอง
                            <span className="mb-10 text-black text-xs md:text-base lg:text-lg indent-5 "
                            >
                                &nbsp;&nbsp;หมายถึง ความมีชื่อเสียง คุณธรรม คุณภาพ และเป็นเอกลักษณ์ ของความยิ่งใหญ่
                            </span>
                        </p>
                    </div>

                    <div className="flex justify-center ">
                        <img className="w-1/2" src="/img/advisor/borad285.png" alt="" style={{
                            WebkitFilter: 'drop-shadow(10px 10px 5px #000000)',
                            filter: 'drop-shadow(10px 10px 5px #000000)'
                        }} />
                    </div>
                </div>

            </div>
        </TheLayout>
    );
}
