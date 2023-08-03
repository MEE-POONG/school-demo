import { Inter } from "next/font/google";
import RootLayout from "@/components/layout";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
    return (
        <RootLayout>

            {/* banner คณะและหลักสูตร */}
            <div className="relative">
                <img src="/img/about/building.png" alt="" />
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
                        <h1 className="text-[#6CB4EE] font-bold text-2xl md:text-4xl">วิทยาลัยเทคโนโลยีพนมวันท์</h1>
                        <img className='py-4' src="/img/school/panomtext.png" alt="" />
                    </div>

                    {/* ข้อมูลสถาบัน  */}

                    <h1 className="text-[#2797FF] text-2xl md:text-3xl py-5">ข้อมูลสถาบัน</h1>

                    <div className="text-white">
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
                    <h1 className="text-[#2797FF] text-xl md:text-3xl py-5">ตราสัญลักษณ์ของวิทยาลัยเทคโนโลยีพนมวันท์</h1>
                    <div>
                        <img className='w-80 h-80 p-12' src="/img/school/logo panomwan.png" alt="" />
                        <p className="mb-10 text-white">
                            {'\u00A0\u00A0\u00A0\u00A0'}สัญลักษณ์ของวิทยาลัยเทคโนโลยีพนมวันท์มีเครื่องหมายเป็นรูปตรา
                            วงกลม ภานในวงกลม เป็นรูปดอกบัวบาน 8  กลีบล้อมรอบ
                            ปราสาทหิน
                        </p>

                        <div className="md:flex">
                            <div className="text-[#6CB4EE] mr-2">ดอกบัวบาน 8 กลีบ </div><div className="text-white">หมายถึง ทางแห่งความสำเร็จมรรค 8 </div>
                        </div>
                        <div className="md:flex">
                            <div className="text-[#6CB4EE] mr-2">กลีบบัวทั้ง 8 </div><div className="text-white">หมายถึง ปรัชญาและปณิธานของวิทยาลัย </div>
                        </div>
                        <div className="md:flex">
                            <div className="text-[#6CB4EE] mr-2">ยอดปราสาทหิน </div><div className="text-white"> หมายถึง ความสูงสุด ความแข็งแกร่งอุตสาหะ พากเพียร ศิลปและวัฒนธรรมท้องถิ่น </div>
                        </div>
                        <div className="md:flex">
                            <div className="text-[#6CB4EE] mr-2">ปรัชญาและปณิธานของวิทยาลัย </div><div className="text-white"> ฝีมือ เทคโนโลยี วิจัย วัฒนธรรม คุณธรรม ความก้าวหน้า ความสำเร็จและสนองสังคม </div>
                        </div>
                    </div>

                    {/* สีของวิทยาลัยเทคโนโลยีพนมวันท์  */}
                    <h1 className="text-[#2797FF] text-xl md:text-3xl py-5">สีของวิทยาลัยเทคโนโลยีพนมวันท์</h1>
                    <div className="p-10">
                        <div className="bg-[#1F306A] w-60 h-20"></div>
                        <div className="bg-[#FFBF00] w-60 h-20"></div>
                    </div>


                    <div className="md:flex">
                        <div className="text-white">สีของวิทยาลัยเทคโนโลยีพนมวันท์ คือ น้ำเงินและเหลืองทอง</div>
                    </div>
                    <div className="md:flex">
                        <div className="text-[#005cb8] mr-2">น้ำเงิน</div><div className="text-white">หมายถึง ความลุ่มลึก ความหนักแน่น มั่นคงในเชิง วิชาการ เปรียบ เสมือนน้ำทะเลสีน้ำเงิน  </div>
                    </div>
                    <div className="md:flex">
                        <div className="text-[#FFBF00] mr-2 ">เหลืองทอง </div><div className="mb-20 text-white"> หมายถึง ความมีชื่อเสียง คุณธรรม คุณภาพ และเป็นเอกลักษณ์ ของความยิ่งใหญ่ </div>
                    </div>









                    {/* ท่อนคณะกรรมการ */}
                    {/* แทบ คณะกรรมการสภาวิทยาลัย */}
                    <div className="flex justify-center">
                        <div className="bg-[#2797FF] w-full h-32  flex justify-center  flex-col mb-10 rounded-xl">
                            <div className="text-white text-2xl  md:text-4xl text-center mb-2">
                                <h1>คณะกรรมการสภาวิทยาลัย</h1>
                            </div>
                            <div className="text-white text-lg md:text-2xl text-center">
                                <h5>รายนามคณะกรรมการสภาวิทยาลัย</h5>
                            </div>
                        </div>
                    </div>
                    {/*  */}

                    {/* นายกสภาวิทยาลัย  */}
                    <div className="columns-1">
                        <div className="items-center justify-center flex flex-col">
                            <h1 className="text-[#2797FF] font-bold mb-2">นายกสภาวิทยาลัย</h1>
                            <img src="https://static.wikia.nocookie.net/heroes-and-villain/images/8/8b/Snape_%281%29.jpg" alt="" />
                            <h5 className="text-white text-sm mt-2 ">ศาสตราจารย์ ดร.บุญทัน ดอกไธสง</h5>
                        </div>
                    </div>
                    {/*  */}



                    {/* กรรมการสภาวิทยาลัย อธิการบดี  */}
                    <div className="columns-1">
                        <div className="items-center justify-center flex flex-col mt-10">
                            <h1 className="text-[#2797FF] font-bold mb-2">กรรมการสภาวิทยาลัย อธิการบดี</h1>
                            <img src="https://static.wikia.nocookie.net/heroes-and-villain/images/8/8b/Snape_%281%29.jpg" alt="" />
                            <h5 className="text-white text-sm mt-2 ">ดร.พิสิษฐ์ ศิริรักษ์</h5>
                        </div>
                    </div>
                    {/*  */}

                    {/* กรรมการสภาวิทยาลัย  */}
                    <h1 className="text-[#2797FF] font-bold mb-2 text-center py-12">กรรมการสภาวิทยาลัย</h1>

                    <div className="columns-1 md:columns-4">
                        <div className="items-center justify-center flex flex-col ">
                            <img src="https://static.wikia.nocookie.net/heroes-and-villain/images/8/8b/Snape_%281%29.jpg" alt="" />
                            <h5 className="text-white text-sm mt-2 ">ดร.อินทร์ จันทร์เจริญ</h5>
                        </div>

                        <div className="items-center justify-center flex flex-col mt-10">
                            <img src="https://static.wikia.nocookie.net/heroes-and-villain/images/8/8b/Snape_%281%29.jpg" alt="" />
                            <h5 className="text-white text-sm mt-2 ">ศ.ดร.จุลละพงษ์ จุลละโพธิ์</h5>
                        </div>

                        <div className="items-center justify-center flex flex-col mt-10">
                            <img src="https://static.wikia.nocookie.net/heroes-and-villain/images/8/8b/Snape_%281%29.jpg" alt="" />
                            <h5 className="text-white text-sm mt-2 ">ดร.ทิวา พงษ์ธนไพบูลย์</h5>
                        </div>

                        <div className="items-center justify-center flex flex-col mt-10">
                            <img src="https://static.wikia.nocookie.net/heroes-and-villain/images/8/8b/Snape_%281%29.jpg" alt="" />
                            <h5 className="text-white text-sm mt-2 ">รอง ศ.ดร.ชัยยุทธ ช่างสาร</h5>
                        </div>


                        <div className="items-center justify-center flex flex-col ">
                            <img src="https://static.wikia.nocookie.net/heroes-and-villain/images/8/8b/Snape_%281%29.jpg" alt="" />
                            <h5 className="text-white text-sm mt-2 ">ผู้ช่วย ศ.ฉัตรชัย เธียรหิรัญ</h5>
                        </div>

                        <div className="items-center justify-center flex flex-col mt-10">
                            <img src="https://static.wikia.nocookie.net/heroes-and-villain/images/8/8b/Snape_%281%29.jpg" alt="" />
                            <h5 className="text-white text-sm mt-2 ">ดร.วราภรณ์ สีหนาท</h5>
                        </div>

                        <div className="items-center justify-center flex flex-col mt-10">
                            <img src="https://static.wikia.nocookie.net/heroes-and-villain/images/8/8b/Snape_%281%29.jpg" alt="" />
                            <h5 className="text-white text-sm mt-2 ">ดร.รอง ศ.ดร.อัญชลี สารรัตนะ</h5>
                        </div>

                        <div className="items-center justify-center flex flex-col mt-10">
                            <img src="https://static.wikia.nocookie.net/heroes-and-villain/images/8/8b/Snape_%281%29.jpg" alt="" />
                            <h5 className="text-white text-sm mt-2 ">รอง ศ.ดร.ปพฤกษ์ อุตสาหะวาณิชกิจ</h5>
                        </div>


                    </div>
                    {/*  */}



                    {/* เลขานุการสภาวิทยาลัย  */}
                    <div className="columns-1">
                        <div className="items-center justify-center flex flex-col mt-20 ">
                            <h1 className="text-[#2797FF] font-bold mb-2">เลขานุการสภาวิทยาลัย</h1>
                            <img src="https://static.wikia.nocookie.net/heroes-and-villain/images/8/8b/Snape_%281%29.jpg" alt="" />
                            <h5 className="text-white text-sm mt-2 ">ผู้ช่วย ศ.กุลธนี ศิริรักษ์</h5>
                        </div>
                    </div>
                    {/*  */}



                    {/* กรรมการสภาวิทยาลัย อธิการบดี  */}
                    <div className="columns-1">
                        <div className="items-center justify-center flex flex-col mt-10">
                            <h1 className="text-[#2797FF] font-bold mb-2">ผู้ช่วยเลขานุการสภามหาวิทยาลัย</h1>
                            <img src="https://static.wikia.nocookie.net/heroes-and-villain/images/8/8b/Snape_%281%29.jpg" alt="" />
                            <h5 className="text-white text-sm mt-2 ">ผู้ช่วย ศ.ดร.สมพร เจนคุณาวัฒน์</h5>
                        </div>
                    </div>
                    {/*  */}






                    {/* div container */}
                </div>
                {/* ปิด div พื้นหลังใหญ่ */}
            </div>
            {/* แทบ รู้จักพนมวันท์ */}
            <div className=''>
                <div className="bg-[#1F306A] bg-opacity-80 flex justify-center items-center">
                    <h1 className='md:text-3xl text-white text-center py-10 px-2'>
                        ติดต่อขอคำปรึกษา...
                    </h1>
                    <Link href="advisor" >
                        <button className="bg-[#FFBF00] rounded-lg text-white ml-1 w-14 md:w-24  md:text-3xl">คลิก</button>
                    </Link>
                </div>

            </div>
        </RootLayout>
    );
}
