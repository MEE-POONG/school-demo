import { Inter } from "next/font/google";
import RootLayout from "@/components/layout";
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
        <RootLayout>
            {isLoading && <Loading />} {/* แสดงหน้าต่าง Loading ถ้า isLoading เป็น true */}
            <title>about</title>
            {/* banner คณะและหลักสูตร */}
            <div className="relative">
                <img src="/img/about/build1.png" alt="" />
                <div className="absolute inset-0  mb-2 md:mb-24  flex justify-center items-center">
                    {/* <h1 className='text-white text-xl md:text-6xl lg:text-7xl '>
                    วิทยาลัยเทคโนโลยีพนมวันท์
                    </h1>    */}
                </div>
            </div>

            {/* แทบ รู้จักพนมวันท์ */}
            <div className=''>
                <div className="bg-[#1F306A] bg-opacity-80">
                    <h1 className='text-xl md:text-5xl text-[#FFBF00] text-center py-4 md:py-10'>
                        รู้จัก”พนมวันท์”
                    </h1>

                </div>

            </div>

            {/* พื้นหลังใหญ่นอก container */}
            <div className=" bg-black bg-opacity-80">
                {/* div container */}
                <div className="container mx-auto text-xl py-8 md:py-14 px-2 ">

                    {/* วิทยาลัยเทคโนโลยีพนมวันท์ และรูป  */}
                    <div>
                        {/* <h1 className="text-[#6CB4EE] font-bold text-2xl md:text-4xl">วิทยาลัยเทคโนโลยีพนมวันท์</h1> */}
                        <img className='py-4' src="/img/school/panomtext.png" alt="" />
                    </div>

                    {/* ข้อมูลสถาบัน  */}

                    <h1 className="text-[#2797FF] text-2xl md:text-3xl py-5 px-4">ข้อมูลสถาบัน</h1>

                    <div className="text-white px-4">
                        <p className="mb-4">
                            {'\u00A0\u00A0\u00A0\u00A0'}วิทยาลัยเทคโนโลยีพนมวันท์ ก่อตั้งขึ้นเมื่อวันที่ 21 พฤศจิกายน 2550 ด้วยเจตนารมณ์ที่ตระหนักถึงความสำคัญของการศึกษา
                            ในระดับปริญญาตรีอันจะนำไปสู่การพัฒนาทางด้านความคิดทักษะเชิงวิชาชีพมนุษยสัมพันธ์และคุณธรรม
                            ซึ่งจะช่วยส่งเสริมและพัฒนาเยาวชนและประชาชนในท้องถิ่นโดยเฉพาะจังหวัดนครราชสีมาและจังหวัดใกล้เคียงรวมทั้งประเทศชาติ แบบยั่งยืน ดังนั้นวิทยาลัยเทคโนโลยีพนมวันท์ จึงจัดให้มีการเรียนการสอน โดยให้ความสำคัญกับการเตรียมความพร้อม
                            ในด้านศักยกาพและทรัพยากรสนับสนุนต่างๆเพื่อให้การจัดการเรีนการสอนเป็นไปอย่างมีประสิทธิภาพและบรรลุตามปนิธานที่ได้ตั้งไว้

                        </p>


                        <p className="mb-4">
                            {'\u00A0\u00A0\u00A0\u00A0'}วิทยาลัยได้เริ่มเปิดทำการสอนตั้งแต่ปีการศึกษา 2551 ซึ่งได้จัดการเรียนการสอนในหลักสูตรบริหารธุรกิจบัณทิต
                            และหลักสูตรบัญชีบัณฑิตด้วยความมุ่งมั่นของผู้ก่อตั้ง ผู้บริหาร และ คณาจารย์ที่จะพัฒนาวิทยาลัยเทคโนโลยีพนมวันท์ ให้มี
                            ความเจริญก้าวหน้าอย่างต่อเนื่องและมั่นคงสามารถผลิตบุคลากรที่มีคุณค่าต่อสังคมเพื่อตอบสนองต่อความต้องการของท้องถิ่น และประเทศชาติ พร้อมทั้งเป็นแหล่งข้อมูลเชิงวิชาการให้แก่ ชุมชนและท้องถิ่นทั้งนี้เพื่อให้วิทยาลัยฯ
                            ได้อย่างแท้จริงตามเจตนารมณ์ของการก่อตั้งวิทยาลัยเทคโนโลยีพนมวันท์

                        </p>
                    </div>

                    {/* ตราสัญลักษณ์ของวิทยาลัยเทคโนโลยีพนมวันท์  */}
                    <h1 className="text-[#2797FF] text-xl md:text-3xl pt-5 pb-1 px-4">ตราสัญลักษณ์</h1>
                    <h1 className="text-[#2797FF] text-xl md:text-3xl pb-5 px-4">วิทยาลัยเทคโนโลยีพนมวันท์</h1>
                    <div>
                        <img className='w-80 h-80 p-12' src="/img/school/logo panomwan.png" alt="" />
                        <p className="mb-10 text-white px-4">
                            {'\u00A0\u00A0\u00A0\u00A0'}สัญลักษณ์ของวิทยาลัยเทคโนโลยีพนมวันท์มีเครื่องหมายเป็นรูปตรา
                            วงกลม ภานในวงกลม เป็นรูปดอกบัวบาน 8  กลีบล้อมรอบ
                            ปราสาทหิน
                        </p>

                        <div className="md:flex px-4">
                            <div className="text-[#6CB4EE] mr-2">ดอกบัวบาน 8 กลีบ </div><div className="text-white">หมายถึง ทางแห่งความสำเร็จมรรค 8 </div>
                        </div>
                        <div className="md:flex px-4">
                            <div className="text-[#6CB4EE] mr-2">กลีบบัวทั้ง 8 </div><div className="text-white">หมายถึง ปรัชญาและปณิธานของวิทยาลัย </div>
                        </div>
                        <div className="md:flex px-4">
                            <div className="text-[#6CB4EE] mr-2">ยอดปราสาทหิน </div><div className="text-white"> หมายถึง ความสูงสุด ความแข็งแกร่งอุตสาหะ พากเพียร ศิลปและวัฒนธรรมท้องถิ่น </div>
                        </div>
                        <div className="md:flex px-4">
                            <div className="text-[#6CB4EE] mr-2">ปรัชญาและปณิธานของวิทยาลัย </div><div className="text-white"> ฝีมือ เทคโนโลยี วิจัย วัฒนธรรม คุณธรรม ความก้าวหน้า ความสำเร็จและสนองสังคม </div>
                        </div>
                    </div>

                    {/* สีของวิทยาลัยเทคโนโลยีพนมวันท์  */}
                    <h1 className="text-[#2797FF] text-xl md:text-3xl py-5 px-4">สีของวิทยาลัยเทคโนโลยีพนมวันท์</h1>
                    <div className="p-10">
                        <div className="bg-[#1F306A] w-60 h-20"></div>
                        <div className="bg-[#FFBF00] w-60 h-20"></div>
                    </div>


                    <div className="md:flex px-4">
                        <div className="text-white">สีของวิทยาลัยเทคโนโลยีพนมวันท์ คือ น้ำเงินและเหลืองทอง</div>
                    </div>
                    <div className="md:flex px-4">
                        <div className="text-[#80bfff] mr-2">น้ำเงิน</div><div className="text-white">หมายถึง ความลุ่มลึก ความหนักแน่น มั่นคงในเชิง วิชาการ เปรียบ เสมือนน้ำทะเลสีน้ำเงิน  </div>
                    </div>
                    <div className="md:flex px-4">
                        <div className="text-[#FFBF00] mr-2 ">เหลืองทอง </div><div className="mb-10 text-white"> หมายถึง ความมีชื่อเสียง คุณธรรม คุณภาพ และเป็นเอกลักษณ์ ของความยิ่งใหญ่ </div>
                    </div>


                    {/* ท่อนคณะกรรมการ */}
                    <div className="bg-black/25">
                        <div className="flex justify-center border-[12px] border-black shadow-[inset_5px_5px_50px_rgba(0,0,0,100)] ">
                            <img src="/img/advisor/borad285.png" alt="" style={{
                                WebkitFilter: 'drop-shadow(5px 5px 5px #000000)',
                                filter: 'drop-shadow(5px 5px 5px #000000)'
                            }} />
                        </div>
                    </div>

                    {/* div container */}
                </div>
                {/* ปิด div พื้นหลังใหญ่ */}
            </div>
            {/* แทบ รู้จักพนมวันท์ */}

        </RootLayout>
    );
}
