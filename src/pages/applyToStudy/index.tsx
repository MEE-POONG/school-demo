import TheLayout from "@/components/TheLayout";
import React, { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import useAxios from "axios-hooks";
import Loading from "@/container/Register/loading";
import Missing from "@/container/Register/modalmissing";
import Success from "@/container/Register/modalsuccess";
import ButtonSubmit from "@/container/Register/buttonSubmit";
import { FaRegHandPointRight } from "react-icons/fa";
import Aos from "aos";
import Link from "next/link";


export default function ApplyToStudyForm() {
  useEffect(() => {
    Aos.init({
      duration: 1000
    });
  }, []);
  const [{ error: errorMessage, loading: RegisformLoading }, executeRegisform] =
    useAxios({ url: "/api/registerForm", method: "POST" }, { manual: true });
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [personalID, setPersonalID] = useState<string>(""); // Example for an input field
  const [birth, setBirth] = useState<string>("");
  const [prefix, setPrefix] = useState<string>("");
  const [sex, setSex] = useState<string>("");
  const [nation, setNation] = useState<string>("");
  const [nameTh, setNameTh] = useState<string>("");
  const [lastnameTh, setLastnameTh] = useState<string>("");
  const [nameEng, setNameEng] = useState<string>("");
  const [lastnameEng, setLastnameEng] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [img, setImg] = useState<File | null>(null);
  const [oldSchool, setOldSchool] = useState<string>("");
  const [degree, setDegree] = useState<string>("");
  const [gpa, setGpa] = useState<string>("");
  const [program, setProgram] = useState<string>("");
  const [faculty, setFaculty] = useState<string>("");
  const [major, setMajor] = useState<string>("");

  const [success, setSuccess] = useState(false);
  const [dataOut, setDataOut] = useState({});

  const [isLoading, setIsLoading] = useState(false);
  const [isMissingModalOpen, setIsMissingModalOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [missingFields, setMissingFields] = useState<string[]>([]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setImg(file); // Store the File object
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    //event.preventDefault();
    //event.stopPropagation();
    let missingFields = [];
    // Check for missing fields here...
    if (!personalID) missingFields.push("บัตรประจำตัวประชาชน");
    if (!birth) missingFields.push("วันเดือนปีเกิด");
    if (!prefix) missingFields.push("คำนำหน้าชื่อ");
    if (!sex) missingFields.push("เพศ");
    if (!nation) missingFields.push("สัญชาติ");
    if (!nameTh) missingFields.push("ชื่อ");
    if (!lastnameTh) missingFields.push("นามสกุล");
    if (!nameEng) missingFields.push("ชื่อภาษาอังกฤษ");
    if (!lastnameEng) missingFields.push("นามสกุลภาษาอังกฤษ");
    if (!phone) missingFields.push("เบอร์โทรศัพท์");
    if (!email) missingFields.push("อีเมล");
    if (!img) missingFields.push("รูปภาพ");
    if (!oldSchool) missingFields.push("สถาบันการศึกษา");
    if (!degree) missingFields.push("ระดับกาสำเร็จการศึกษาระดับ");
    if (!gpa) missingFields.push("เกรดเฉลี่ย");
    if (!program) missingFields.push("หลักสูตร");
    if (!faculty) missingFields.push("คณะ");
    if (!major) missingFields.push("สาขา");

    if (missingFields.length > 0) {
      // Handle missing fields...
      setMissingFields(missingFields);
      setIsMissingModalOpen(true);
      console.log(
        "กรุณากรอกข้อมูลดังต่อไปนี้ให้ครบ :",
        missingFields.join(", ")
      );
      return; // Exit the function here
    } else {
      try {
        //setAlertForm("primary"); // set to loading
        console.log("กำลังอัพ");
        setIsLoading(true);
        // Upload the image
        if (img) {
          const formData = new FormData();
          formData.append("file", img); // Assuming 'activityImg' is a File object
          const uploadResponse = await axios.post(
            "https://upload-image.me-prompt-technology.com/",
            formData
          );

          if (uploadResponse.status === 200) {
            const responseData = uploadResponse.data;
            const imageId = responseData.result.id;

            // Prepare the data to send
            const data = {
              regimg: imageId, // Use the uploaded image ID
              personalID: personalID,
              birth: birth,
              prefix: prefix,
              sex: sex,
              nation: nation,
              nameTh: nameTh,
              lastnameTh: lastnameTh,
              nameEng: nameEng,
              lastnameEng: lastnameEng,
              phone: phone,
              email: email, 
              oldSchool: oldSchool,
              degree: degree,
              gpa: gpa,
              program: program,
              faculty: faculty,
              major: major,
            };

            const response = await executeRegisform({ data });
            if (response && response.status === 201) {
              setIsLoading(false);
              setIsSuccess(true);
              setTimeout(() => {
                // router.push(`/applyToStudy/sum?id=${response.data.id}`);
                // router.push(`/applyToStudy`);
              }, 1000);
            } else {
              // setAlertForm("danger");
              throw new Error("Failed to send data");
            }
          } else {
            // setAlertForm("danger");
            throw new Error("Image upload failed");
          }
        }
      } catch (error) {
        //setAlertForm("danger");
      }
    }
  };

  // ตรงนี้ทำให้ถ้าเลือก คณะ สาขาจะแตกต่างกันไปตามคณะ
  const majorOptionsByfaculty: { [key: string]: string[] } = {
    คณะบริหารธุรกิจ: [
      "สาขาวิชาการจัดการอุตสาหกรรมและโลจิสติกส์ (บธ.บ)",
      "สาขาวิชาการจัดการโรงแรมและการท่องเที่ยว (บธ.บ.)",
      "สาขาวิชาระบบสารสนเทศ (บธ.บ.)",
      "สาขาวิชาการจัดการ (บธ.บ.)",
      "สาขาวิชาการบัญชี (บช.บ.)"
      // ... Add other options for this faculty ...
    ],
    คณะวิทยาศาสตร์และเทคโนโลยี: [
      "สาขาวิชาสาธารณสุขศาสตร์ (สบ.)"
      // Add options for this faculty...
    ],
    คณะศิลปศาสตร์: [
      "สาขาวิชารัฐประศาสนศาสตร์ (รป.บ)"
      // Add options for this faculty...
    ],
    คณะวิศวกรรมศาสตร์: [
      "สาขาวิชาวิศวกรรมยานยนต์ (วศ.บ.)"
      // Add options for this faculty...
    ]
    // ... Add options for other faculties ...
  };

  // Handle the change event of the faculty select
  const handlefacultyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedfaculty = event.target.value;
    setFaculty(selectedfaculty);
    setMajor(""); // Reset the selected major when changing faculty
  };

  return (
    <TheLayout>
      <div className="container mx-auto md:py-24 py-12">
        <div className="text-center mt-10" data-aos="fade-up">
          <img src="/img/Logo_panomwan.png" className="w-28 mx-auto" alt="" />
          <p>วิทยาลัยเทคโนโลยีพนมวันท์</p>
        </div>

        <p className="mt-8 text-lg pl-3 mb-3">
          การสมัครเรียน สามารถทำได้ 2วิธี ดังนี้
        </p>
        <div className="lg:grid grid-cols-12 px-3 border-t border-black">
          <div className="col-span-8 animate-fade-up">
            <div className="bg-white p-2 md:p-8 shadow-lg rounded-lg lg:w-11/12">
              <h2 className="text-lg lg:text-xl font-black mb-5">
                วิธีที่ 1 สมัครเรียนออนไลน์
              </h2>
              {/* ส่วนที่1 ข้อมูลผู้สมัคร*/}
              <div className="w-full">
                <p className="text-base lg:text-lg font-semibold mb-5 border-b border-blue-100">
                  ส่วนที่ 1 ข้อมูลผู้สมัคร
                </p>
                {/* 1 */}
                <div className="md:flex justify-start flex-wrap gap-3  px-3">
                  <div className="md:flex items-center">
                    <label htmlFor="" className="text-xs lg:text-sm">
                      บัตรประจำตัวประชาชน:
                    </label>
                    <input
                      value={personalID} onChange={(e) => setPersonalID(e.target.value)}
                      name='regpersonalID' type="text"
                      className="appearance-nonec w-full md:w-auto block text-gray-800 border focus:border-b-blue-400 rounded p-1.5 ml-3
                              leading-tight focus:outline-none text-xs lg:text-sm"
                    />
                  </div>
                  <div className="md:flex items-center ">
                    <label htmlFor="" className="text-xs lg:text-sm">
                      วัน/เดือน/ปีเกิด:
                    </label>
                    <input
                      value={birth} onChange={(e) => setBirth(e.target.value)}
                      name='regbirth' type="date"
                      className="appearance-nonec w-full md:w-auto block text-gray-800 border focus:border-b-blue-400 rounded p-1.5 ml-3
                  leading-tight focus:outline-none text-xs lg:text-sm"
                    />
                  </div>
                  <div className="md:flex items-center">
                    <label htmlFor="" className="text-xs lg:text-sm">
                      เพศ:
                    </label>
                    <select
                      value={sex} onChange={(e) => setSex(e.target.value)} name='regsex'
                      className='appearance-nonec w-full md:w-auto block text-gray-800 border focus:border-b-blue-400 rounded p-1 ml-3
                  leading-tight focus:outline-none text-xs lg:text-sm'>
                      <option >- เลือก -</option>
                      <option value="ชาย">ชาย</option>
                      <option value="หญิง">หญิง</option>
                    </select>
                  </div>
                  <div className="md:flex items-center ">
                    <label htmlFor="" className="text-xs lg:text-sm">
                      สัญชาติ:
                    </label>
                    <input
                      value={regnation}
                      onChange={(e) => setRegnation(e.target.value)}
                      name="regnation"
                      type="text"
                      className="appearance-nonec w-full md:w-auto block text-gray-800 border focus:border-b-blue-400 rounded p-1.5 ml-3
                  leading-tight focus:outline-none text-xs lg:text-sm"
                    />
                  </div>
                </div>

                {/* 2 */}
                <div className="md:flex justify-start flex-wrap gap-3  px-3 mt-3">
                  <div className="md:flex items-center ">
                    <label htmlFor="" className="text-xs lg:text-sm">
                      คำนำหน้าชื่อ:
                    </label>
                    <select
                      value={regprefix}
                      onChange={(e) => setRegprefix(e.target.value)}
                      name="regprefix"
                      className="appearance-nonec w-full md:w-auto block text-gray-800 border focus:border-b-blue-400 rounded p-1 ml-3
                  leading-tight focus:outline-none text-xs lg:text-sm"
                    >
                      <option value="">- เลือก -</option>
                      <option value="นาย">นาย</option>
                      <option value="นาง">นาง</option>
                      <option value="นางสาว">นางสาว</option>
                    </select>
                  </div>
                  <div className="md:flex items-center ">
                    <label htmlFor="" className="text-xs lg:text-sm">
                      ชื่อ:
                    </label>
                    <input
                      value={regnameTh}
                      onChange={(e) => setRegnameTh(e.target.value)}
                      name="regName"
                      type="text"
                      className="appearance-nonec w-full md:w-auto block text-gray-800 border focus:border-b-blue-400 rounded p-1.5 ml-3
                  leading-tight focus:outline-none text-xs lg:text-sm"
                    />
                  </div>
                  <div className="md:flex items-center ">
                    <label htmlFor="" className="text-xs lg:text-sm">
                      นามสกุล:
                    </label>
                    <input
                      value={reglastnameTh}
                      onChange={(e) => setReglastnameTh(e.target.value)}
                      name="regLastname"
                      type="text"
                      className="appearance-nonec w-full md:w-auto block text-gray-800 border focus:border-b-blue-400 rounded p-1.5 ml-3
                  leading-tight focus:outline-none text-xs lg:text-sm"
                    />
                  </div>
                </div>

                {/* 3 */}
                <div className="md:flex justify-start flex-wrap gap-3  px-3 mt-3">
                  <div className="md:flex items-center ">
                    <label htmlFor="" className="text-xs lg:text-sm">
                      Name:
                    </label>
                    <input
                      value={regnameEng}
                      onChange={(e) => setRegnameEng(e.target.value)}
                      name="regnameEng"
                      type="text"
                      placeholder="ชื่อภาษาอังกฤษ"
                      className="appearance-nonec w-full md:w-auto block text-gray-800 border focus:border-b-blue-400 rounded p-1.5 ml-3
                  leading-tight focus:outline-none text-xs lg:text-sm capitalize"
                    />
                  </div>
                  <div className="md:flex items-center ">
                    <label htmlFor="" className="text-xs lg:text-sm">
                      Lastname:
                    </label>
                    <input
                      value={reglastnameEng}
                      onChange={(e) => setReglastnameEng(e.target.value)}
                      name="regElastname"
                      type="text"
                      placeholder="นามสกุลภาษาอังกฤษ"
                      className="appearance-nonec w-full md:w-auto block text-gray-800 border focus:border-b-blue-400 rounded p-1.5 ml-3
                  leading-tight focus:outline-none text-xs lg:text-sm capitalize"
                    />
                  </div>
                </div>

                {/* 4 */}
                <div className="md:flex justify-start flex-wrap gap-3  px-3 mt-3">
                  <div className="md:flex items-center ">
                    <label htmlFor="" className="text-xs lg:text-sm">
                      เบอร์โทรศัพท์ติดต่อ:
                    </label>
                    <input
                      value={regphone}
                      onChange={(e) => setRegphone(e.target.value)}
                      name="regphone"
                      type="text"
                      className="appearance-nonec w-full md:w-auto block text-gray-800 border focus:border-b-blue-400 rounded p-1.5 ml-3
                  leading-tight focus:outline-none text-xs lg:text-sm"
                    />
                  </div>
                  <div className="md:flex items-center ">
                    <label htmlFor="" className="text-xs lg:text-sm">
                      email:
                    </label>
                    <input
                      value={regemail}
                      onChange={(e) => setRegemail(e.target.value)}
                      name="regemail"
                      type="email"
                      className="appearance-nonec w-full md:w-auto block text-gray-800 border focus:border-b-blue-400 rounded p-1.5 ml-3
                  leading-tight focus:outline-none text-xs lg:text-sm"
                    />
                  </div>
                  <div className="md:flex items-center">
                    <p className="text-xs lg:text-sm">อัพโหลดรูปภาพ :</p>
                    <input
                      type="file"
                      id="regImg"
                      name="regImg"
                      onChange={handleFileUpload}
                      className="w-full md:w-auto py-2 px-3 ml-3 text-xs lg:text-sm "
                    />
                  </div>
                </div>
              </div>
              {/* ส่วนที่2 ประวัติการศึกษา*/}
              <div className="w-full mt-10">
                <p className="text-base lg:text-lg font-semibold mb-5 border-b border-blue-100">
                  ส่วนที่ 2 ประวัติการศึกษา
                </p>
                <div className="md:flex items-center justify-start flex-wrap gap-3 px-3 mt-3">
                  <label htmlFor="" className="text-xs lg:text-sm">
                    สถาบันการศึกษา:
                  </label>
                  <input
                    value={regoldSchool}
                    onChange={(e) => setRegoldSchool(e.target.value)}
                    name="regoldSchool"
                    type="text"
                    className="appearance-nonec w-full lg:w-1/2 block text-gray-800 border focus:border-b-blue-400 rounded p-1.5
                            leading-tight focus:outline-none text-xs lg:text-sm"
                  />
                </div>
                <div className="md:flex justify-start flex-wrap gap-3 px-3 mt-3">
                  <div className="md:flex items-center">
                    <label htmlFor="" className="text-xs lg:text-sm">
                      สำเร็จการศึกษาระดับ:
                    </label>
                    <select
                      value={regDegree}
                      onChange={(e) => setRegDegree(e.target.value)}
                      name="regDegree"
                      className="appearance-nonec w-full lg:w-1/2 block text-gray-800 border focus:border-b-blue-400 rounded p-1.5 ml-3
                                leading-tight focus:outline-none text-xs lg:text-sm"
                    >
                      <option value="">-- เลือกระดับ --</option>
                      <option value="มัธยมศึกษาปีที่ 6">
                        มัธยมศึกษาปีที่ 6
                      </option>
                      <option value="ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.)">
                        ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.)
                      </option>
                      <option value="ประกาศนียบัตรวิชาชีพ (ปวช.)">
                        ประกาศนียบัตรวิชาชีพ (ปวช.)
                      </option>
                    </select>
                  </div>
                  <div className="md:flex items-center">
                    <label htmlFor="" className="text-xs lg:text-sm">
                      เกรดเฉลี่ย:
                    </label>
                    <input
                      value={reggpa}
                      onChange={(e) => setReggpa(e.target.value)}
                      name="reggpa"
                      type="text"
                      className="appearance-nonec w-full lg:w-1/2 block text-gray-800 border focus:border-b-blue-400 rounded p-1.5 ml-3
                            leading-tight focus:outline-none text-xs lg:text-sm"
                    />
                  </div>
                </div>
              </div>
              {/* ส่วนที่3 คณะ/สาขา*/}
              <div className="w-full mt-10">
                <p className="text-base lg:text-lg font-semibold mb-5 border-b border-blue-100">
                  ส่วนที่ 2 คณะ/สาขา
                </p>
                <div className="md:flex items-center justify-start flex-wrap gap-3 px-3 mt-3">
                  <label className="text-xs lg:text-sm">หลักสูตร:</label>
                  <div className="md:col-span-1 md:my-2 md:self-center md:flex  ml-5 flex items-center">
                    <input
                      onChange={(e) => setRegprogram(e.target.value)}
                      name="regprogram"
                      value="4ปี"
                      type="radio"
                      className="w-3 h-3"
                    />
                    <label className="ml-4 md:ml-1 text-xs lg:text-sm ">
                      4 ปี
                    </label>
                  </div>

                  <div className="md:col-span-2 md:my-2 md:self-center md:flex mt-2 ml-5 flex items-center ">
                    <input
                      onChange={(e) => setRegprogram(e.target.value)}
                      name="regprogram"
                      value="2 ปี (ต่อเนื่อง)"
                      type="radio"
                      className="w-3 h-3 "
                    />
                    <label className="ml-4 md:ml-1 text-xs lg:text-sm">
                      2 ปี (ต่อเนื่อง)
                    </label>
                  </div>
                </div>
                <div className="md:flex justify-start flex-wrap gap-3 px-3 mt-3">
                  <div className="md:flex items-center">
                    <label htmlFor="" className="text-xs lg:text-sm">
                      คณะ:
                    </label>
                    <select
                      name="regfaculty"
                      onChange={handlefacultyChange}
                      className="appearance-nonec w-full block text-gray-800 border focus:border-b-blue-400 rounded p-1.5 ml-3
                              leading-tight focus:outline-none text-xs lg:text-sm"
                    >
                      <option value="">-- เลือกคณะ --</option>
                      <option value="คณะบริหารธุรกิจ">คณะบริหารธุรกิจ</option>
                      <option value="คณะวิทยาศาสตร์และเทคโนโลยี">
                        คณะวิทยาศาสตร์และเทคโนโลยี
                      </option>
                      <option value="คณะศิลปศาสตร์">คณะศิลปศาสตร์</option>
                      <option value="คณะวิศวกรรมศาสตร์">
                        คณะวิศวกรรมศาสตร์{" "}
                      </option>
                    </select>
                  </div>
                  <div className="md:flex items-center">
                    <label htmlFor="" className="text-xs lg:text-sm">
                      สาขา:
                    </label>
                    <select
                      name="regmajor"
                      className="appearance-nonec w-full block text-gray-800 border focus:border-b-blue-400 rounded p-1.5 ml-3
                              leading-tight focus:outline-none text-xs lg:text-sm"
                      disabled={!regfaculty} // Disable the select if faculty is not selected
                      value={regmajor}
                      onChange={(e) => setRegmajor(e.target.value)}
                    >
                      <option value="" disabled>
                        -- เลือกสาขา --
                      </option>
                      {majorOptionsByfaculty[regfaculty]?.map((major) => (
                        <option key={major} value={major}>
                          {major}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-10">
                {/* Modal */}
                <ButtonSubmit onSubmit={handleSubmit} />
              </div>
            </div>
          </div>

          <div className="col-span-4 mt-5 animate-fade-up">
            <h2 className="text-lg lg:text-xl font-black mb-5">
              วิธีที่ 2 สมัครเรียนทางไปรษณีย์
            </h2>
            <Link
              href="https://drive.google.com/file/d/1emtEURTC2dy9VFLQ3Ef60xtwkkFazbPG/view?usp=sharing"
              className="flex items-center gap-2 mb-3 text-lg text-blue-400 hover:text-blue-700"
              download
            >
              <FaRegHandPointRight
                className="animate-pulse animate-infinite fill-orange-800"
                size={20}
              />
              ดาวน์โหลดใบสมัคร
            </Link>
            <Link href="https://drive.google.com/file/d/1emtEURTC2dy9VFLQ3Ef60xtwkkFazbPG/view?usp=sharing">
              <img src="/img/register_form.png" alt="" />
            </Link>
            <p className="mt-3 text-blue-400">
              กรอกข้อมูลให้สมบูรณ์ แล้วส่งใบสมัครพร้อมรูปถ่ายมาที่
            </p>
            <p>วิทยาลัยเทคโนโลยีพนมวันท์</p>
            <p>198 ถ.มิตรภาพ ต.บ้านโพธิ์ อ.เมือง จ.นครราชสีมา 30310</p>
          </div>
        </div>
      </div>

      {isLoading ? <Loading /> : null}

      {isMissingModalOpen && (
        <Missing
          onClose={() => setIsMissingModalOpen(false)}
          missingFields={missingFields}
        />
      )}

      {isSuccess ? (
        <Success
          onClose={() => {
            setIsSuccess(false);
          }}
        />
      ) : null}
    </TheLayout>
  );
}
