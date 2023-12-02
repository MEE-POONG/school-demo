// AboutPage.tsx
import React, { useState, useEffect } from 'react';
import TheLayout from "@/components/TheLayout";
import Loading from "@/components/loading";
import { About } from '@prisma/client';
import Aos from 'aos';



const AboutPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [aboutData, setAboutData] = useState<About | null>(null);

  useEffect(() => {
    Aos.init({
      duration: 1000
    });
  }, []);

  useEffect(() => {
    fetch('/api/about')
      .then(response => response.json())
      .then((data) => {
        console.log(data);

        setAboutData(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching about data:', error);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    const handleImageLoad = () => {
      const images = document.querySelectorAll('img');
      const allLoaded = Array.from(images).every(img => img.complete);
      if (allLoaded) {
        setIsLoading(false);
      }
    };

    window.addEventListener('load', handleImageLoad);
    return () => {
      window.removeEventListener('load', handleImageLoad);
    };
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <TheLayout>
      <div className="relative isolate overflow-hidden px-6 py-24 sm:py-16  sm:pt-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            />
          </svg>
        </div>
        <div
          className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10 "
          data-aos="fade-up"
        >
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-indigo-600">
                  {aboutData?.subTitle}
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  {aboutData?.title}
                </h1>
                <p className="mt-6 text-sm md:text-base leading-7 text-gray-700 indent-5 ">
                  {aboutData?.detail}
                </p>
              </div>
            </div>
          </div>
          <div
            className="lg:-ml-12 -mt-12 lg:p-12 lg:sticky lg:top-8 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"
            data-aos="fade-left"
          >
            <img
              className="w-full h-40 lg:w-[48rem] md:h-[34rem] object-cover max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              src={`https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/${aboutData?.img ||
                "4500f404-dbac-40f3-6696-ae768a38e800"
                }/public`}
              alt=""
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4 ">
              <div className="max-w-xl text-sm md:text-base leading-7 text-gray-700 lg:max-w-lg indent-5">
                <p>
                  {aboutData?.detailTo}
                </p>

                <div className="bg-white p-3 shadow-md rounded-lg mt-12">
                  <h2 className="text-lg md:text-2xl font-bold tracking-tight text-gray-900">
                    ตราสัญลักษณ์{" "}
                    <span className="text-[#2797FF]">
                      วิทยาลัยเทคโนโลยีพนมวันท์
                    </span>
                  </h2>
                  <ul
                    role="list"
                    className="mt-4 space-y-1 text-gray-600 leading-normal"
                  >
                    <li className="flex gap-x-2 mt-0">
                      <span>
                        <strong className="font-semibold text-[#2797FF]">
                          ดอกบัวบาน 8 กลีบ
                        </strong>{" "}
                        หมายถึง ทางแห่งความสำเร็จมรรค 8
                      </span>
                    </li>
                    <li className="flex gap-x-2 mt-0">
                      <span>
                        <strong className="font-semibold text-[#2797FF]">
                          กลีบบัวทั้ง 8
                        </strong>{" "}
                        หมายถึง ทางแห่งความสำเร็จมรรค 8
                      </span>
                    </li>
                    <li className="flex gap-x-2 mt-0">
                      <span>
                        <strong className="font-semibold text-[#2797FF]">
                          ยอดปราสาทหิน
                        </strong>{" "}
                        หมายถึง ความสูงสุด ความแข็งแกร่งอุตสาหะ พากเพียร
                        ศิลปและวัฒนธรรมท้องถิ่น
                      </span>
                    </li>
                    <li className="flex gap-x-2 mt-0">
                      <span>
                        <strong className="font-semibold text-[#2797FF]">
                          ปรัชญาและปณิธานของวิทยาลัย
                        </strong>{" "}
                        &quot; ฝีมือ เทคโนโลยี วิจัย วัฒนธรรม คุณธรรม
                        ความก้าวหน้า ความสำเร็จและสนองสังคม &quot;
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-3 shadow-md rounded-lg mt-12">
                  <h2 className="text-lg md:text-2xl font-bold tracking-tight text-gray-900 mb-3">
                    สีของ{" "}
                    <span className="text-[#2797FF]">
                      วิทยาลัยเทคโนโลยีพนมวันท์
                    </span>
                  </h2>
                  <div className="bg-[#1F306A] w-28 h-9 md:w-60 md:h-20 mx-auto "></div>
                  <div className="bg-[#FFBF00] w-28 h-9 md:w-60 md:h-20 mx-auto "></div>
                  <p className="text-black text-xs md:text-base  indent-5 md:indent-8 my-3">
                    สีของวิทยาลัยเทคโนโลยีพนมวันท์ คือ น้ำเงินและเหลืองทอง
                  </p>
                  <ul
                    role="list"
                    className="mt-4 space-y-1 text-gray-600 leading-normal"
                  >
                    <li className="flex gap-x-2 mt-0">
                      <span>
                        <strong className="font-semibold text-[#2797FF]">
                          น้ำเงิน
                        </strong>{" "}
                        หมายถึง ความลุ่มลึก ความหนักแน่น มั่นคงในเชิง วิชาการ
                        เปรียบ เสมือนน้ำทะเลสีน้ำเงิน
                      </span>
                    </li>
                    <li className="flex gap-x-2 mt-0">
                      <span>
                        <strong className="font-semibold text-[#FFBF00]">
                          เหลืองทอง
                        </strong>{" "}
                        หมายถึง ความมีชื่อเสียง คุณธรรม คุณภาพ และเป็นเอกลักษณ์
                        ของความยิ่งใหญ่
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex justify-center container mx-auto bg-gradient-to-r rounded-lg mb-8"
        data-aos="zoom-in-up"
      >
        <img
          className="w-full "
           src={`https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/${aboutData?.personChart ||
                "4500f404-dbac-40f3-6696-ae768a38e800"
                }/wlg`}
          alt=""
          style={{
            WebkitFilter: "drop-shadow(10px 10px 5px #000000)",
            filter: "drop-shadow(10px 10px 5px #000000)"
          }}
        />
      </div>
    </TheLayout>
  );
}

export default AboutPage;
