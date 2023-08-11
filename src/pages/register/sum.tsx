
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'
import RootLayout from '@/components/layout'
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const inter = Inter({ subsets: ['latin'] })


interface FormData {
  regIdpersonal: string;
  regImg: string;
  // ... other properties ...
}

export default function Sum() {
    const router = useRouter();
    const [inid, setInid] = useState<String>("");
    const [formData, setFormData] = useState<FormData>({ regIdpersonal: "", regImg: "" });

    useEffect(() => {
      const idFromQuery = router.query.id;
      if (typeof idFromQuery === "string") {
          setInid(idFromQuery);

          // Make API call here using the updated inid value
          axios.get(`/api/registerForm/${idFromQuery}`)
              .then(response => {
                  // Handle the response data
                  console.log(response);
                  setFormData(response.data);
              })
              .catch(error => {
                  // Handle errors
              });
      }
  }, [router.query.id]);

  console.log(" ID ที่ถูกรับเข้ามา :", inid);
  console.log(" ข้อมูล ที่ดึงมาจาก api :", formData);



  return (
    <RootLayout>

      <div className='container mx-auto md:py-24 py-12'>



        <div className='flex justify-between'>
          <div>
            <h1 className='text-2xl  md:text-5xl text-[#1F306A]'>สรุปข้อมูล</h1>
          </div>

          <div className='self-end'>
            <h1 className='text-2xl  md:text-3xl  text-[#1F306A]'>กลับ</h1>
          </div>
        </div>

        <div className='bg-[#1F306A] w-full h-1  mb-7  '>
        </div>
        <div className=''>

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
                  <input readOnly defaultValue={formData.regIdpersonal} name='regIdpersonal' type="text" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white" />
                </div>
                <div className='col-start-6 col-end-8 md:md:text-right p-3 my-2 '>
                  <label className=''>วัน/เดือน/ปีเกิด:</label>
                </div>
                <div className='col-span-2 my-2'>
                  <input readOnly name='regBirth' type="date" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-2  leading-tight focus:outline-none focus:bg-white" />
                </div>


                {/* คำนำหน้า เพศ สัญชาติ */}

                <div className='col-start-2 col-end-4 md:md:text-right p-3 my-2'>
                  <label className=''>คำนำหน้าชื่อ:</label>
                </div>
                <div className=' col-span-1 md:col-span-2  md:my-2'>
                  <input readOnly name='regPrefix' className=' block w-full md:w-1/2 bg-gray-200 text-gray-700 border border-black rounded py-3 px-2  leading-tight focus:outline-none focus:bg-white'>
                  </input>
                </div>
                <div className='col-start-5 md:col-start-6 md:text-right p-3 my-2 '>
                  <label className=''>เพศ:</label>
                </div>
                <div className='col-span-1 md:col-span-2 my-2'>
                  <input readOnly name='regSex' className=' block w-full md:w-28   bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white'>
                  </input>
                </div>

                <div className='col-start-7 md:col-start-9 md:text-right p-3 my-2 '>
                  <label className=''>สัญชาติ: </label>
                </div>
                <div className='col-span-2 my-2 md:ml-2'>
                  <input readOnly name='regNation' type="text" className="appearance-none block w-full md:w-2/3 bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white" />
                </div>


                {/* ชื่อ นามสกุล */}

                <div className='col-start-2 col-end-4 md:text-right p-3 my-2'>
                  <label className=''>ชื่อ:</label>
                </div>
                <div className=' col-span-2 my-2'>
                  <input readOnly name='regName' type="text" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white" />
                </div>
                <div className='col-start-6 col-end-8 md:text-right p-3 my-2 '>
                  <label className=''>นามสกุล:</label>
                </div>
                <div className='col-span-2 my-2'>
                  <input readOnly  name='regLastname' type="text" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white" />
                </div>


                {/* Name Surname */}

                <div className='col-start-2 col-end-4 md:text-right p-3 my-2'>
                  <label className=''>Name:</label>
                </div>
                <div className=' col-span-2 my-2'>
                  <input readOnly name='regEname' type="text" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white" />
                </div>
                <div className='col-start-6 col-end-8 md:text-right p-3 my-2 '>
                  <label className=''>Surname:</label>
                </div>
                <div className='col-span-2 my-2'>
                  <input readOnly name='regElastname' type="text" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white" />
                </div>

                {/* เบอร์โทร อีเมลล์ */}

                <div className='col-start-2 col-end-4 md:text-right p-3 my-2'>
                  <label className=''>เบอร์โทรศัพท์ติดต่อ:</label>
                </div>
                <div className=' col-span-2 my-2'>
                  <input readOnly name='regPhone' type="text" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white" />
                </div>
                <div className='col-start-7 col-end-8 md:text-right p-3 my-2 '>
                  <label className=''>Email:</label>
                </div>
                <div className='col-span-2 my-2 '>
                  <input readOnly name='regEmail' type="email" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white" />
                </div>

                {/* รูป */}
                <div className='col-start-2 col-end-4 md:text-right p-3 my-2'>
                  <label className=''>อัพโหลดรูปภาพ :</label>
                </div>
                <div className='md:col-span-4 md:my-2 md:self-center md:flex md:justify-center flex items-center pb-4 md:pb-0 '>
                    <img src={`https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/${formData.regImg}/public`}  alt="Profile Image" />
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
                  <input readOnly name='regSchool' type="text" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white" />
                </div>



                {/* ระดับการศึกษา */}

                <div className='col-start-2 col-end-4 md:text-right p-3 my-2'>
                  <label className=''>สำเร็จการศึกษาระดับ:</label>
                </div>
                <div className=' col-span-2 my-2'>
                  <input readOnly name='regDegree' className='  text-sm block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white'>
                  </input>
                </div>
                <div className='col-start-6 col-end-8 md:text-right p-3 my-2 '>
                  <label className=''>เกรดเฉลี่ย</label>
                </div>
                <div className='col-span-2 my-2'>
                  <input readOnly name='regGpa' type="text" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white" />
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
                <div className=' col-span-1 my-2'>
                <input readOnly  name='regSchool' type="text" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white" />
                </div>





                {/* คณะ และ สาขา */}

                <div className='col-start-2 col-end-4 md:text-right p-3 my-2'>
                  <label className=''>คณะ:</label>
                </div>
                <div className=' col-span-2 my-2'>
                  <input readOnly name='regFaculty' className='  text-sm block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white'>
                  </input>
                </div>
                <div className='col-start-6 col-end-8 md:text-right p-3 my-2 '>
                  <label className=''>สาขา:</label>
                </div>
                <div className='col-span-2 my-2'>
                  <input readOnly name='regMajor' className='  text-sm block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white'>
                  </input>
                </div>







              </div>



            </div>
                  
{/* ปุ่มส่งใบสมัคร */}
<div className='flex justify-center'>
          {/* Modal */}
          <button className='bg-black bg-opacity-80  text-[#FFBF00] rounded w-56 h-20 text-3xl'>
        กลับ
      </button>
        </div>



        </div>


        
      </div>


    </RootLayout>
  )
}
