import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'
import RootLayout from '@/components/layout'

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const router = useRouter();

  const [regFaculty, setRegFaculty] = useState<string>("");
  const [regMajor, setRegMajor] = useState<string>("");


  

  useEffect(() => {
    axios.get("/api/registerForm").then((response) => {
      setUsers(response.data);
      console.log(response.data)
    });
  }, []);



  const handleSubmit = (event:any) => {
    event.preventDefault();

    const data = {
      regIdpersonal: event.target.regIdpersonal.value,
      regBirth: event.target.regBirth.value,
      regPrefix: event.target.regPrefix.value,
      regSex: event.target.regSex.value,
      regNation: event.target.regNation.value,
      regName: event.target.regName.value,
      regLastname: event.target.regLastname.value,
      regEname: event.target.regEname.value,
      regElastname: event.target.regElastname.value,
      regPhone: event.target.regPhone.value,
      regEmail: event.target.regEmail.value,
      regSchool: event.target.regSchool.value,
      regDegree: event.target.regDegree.value,
      regGpa: event.target.regGpa.value,
      regProgram: event.target.regProgram.value,
      regFaculty: event.target.regFaculty.value,
      regMajor: event.target.regMajor.value,
    };

    axios.post("/api/registerForm", data).then((response) => {
      console.log("done!")
      router.push("/register/form");
    });
  };




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
        
        <div className='bg-[#1F306A] w-full h-1  mb-7  '>
        </div>
        <div className=''>
          <form onSubmit={handleSubmit}>
            {/* ข้อมูลผู้สมัคร  */}
              <div className=' outline outline-1  drop-shadow-xl shadow-xl'>

                      <div className='bg-black bg-opacity-80 w-full h-[50px] drop-shadow-md  shadow-md '>
                          <h1 className='text-3xl text-[#FFBF00] p-2'> ข้อมูลผู้สมัคร</h1>
                      </div>

                    
                          <div className=' md:grid md:grid-cols-12 grid-cols-1 pb-2 pt-4 '>
                              {/* บัตรประชาชน กับ วันเดือนปี */}
                            
                              <div className='col-start-1 col-end-4 md:md:text-right p-3 my-2'>
                                <label className=''>บัตรประจำตัวประชาชน:</label>    
                              </div>
                              <div className=' col-span-2 my-2'>
                                <input name='regIdpersonal'  type="text" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white" /> 
                              </div>
                              <div className='col-start-6 col-end-8 md:md:text-right p-3 my-2 '>
                                <label className=''>วัน/เดือน/ปีเกิด:</label>    
                              </div>
                              <div className='col-span-2 my-2'>
                                <input name='regBirth' type="date" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-2  leading-tight focus:outline-none focus:bg-white" /> 
                              </div>


                              {/* คำนำหน้า เพศ สัญชาติ */}
                            
                              <div className='col-start-2 col-end-4 md:md:text-right p-3 my-2'>
                                <label className=''>คำนำหน้าชื่อ:</label>    
                              </div>
                              <div className=' col-span-1 md:col-span-2  md:my-2'>
                                    <select name='regPrefix' className=' block w-full md:w-1/2 bg-gray-200 text-gray-700 border border-black rounded py-3 px-2  leading-tight focus:outline-none focus:bg-white'>
                                      <option>นาย</option>
                                      <option>นาง</option>
                                      <option>นางสาว</option>
                                    </select>
                              </div>
                              <div className='col-start-5 md:col-start-6 md:text-right p-3 my-2 '>
                                <label className=''>เพศ:</label>    
                              </div>
                              <div className='col-span-1 md:col-span-2 my-2'>
                                    <select name='regSex' className=' block w-full md:w-28   bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white'>
                                      <option>ชาย</option>
                                      <option>หญิง</option>
                                    </select>
                              </div>

                              <div className='col-start-7 md:col-start-9 md:text-right p-3 my-2 '>
                                <label className=''>สัญชาติ: </label>    
                              </div>
                              <div className='col-span-2 my-2 md:ml-2'>
                                <input name='regNation' type="text" className="appearance-none block w-full md:w-2/3 bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white" /> 
                              </div>


                              {/* ชื่อ นามสกุล */}
                            
                              <div className='col-start-2 col-end-4 md:text-right p-3 my-2'>
                                <label className=''>ชื่อ:</label>    
                              </div>
                              <div className=' col-span-2 my-2'>
                                <input name='regName' type="text" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white" /> 
                              </div>
                              <div className='col-start-6 col-end-8 md:text-right p-3 my-2 '>
                                <label className=''>นามสกุล:</label>    
                              </div>
                              <div className='col-span-2 my-2'>
                                <input name='regLastname' type="text" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white" /> 
                              </div>


                              {/* Name Surname */}
                            
                              <div className='col-start-2 col-end-4 md:text-right p-3 my-2'>
                                <label className=''>Name:</label>    
                              </div>
                              <div className=' col-span-2 my-2'>
                                <input name='regEname' type="text" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white" /> 
                              </div>
                              <div className='col-start-6 col-end-8 md:text-right p-3 my-2 '>
                                <label className=''>Surname:</label>    
                              </div>
                              <div className='col-span-2 my-2'>
                                <input name='regElastname' type="text" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white" /> 
                              </div>
                            
                            {/* เบอร์โทร อีเมลล์ */}
                            
                            <div className='col-start-2 col-end-4 md:text-right p-3 my-2'>
                                <label className=''>เบอร์โทรศัพท์ติดต่อ:</label>    
                              </div>
                              <div className=' col-span-2 my-2'>
                                <input name='regPhone' type="text" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white" /> 
                              </div>
                              <div className='col-start-7 col-end-8 md:text-right p-3 my-2 '>
                                <label className=''>Email:</label>    
                              </div>
                              <div className='col-span-2 my-2 '>
                                <input name='regEmail' type="email" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white" /> 
                              </div>




                          </div>

      
              </div>



              {/* ประวัติการศึกษา  */}
              <div className=' outline outline-1  drop-shadow-xl shadow-xl my-10 pb-2 '>

                      <div className='bg-black bg-opacity-80 w-full h-[50px] drop-shadow-md  shadow-md '>
                          <h1 className='text-3xl text-[#FFBF00] p-2'>ประวัติการศึกษา</h1>
                      </div>

          
                          <div className='md:grid md:grid-cols-12 grid-cols-1 pt-4 '>
                              {/* สถาบันการศึกษา */}
                            
                              <div className='col-start-2 col-end-4 md:text-right p-3 my-2'>
                                <label className=''>สถาบันการศึกษา:</label>    
                              </div>
                              <div className=' col-span-6 my-2'>
                                <input name='regSchool' type="text" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white" /> 
                              </div>
                              


                              {/* คำนำหน้า เพศ สัญชาติ */}
                            
                              <div className='col-start-2 col-end-4 md:text-right p-3 my-2'>
                                <label className=''>คำนำหน้าชื่อ:</label>    
                              </div>
                              <div className=' col-span-2 my-2'>
                                    <select name='regDegree' className='  text-sm block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white'>
                                      <option>มัธยมศึกษาปีที่ 6</option>
                                      <option>ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.)</option>
                                    </select>
                              </div>
                              <div className='col-start-6 col-end-8 md:text-right p-3 my-2 '>
                                <label className=''>เกรดเฉลี่ย</label>    
                              </div>
                              <div className='col-span-2 my-2'>
                                <input name='regGpa' type="text" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white" /> 
                              </div>
                          </div>

                
              </div>




              
              {/* คณะ/สาขา  */}
              <div className=' outline outline-1  drop-shadow-xl shadow-xl my-10 pb-2 '>

                      <div className='bg-black bg-opacity-80 w-full h-[50px] drop-shadow-md  shadow-md '>
                          <h1 className='text-3xl text-[#FFBF00] p-2'>คณะ/สาขา</h1>
                      </div>

                    
                          <div className='md:grid md:grid-cols-12 grid-cols-1 '>
                              {/* หลักสูตร */}
                            
                              <div className='col-start-2 col-end-4 md:text-right p-3 my-2'>
                                <label className=''>หลักสูตร:</label>    
                              </div>
                              <div className='md:col-span-1 md:my-2 md:self-center md:flex md:justify-center ml-5 flex items-center'>
                                <input name='regProgram' value="4ปี" type="radio" className="w-5 h-5" /> 
                                <label className='ml-4 md:ml-1 md:text-sm '>4 ปี</label>  
                              </div>
                              
                              <div className='md:col-span-2 md:my-2 md:self-center md:flex mt-2 ml-5 flex items-center '>
                                <input name='regProgram' value="2 ปี (ต่อเนื่อง)" type="radio"className="w-5 h-5 " /> 
                                <label className='ml-4 md:ml-1 md:text-sm'>2 ปี (ต่อเนื่อง)</label>    
                              </div>
                              
                              


                              {/* คณะ และ สาขา */}
                            
                              <div className='col-start-2 col-end-4 md:text-right p-3 my-2'>
                                <label className=''>คณะ:</label>    
                              </div>
                              <div className=' col-span-2 my-2'>
                                    <select name='regFaculty' className='  text-sm block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white'>
                                      <option>คณะบริหารธุรกิจ</option>
                                      <option>คณะวิทยาศาสตร์และเทคโนโลยี</option>
                                      <option>คณะศิลปศาสตร์</option>
                                      <option>คณะวิศวกรรมศาสตร์ </option>
                                    </select>
                              </div>
                              <div className='col-start-6 col-end-8 md:text-right p-3 my-2 '>
                                <label className=''>สาขา:</label>    
                              </div>
                              <div className='col-span-2 my-2'>
                                    <select name='regMajor' className='  text-sm block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white'>
                                      <option>สาขาวิชาการจัดการอุตสาหกรรมและโลจิสติกส์ (บธ.บ)</option>
                                      <option>สาขาวิชาการจัดการโรงแรมและการท่องเที่ยว (บธ.บ.)</option>
                                      <option>สาขาวิชาระบบสารสนเทศ (บธ.บ.)</option>
                                      <option>สาขาวิชาการจัดการ (บธ.บ.)</option>
                                      <option>สาขาวิชาการบัญชี (บช.บ.)</option>
                                      <option>สาขาวิชาสาธารณสุขศาสตร์ (สบ.)</option>
                                      <option>สาขาวิชารัฐประศาสนศาสตร์ (รป.บ)</option>
                                      <option>สาขาวิชาวิศวกรรมยานยนต์ (วศ.บ.)</option>
                                    </select>
                              </div>


                              


                          </div>

                    
                      
              </div>

            {/* ปุ่มส่งใบสมัคร */}
              <div className='flex justify-center'>
                <button type="submit" value="Submit" className='bg-black bg-opacity-80 text-[#FFBF00] rounded w-56 h-20 text-3xl'>ส่งใบสมัคร</button>
              </div>

          </form>
        </div>


    

    </div>


    </RootLayout>
  )
}
