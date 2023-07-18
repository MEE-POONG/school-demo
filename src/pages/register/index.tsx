import { Inter } from 'next/font/google'
import Navbar from '@/pages/navbar'
import RootLayout from '@/components/layout'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <RootLayout>

    <div className='container mx-auto md:py-24 py-12'>

        <div className='flex justify-between'>
              <div>
                <h1 className='text-2xl  md:text-5xl text-[#1F306A]'>สมัครเรียน</h1>
              </div>
              
        </div>
            <div className='bg-[#1F306A] w-full h-1  mb-7 '>
            </div>


        <div className='mb-12'>
            <img src="/img/register/regis.png" alt="" />
        </div>




        <div className=' grid grid-cols-1  md:grid-cols-2 md:gap-12 gap-12 p-6 '>
                  <div className=''>

                      <button type="button" className="  w-full text-2xl md:text-5xl text-white bg-[#8DB600] hover:bg-[#FFBF00] rounded-full  px-5 py-2.5  mb-10 ">
                          สมัครเรียน
                      </button>


                      <div className='relative'>
                          <div className='flex items-center justify-center'>
                              <div className='bg-[#1F306A] text-white text-xl rounded-md text-center h-10 p-2 absolute -top-6 left-1/2 transform -translate-x-1/2'>
                                  คุณสมบัติของผู้เรียน
                              </div>
                          </div>
                          <div className='outline outline-1 rounded-md p-8'>
                              <div className=" text-[#536878] py-1">
                                  เป็นผู้สำเร็จการศึกษาดังต่อไปนี้
                              </div>
                              <ul className="list-disc list-inside text-[#536878] ml-3 space-y-1">
                                  <li>มัธยมศึกษาตอนปลาย(ม.6) หรือ เทียบเท่า</li>
                                  <li>ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.)</li>
                                  <li>ประกาศนียบัตรวิชาชีพ (ปวช.)</li>
                              </ul>
                          </div>
                      </div>


                  </div> 
                        

                <div className=' outline outline-1  rounded-md'>
                        <div className='relative '>
                            <div className='flex items-center justify-center '>
                                <div className='bg-[#1F306A] text-white text-xl rounded-md text-center h-10 p-2 absolute -top-6 left-1/2 transform -translate-x-1/2 '>
                                    หลักฐานในการใช้สมัครเรียน
                                </div>
                            </div>
                            <div className='   p-12  '>
                                <div className=" text-[#536878] py-1">
                                    เป็นผู้สำเร็จการศึกษาดังต่อไปนี้
                                </div>
                                <ul className="list-disc list-inside text-[#536878] ml-3 space-y-1 ">
                                    <li>รูปถ่ายหน้าตรง ไม่สวมหมวก ไม่สวมแว่นตาดำ
                                        ขนาด 1 นิ้ว จำนวน 1 รูป</li>
                                    <li>สำเนาผลการเรียน ม.ปลาย หรือเทียบเท่า
                                        จำนวน 1 ชุด</li>
                                    <li>สำเนาทะเบียนบ้าน จำนวน 1 ชุด
                                        ( กรณียังไม่มีใบ รบ. ให้ใช้ใบรับรองผลการเรียนแทน )   </li>
                                    <li>สำเนาบัตรประจำตัวประชาชน จำนวน 1 ชุด</li>
                                </ul>

                            </div>
                        </div>  
                </div>
                

         </div>














            









    </div>


    </RootLayout>
  )
}
