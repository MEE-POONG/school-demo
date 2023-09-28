import { Inter } from "next/font/google";
import TheLayout from "@/components/TheLayout";
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
            {/* banner คณะและหลักสูตร */}

        
                <img src="/img/about/bg-about.png" className="filter brightness-50 w-full h-[200px] sm:h-[200px] md:h-[300px] lg:h-[400px] xl:h-[600px] " alt="" />
                <div className="absolute inset-x-0 top-[20%]  sm:top-[65%] md:top-[35%] lg:top-[40%] xl:top-[40%]  md:h-40 text-center">
                    <h2 className='text-[#fbbf24] text-3xl md:text-4xl lg:text-5xl xl:text-6xl drop-shadow-xl font-semibold '>วิทยาลัยเทคโนโลยีพนมวันท์</h2>
                </div>
           

            {/* พื้นหลังใหญ่นอก container */}
            <div className=" container mx-auto my-6 md:my-20 px-2">
                <h2 className='text-[#fbbf24] text-center py-5 text-lg md:text-3xl lg:text-5xl drop-shadow-xl font-semibold'>
                    รู้จัก”พนมวันท์”
                </h2>
                {/* div container */}
                <div className="bg-black bg-opacity-80 p-4 text-xl md:p-10 rounded-lg md:mt-5">

                    {/* วิทยาลัยเทคโนโลยีพนมวันท์ และรูป  */}
                    <div className="w-full h-[150px] md:h-auto">
                        <img className='object-cover h-full rounded-lg' src="/img/school/panomtext.png" alt="" />
                    </div>

                    {/* ข้อมูลสถาบัน  */}
                    <div className=" mt-5 md:mt-10 text-justify border-b-2 border-gray-500/30">
                        <h4 className="text-[#2797FF] text-base md:text-2xl mb-2">ข้อมูลสถาบัน</h4>
                        <p className="mb-4 indent-5 md:indent-8 text-white text-xs md:text-base lg:text-lg">
                            วิทยาลัยเทคโนโลยีพนมวันท์ ก่อตั้งขึ้นเมื่อวันที่ 21 พฤศจิกายน 2550 ด้วยเจตนารมณ์ที่ตระหนักถึงความสำคัญของการศึกษา
                            ในระดับปริญญาตรีอันจะนำไปสู่การพัฒนาทางด้านความคิดทักษะเชิงวิชาชีพมนุษยสัมพันธ์และคุณธรรม
                            ซึ่งจะช่วยส่งเสริมและพัฒนาเยาวชนและประชาชนในท้องถิ่นโดยเฉพาะจังหวัดนครราชสีมาและจังหวัดใกล้เคียงรวมทั้งประเทศชาติ แบบยั่งยืน ดังนั้นวิทยาลัยเทคโนโลยีพนมวันท์ จึงจัดให้มีการเรียนการสอน โดยให้ความสำคัญกับการเตรียมความพร้อม
                            ในด้านศักยกาพและทรัพยากรสนับสนุนต่างๆเพื่อให้การจัดการเรีนการสอนเป็นไปอย่างมีประสิทธิภาพและบรรลุตามปนิธานที่ได้ตั้งไว้

                        </p>


                        <p className="mb-4 indent-5 md:indent-8 text-white text-xs md:text-base lg:text-lg">
                            วิทยาลัยได้เริ่มเปิดทำการสอนตั้งแต่ปีการศึกษา 2551 ซึ่งได้จัดการเรียนการสอนในหลักสูตรบริหารธุรกิจบัณทิต
                            และหลักสูตรบัญชีบัณฑิตด้วยความมุ่งมั่นของผู้ก่อตั้ง ผู้บริหาร และ คณาจารย์ที่จะพัฒนาวิทยาลัยเทคโนโลยีพนมวันท์ ให้มี
                            ความเจริญก้าวหน้าอย่างต่อเนื่องและมั่นคงสามารถผลิตบุคลากรที่มีคุณค่าต่อสังคมเพื่อตอบสนองต่อความต้องการของท้องถิ่น และประเทศชาติ พร้อมทั้งเป็นแหล่งข้อมูลเชิงวิชาการให้แก่ ชุมชนและท้องถิ่นทั้งนี้เพื่อให้วิทยาลัยฯ
                            ได้อย่างแท้จริงตามเจตนารมณ์ของการก่อตั้งวิทยาลัยเทคโนโลยีพนมวันท์

                        </p>
                    </div>

                    {/* ตราสัญลักษณ์ของวิทยาลัยเทคโนโลยีพนมวันท์  */}
                    <div className="mt-7 border-b-2 border-gray-500/30 pb-5">
                        <h4 className="text-[#2797FF] text-base md:text-2xl mb-1">ตราสัญลักษณ์</h4>
                        <h4 className="text-[#2797FF] text-base md:text-2xl mb-2">วิทยาลัยเทคโนโลยีพนมวันท์</h4>
                        <img className='w-28 md:w-36 my-5 mx-auto md:mx-0' src="/img/school/logo panomwan.png" alt="" />
                        <p className="mb-5 indent-5 md:indent-8 text-white text-xs md:text-base lg:text-lg">
                            สัญลักษณ์ของวิทยาลัยเทคโนโลยีพนมวันท์มีเครื่องหมายเป็นรูปตรา
                            วงกลม ภานในวงกลม เป็นรูปดอกบัวบาน 8  กลีบล้อมรอบ
                            ปราสาทหิน
                        </p>

                        <div className="md:flex gap-3 text-xs md:text-base lg:text-lg indent-5 md:indent-8">
                            <p className="text-[#6CB4EE]">ดอกบัวบาน 8 กลีบ</p>
                            <p className="text-white indent-10 md:indent-0">หมายถึง ทางแห่งความสำเร็จมรรค 8 </p>
                        </div>
                        <div className="md:flex gap-3 text-xs md:text-base lg:text-lg indent-5 md:indent-8">
                            <p className="text-[#6CB4EE]">กลีบบัวทั้ง 8 </p>
                            <p className="text-white indent-10 md:indent-0">หมายถึง ปรัชญาและปณิธานของวิทยาลัย </p>
                        </div>
                        <div className="lg:flex gap-3 text-xs md:text-base lg:text-lg indent-5 md:indent-8">
                            <p className="text-[#6CB4EE]">ยอดปราสาทหิน </p>
                            <p className="text-white indent-10 lg:indent-0"> หมายถึง ความสูงสุด ความแข็งแกร่งอุตสาหะ พากเพียร ศิลปและวัฒนธรรมท้องถิ่น </p>
                        </div>
                        <div className="text-xs md:text-base lg:text-lg indent-5 md:indent-8">
                            <p className="text-[#6CB4EE]">ปรัชญาและปณิธานของวิทยาลัย </p>
                            <p className="text-white italic text-center ">&quot; ฝีมือ เทคโนโลยี วิจัย วัฒนธรรม คุณธรรม ความก้าวหน้า ความสำเร็จและสนองสังคม &quot;</p>
                        </div>
                    </div>

                    {/* สีของวิทยาลัยเทคโนโลยีพนมวันท์  */}
                    <div className="my-5">
                        <h4 className="text-[#2797FF] text-base md:text-2xl mb-1">สีของวิทยาลัยเทคโนโลยีพนมวันท์</h4>
                        <div className="my-5">
                            <div className="bg-[#1F306A] w-28 h-9 md:w-60 md:h-20 mx-auto md:mx-0"></div>
                            <div className="bg-[#FFBF00] w-28 h-9 md:w-60 md:h-20 mx-auto md:mx-0"></div>
                        </div>


                        <div className="md:flex ml-4">
                            <p className="text-white text-xs md:text-base lg:text-lg indent-5 md:indent-8 mb-2">สีของวิทยาลัยเทคโนโลยีพนมวันท์ คือ น้ำเงินและเหลืองทอง</p>
                        </div>
                        <div className="md:flex ml-4">
                            <p className="text-[#80bfff] mr-2 text-xs md:text-base lg:text-lg">น้ำเงิน</p>
                            <p className="text-white text-xs md:text-base lg:text-lg indent-5 ">หมายถึง ความลุ่มลึก ความหนักแน่น มั่นคงในเชิง วิชาการ เปรียบ เสมือนน้ำทะเลสีน้ำเงิน  </p>
                        </div>
                        <div className="md:flex ml-4 mt-2">
                            <p className="text-[#FFBF00] mr-2 text-xs md:text-base lg:text-lg">เหลืองทอง </p>
                            <p className="mb-10 text-white text-xs md:text-base lg:text-lg indent-5 "> หมายถึง ความมีชื่อเสียง คุณธรรม คุณภาพ และเป็นเอกลักษณ์ ของความยิ่งใหญ่ </p>
                        </div>
                    </div>


                    {/* ท่อนคณะกรรมการ */}
                    <div className="">
                        {/* bg-black/25 */}
                        <div className="flex justify-center ">
                            {/* border-[12px] border-black shadow-[inset_5px_5px_50px_rgba(0,0,0,100)]  */}
                            <img src="/img/advisor/borad285.png" alt="" style={{
                                WebkitFilter: 'drop-shadow(10px 10px 5px #000000)',
                                filter: 'drop-shadow(10px 10px 5px #000000)'
                            }} />
                        </div>
                    </div>

                    {/* div container */}
                </div>
                {/* ปิด div พื้นหลังใหญ่ */}
            </div>
            {/* แทบ รู้จักพนมวันท์ */}

        </TheLayout>
    );
}
