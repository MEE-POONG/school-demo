import TheLayout from "@/components/TheLayout";
import { TbBellRingingFilled } from "react-icons/tb";
import { useState, useEffect } from "react"; // เพิ่มการ import useEffect
import Loading from "@/components/loading"; // เพิ่มการ import คอมโพเนนต์ Loading
import TermFees from "@/container/Register/TermFees";
import Aos from "aos";
import TermFeesTabletwo from "@/container/Register/TermFeesTabletwo";
import AdditionnalCosts from "@/container/Register/Additionalcosts";
import useAxios from "axios-hooks";

export default function HowToApplyPage() {
  const [isLoading, setIsLoading] = useState(true); // เริ่มต้น isLoading เป็น true
  const [courseALL, setCourseAll] = useState();


  useEffect(() => {
    fetch(`/api/CourseGroup`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        
        setCourseAll(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    Aos.init({
      duration: 1000
    });
  }, []);

  // useEffect สำหรับจำลองการโหลดรูปภาพทุกตัวในหน้า
  useEffect(() => {
    const images = document.querySelectorAll("img"); // เลือกทุก <img> ในหน้า
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
        img.addEventListener("load", handleImageLoad);
      }
    });

    return () => {
      images.forEach((img) => {
        img.removeEventListener("load", handleImageLoad);
      });
    };
  }, []);

  return (
    <TheLayout>
      {isLoading && <Loading />}{" "}
      {/* แสดงหน้าต่าง Loading ถ้า isLoading เป็น true */}
      <div className="relative flex h-96 md:h-[600px] content-center items-center justify-center pt-24">
        <div className="absolute top-0 h-full w-full bg-[url('/img/register/17.3.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
            <p className="font-medium text-xl md:text-4xl text-amber-600">
              สมัครเข้าศึกษา
            </p>
            <p className="font-medium text-xl md:text-4xl text-white">
              วิทยาลัยเทคโนโลยีพนมวันท์
            </p>
          </div>
        </div>
      </div>
      {/* Descript. */}
      <div className=" container mx-auto my-3 lg:my-24 p-2">
        <div className="text-xl md:text-3xl mb-10 flex items-center">
          <TbBellRingingFilled className="text-amber-700 mr-2 h-10" />{" "}
          สิ่งที่ควรรู้ก่อนสมัครเรียน
        </div>

        <div className="md:flex justify-center gap-10 mb-10 ">
          <div className="flex flex-wrap justify-center items-center gap-5 shadow-lg rounded-lg p-4 animate-flip-down animate-duration-[900ms] bg-white">
            <img src="/icons/features.png" alt="" />
            <div>
              <p className="font-semibold text-lg md:text-2xl">
                คุณสมบัติของผู้เรียน
              </p>
              <span className=" text-xs lg:text-base ">
                <h3>เป็นผู้สำเร็จการศึกษาดังต่อไปนี้</h3>
                <li>มัธยมศึกษาตอนปลาย(ม.6) หรือ เทียบเท่า</li>
                <li>ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.)</li>
                <li>ประกาศนียบัตรวิชาชีพ (ปวช.)</li>
              </span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-5 shadow-lg rounded-lg p-4 mt-10 md:mt-0 animate-flip-down animate-duration-[900ms]  bg-white">
            <img src="/icons/job.png" alt="" />
            <div>
              <p className="font-semibold textlg  md:text-2xl">
                หลักฐานในการใช้สมัครเรียน
              </p>
              <span className="text-xs lg:text-base">
                <li>
                  รูปถ่ายหน้าตรงไม่สวมหมวกไม่สวมแว่นตาดำขนาด 1 นิ้วจำนวน 1 รูป
                </li>
                <li>สำเนาผลการเรียน ม.ปลาย หรือเทียบเท่า จำนวน 1 ชุด</li>
                <li>
                  สำเนาทะเบียนบ้าน จำนวน 1 ชุด ( กรณียังไม่มีใบ รบ.
                  ให้ใช้ใบรับรองผลการเรียนแทน )
                </li>
                <li>สำเนาบัตรประจำตัวประชาชน จำนวน 1 ชุด</li>
              </span>
            </div>
          </div>
        </div>
        {courseALL && <>
          <TermFees list={courseALL} />
          <TermFeesTabletwo list={courseALL} />
        </>
        }
        <AdditionnalCosts />

      </div>
    </TheLayout>
  );
}
