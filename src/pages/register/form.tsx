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
                <h1 className='text-2xl  md:text-5xl text-[#1F306A]'>กรอกข้อมูล</h1>
              </div>

              <div className='self-end'>
                <h1 className='text-2xl  md:text-3xl  text-[#1F306A]'>กลับ</h1>
              </div>
              
        </div>
        
        <div className='bg-[#1F306A] w-full h-1  mb-7 '>
        </div>






        <div className=''>
           {/* ข้อมูลผู้สมัคร  */}
            <div className=' outline outline-1  drop-shadow-xl shadow-xl'>

                    <div className='bg-[#91A3B0] w-full h-[50px] drop-shadow-md  shadow-md '>
                        <h1 className='text-3xl text-[#1F306A] p-2'> ข้อมูลผู้สมัคร</h1>
                    </div>

                    <form action="">
                        <div className='grid grid-cols-12 '>
                            {/* บัตรประชาชน กับ วันเดือนปี */}
                          
                            <div className='col-start-2 col-end-4 text-right p-3 my-2'>
                              <label className=''>บัตรประจำตัวประชาชน:</label>    
                            </div>
                            <div className=' col-span-2 my-2'>
                              <input type="text" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white" /> 
                            </div>
                            <div className='col-start-6 col-end-8 text-right p-3 my-2 '>
                              <label className=''>วัน/เดือน/ปีเกิด:</label>    
                            </div>
                            <div className='col-span-2 my-2'>
                              <input type="date" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white" /> 
                            </div>


                            {/* คำนำหน้า เพศ สัญชาติ */}
                          
                            <div className='col-start-2 col-end-4 text-right p-3 my-2'>
                              <label className=''>คำนำหน้าชื่อ:</label>    
                            </div>
                            <div className=' col-span-1 my-2'>
                                  <select className=' block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white'>
                                    <option>นาย</option>
                                    <option>นาง</option>
                                    <option>นางสาว</option>
                                  </select>
                            </div>
                            <div className='col-start-5 text-right p-3 my-2 '>
                              <label className=''>เพศ:</label>    
                            </div>
                            <div className='col-span-1 my-2'>
                                  <select className=' block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white'>
                                    <option>นาย</option>
                                    <option>นาง</option>
                                    <option>นางสาว</option>
                                  </select>
                            </div>

                            <div className='col-start-7 text-right p-3 my-2 '>
                              <label className=''>สัญชาติ:</label>    
                            </div>
                            <div className='col-span-2 my-2'>
                              <input type="text" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white" /> 
                            </div>


                            {/* ชื่อ นามสกุล */}
                          
                            <div className='col-start-2 col-end-4 text-right p-3 my-2'>
                              <label className=''>ชื่อ:</label>    
                            </div>
                            <div className=' col-span-2 my-2'>
                              <input type="text" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white" /> 
                            </div>
                            <div className='col-start-6 col-end-8 text-right p-3 my-2 '>
                              <label className=''>นามสกุล:</label>    
                            </div>
                            <div className='col-span-2 my-2'>
                              <input type="text" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white" /> 
                            </div>


                            {/* Name Surname */}
                          
                            <div className='col-start-2 col-end-4 text-right p-3 my-2'>
                              <label className=''>Name:</label>    
                            </div>
                            <div className=' col-span-2 my-2'>
                              <input type="text" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white" /> 
                            </div>
                            <div className='col-start-6 col-end-8 text-right p-3 my-2 '>
                              <label className=''>Surname:</label>    
                            </div>
                            <div className='col-span-2 my-2'>
                              <input type="text" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white" /> 
                            </div>
                          
                          {/* เบอร์โทร อีเมลล์ */}
                          
                          <div className='col-start-2 col-end-4 text-right p-3 my-2'>
                              <label className=''>เบอร์โทรศัพท์ติดต่อ</label>    
                            </div>
                            <div className=' col-span-2 my-2'>
                              <input type="text" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white" /> 
                            </div>
                            <div className='col-start-6 col-end-8 text-right p-3 my-2 '>
                              <label className=''>Email</label>    
                            </div>
                            <div className='col-span-2 my-2'>
                              <input type="email" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white" /> 
                            </div>




                        </div>

                    </form>
            </div>



            {/* ประวัติการศึกษา  */}
            <div className=' outline outline-1  drop-shadow-xl shadow-xl my-10'>

                    <div className='bg-[#91A3B0] w-full h-[50px] drop-shadow-md  shadow-md '>
                        <h1 className='text-3xl text-[#1F306A] p-2'>ประวัติการศึกษา</h1>
                    </div>

                    <form action="">
                        <div className='grid grid-cols-12 '>
                            {/* สถาบันการศึกษา */}
                          
                            <div className='col-start-2 col-end-4 text-right p-3 my-2'>
                              <label className=''>สถาบันการศึกษา:</label>    
                            </div>
                            <div className=' col-span-6 my-2'>
                              <input type="text" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white" /> 
                            </div>
                            


                            {/* คำนำหน้า เพศ สัญชาติ */}
                          
                            <div className='col-start-2 col-end-4 text-right p-3 my-2'>
                              <label className=''>คำนำหน้าชื่อ:</label>    
                            </div>
                            <div className=' col-span-2 my-2'>
                                  <select className='  text-sm block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white'>
                                    <option>มัธยมศึกษาปีที่ 6</option>
                                    <option>ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.)</option>
                                  </select>
                            </div>
                            <div className='col-start-6 col-end-8 text-right p-3 my-2 '>
                              <label className=''>เกรดเฉลี่ย</label>    
                            </div>
                            <div className='col-span-2 my-2'>
                              <input type="text" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white" /> 
                            </div>


                            


                        </div>

                    </form>
            </div>




            
            {/* คณะ/สาขา  */}
            <div className=' outline outline-1  drop-shadow-xl shadow-xl my-10'>

                    <div className='bg-[#91A3B0] w-full h-[50px] drop-shadow-md  shadow-md '>
                        <h1 className='text-3xl text-[#1F306A] p-2'>คณะ/สาขา</h1>
                    </div>

                    <form action="">
                        <div className='grid grid-cols-12 '>
                            {/* หลักสูตร */}
                          
                            <div className='col-start-2 col-end-4 text-right p-3 my-2'>
                              <label className=''>หลักสูตร:</label>    
                            </div>
                            <div className='col-span-1 my-2 self-center flex justify-center'>
                              <input type="radio" className="w-5 h-5" /> 
                              <label className='ml-4'>4 ปี</label>  
                            </div>
                            
                            <div className='col-span-2 my-2 self-center flex justify-center'>
                              <input type="radio"className="w-5 h-5" /> 
                              <label className='ml-4 '>2 ปี (ต่อเนื่อง)</label>    
                            </div>
                            
                            


                            {/* คำนำหน้า เพศ สัญชาติ */}
                          
                            <div className='col-start-2 col-end-4 text-right p-3 my-2'>
                              <label className=''>คำนำหน้าชื่อ:</label>    
                            </div>
                            <div className=' col-span-2 my-2'>
                                  <select className='  text-sm block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white'>
                                    <option>มัธยมศึกษาปีที่ 6</option>
                                    <option>ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.)</option>
                                  </select>
                            </div>
                            <div className='col-start-6 col-end-8 text-right p-3 my-2 '>
                              <label className=''>เกรดเฉลี่ย:</label>    
                            </div>
                            <div className='col-span-2 my-2'>
                              <input type="text" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white" /> 
                            </div>


                            


                        </div>

                    </form>
            </div>


        



        </div>




    </div>


    </RootLayout>
  )
}
