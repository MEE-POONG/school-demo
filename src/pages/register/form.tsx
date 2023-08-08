
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'
import RootLayout from '@/components/layout'

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import Modal from "@/components/modal";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {







  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const router = useRouter();

  const [regFaculty, setRegFaculty] = useState<string>("");
  const [regMajor, setRegMajor] = useState<string>("");

  const [regImg, setRegImg] = useState<string>("");

  // ตรงนี้ทำให้ถ้าเลือก คณะ สาขาจะแตกต่างกันไปตามคณะ
  const majorOptionsByFaculty: { [key: string]: string[] } = {
    "คณะบริหารธุรกิจ": [
      "สาขาวิชาการจัดการอุตสาหกรรมและโลจิสติกส์ (บธ.บ)",
      "สาขาวิชาการจัดการโรงแรมและการท่องเที่ยว (บธ.บ.)",
      "สาขาวิชาระบบสารสนเทศ (บธ.บ.)",
      "สาขาวิชาการจัดการ (บธ.บ.)",
      "สาขาวิชาการบัญชี (บช.บ.)",
      // ... Add other options for this faculty ...
    ],
    "คณะวิทยาศาสตร์และเทคโนโลยี": [
      "สาขาวิชาสาธารณสุขศาสตร์ (สบ.)"
      // Add options for this faculty...
    ],
    "คณะศิลปศาสตร์": [
      "สาขาวิชารัฐประศาสนศาสตร์ (รป.บ)"
      // Add options for this faculty...
    ],
    "คณะวิศวกรรมศาสตร์": [
      "สาขาวิชาวิศวกรรมยานยนต์ (วศ.บ.)"
      // Add options for this faculty...
    ],
    // ... Add options for other faculties ...
  };

  // Handle the change event of the faculty select
  const handleFacultyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedFaculty = event.target.value;
    setRegFaculty(selectedFaculty);
    setRegMajor(""); // Reset the selected major when changing faculty
  };


  useEffect(() => {
    axios.get("/api/registerForm").then((response) => {
      setUsers(response.data);
      console.log(response.data)
    });
  }, []);


  const testM = (data: any) => {
    console.log(data);
  };

  const handleSubmit = (event: any) => {
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
      regImg: regImg,
    };
   
    console.log(data);

    // axios.post("/api/registerForm", data).then((response) => {
    //   console.log("done!");
    //   router.push("/register/form");
    //   console.log(response.data);

    //   //รีเซ็ทค่า
    //   event.target.regIdpersonal.value = "";
    //   event.target.regBirth.value = "";
    //   event.target.regPrefix.value = "";
    //   event.target.regSex.value = "";
    //   event.target.regNation.value = "";
    //   event.target.regName.value = "";
    //   event.target.regLastname.value = "";
    //   event.target.regEname.value = "";
    //   event.target.regElastname.value = "";
    //   event.target.regPhone.value = "";
    //   event.target.regEmail.value = "";
    //   event.target.regSchool.value = "";
    //   event.target.regDegree.value = "";
    //   event.target.regGpa.value = "";
    //   event.target.regProgram.value = "";
    //   event.target.regFaculty.value = "";
    //   event.target.regMajor.value = "";
    //   setRegImg("");

    // });
  };


  // ส่วนนี้อัพโหลดรูปและแปลงเป็น base64
  //  โค้ดนี้ใช้วัตถุ image เพื่อดึงขนาดของรูปภาพ หากขนาดของรูปภาพมากกว่า 1000 พิกเซล ฟังก์ชันจะลดขนาดของรูปภาพโดยอัตราส่วนสูงสุดระหว่างความกว้างและความยาวของรูปภาพ จากนั้นฟังก์ชันจะวาดรูปภาพขนาดใหม่ลงบนผืนผ้าใบ และแปลงผืนผ้าใบกลับเป็นสตริงฐาน 64
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        const splittedString = base64String.split(",")[1]; // ตัดส่วน "data:image/png;base64," ออก
        if (event.target.id === "regImg") {
          const image = new Image();
          image.src = `data:image/png;base64,${splittedString}`;
          image.onload = () => {
            const width = image.width;
            const height = image.height;
            const maxSize = 400; //กำหนดขนาดตรงนี้ หมายถึงไซส์
            if (width > maxSize || height > maxSize) {
              const ratio = Math.max(width / maxSize, height / maxSize);
              const newWidth = width / ratio;
              const newHeight = height / ratio;
              const canvas = document.createElement("canvas");
              canvas.width = newWidth;
              canvas.height = newHeight;
              const ctx = canvas.getContext("2d");
              if (ctx === null) {
                console.log("Context is null");
              } else {
                ctx.drawImage(image, 0, 0, newWidth, newHeight);
                // ตัดส่วน "data:image/png;base64," ออก และเซฟเป็น png
                const base64String = canvas.toDataURL("image/png").replace("data:image/png;base64,", "");
                setRegImg(base64String);
              }
            } else {
              setRegImg(splittedString);
            }
          };
        } else {
          event.target.value = '';
        }
      };
      reader.readAsDataURL(file);
    }
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
                  <input name='regIdpersonal' type="text" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white" />
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

                {/* รูป */}
                <div className='col-start-2 col-end-4 md:text-right p-3 my-2'>
                  <label className=''>อัพโหลดรูปภาพ :</label>
                </div>
                <div className='md:col-span-2 md:my-2 md:self-center md:flex md:justify-center flex items-center pb-4 md:pb-0 '>
                  <input type="file" id='regImg' name="regImg" className='' onChange={handleFileUpload} />
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
                  <input name='regProgram' value="2 ปี (ต่อเนื่อง)" type="radio" className="w-5 h-5 " />
                  <label className='ml-4 md:ml-1 md:text-sm'>2 ปี (ต่อเนื่อง)</label>
                </div>




                {/* คณะ และ สาขา */}

                <div className='col-start-2 col-end-4 md:text-right p-3 my-2'>
                  <label className=''>คณะ:</label>
                </div>
                <div className=' col-span-2 my-2'>
                  <select name='regFaculty' className='  text-sm block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white' onChange={handleFacultyChange}>
                    <option value="คณะบริหารธุรกิจ">คณะบริหารธุรกิจ</option>
                    <option value="คณะวิทยาศาสตร์และเทคโนโลยี">คณะวิทยาศาสตร์และเทคโนโลยี</option>
                    <option value="คณะศิลปศาสตร์">คณะศิลปศาสตร์</option>
                    <option value="คณะวิศวกรรมศาสตร์">คณะวิศวกรรมศาสตร์ </option>
                  </select>
                </div>
                <div className='col-start-6 col-end-8 md:text-right p-3 my-2 '>
                  <label className=''>สาขา:</label>
                </div>
                <div className='col-span-2 my-2'>
                  <select name='regMajor' className='  text-sm block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white'
                    disabled={!regFaculty} // Disable the select if faculty is not selected
                    value={regMajor}
                    onChange={(e) => setRegMajor(e.target.value)}
                  >
                    {majorOptionsByFaculty[regFaculty]?.map((major) => (
                      <option key={major} value={major}>
                        {major}
                      </option>
                    ))}
                  </select>
                </div>







              </div>



            </div>

{/* ปุ่มส่งใบสมัคร */}
<div className='flex justify-center'>
          {/* Modal */}
          <Modal onSubmit={testM} />
        </div>


            </form>
        </div>


        
      </div>


    </RootLayout>
  )
}
