// import React, { useEffect, useState } from 'react';
// import Slider from 'react-slick';


// interface sliderSchool {
//     id: number;
//     img1: string;
// }

// const MyCarousel = () => {

//     const [sliderSchoolData, setsliderSchoolData] = useState<sliderSchool[]>([]); // Specify the type here
//     const [sliderRef, setSliderRef] = useState<Slider | null>(null);
//     const [activeSlide, setActiveSlide] = useState(0);
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//         fetch('/api/sliderSchool')
//             .then((response) => response.json())
//             .then((data) => {
//                 setsliderSchoolData(data.sliderSchool);
//                 setIsLoading(false); // ตั้งค่า isLoading เป็น false เมื่อโหลดเสร็จสมบูรณ์

//             })
//             .catch((error) => {
//                 console.error('Error:', error);
//                 setIsLoading(false); // ตั้งค่า isLoading เป็น false เมื่อโหลดเสร็จสมบูรณ์

//             });
//     }, []);

//     const handlePrevSlide = () => {
//         sliderRef?.slickPrev();
//     };

//     const handleNextSlide = () => {
//         sliderRef?.slickNext();
//     };

//     const handleSlideTo = (index: number) => {
//         setActiveSlide(index);
//         sliderRef?.slickGoTo(index);
//     };

//     const sliderSettings = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         beforeChange: (_current: any, next: React.SetStateAction<number>) => setActiveSlide(next),
//     };

//     return (
//         <>
//             <div id="default-carousel" className="relative" data-carousel="static">
//                 <div className="slider-container">

//                     <Slider {...sliderSettings} ref={(slider) => setSliderRef(slider)}>
//                         {sliderSchoolData?.map((sliderSchool) => (
//                             <div key={sliderSchool.id} className="slider-slide">
//                                 <img
//                                     src={`https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/${sliderSchool.img1}/public`}
//                                     //   className="block top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
//                                     alt="indexActivity image"
//                                 />
//                             </div>
//                         ))}
//                     </Slider>
//                     <div
//                         className='absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2'
//                         style={{ transform: 'translateX(-50%)' }}
//                     >
//                         {sliderSchoolData?.map((_, index) => (
//                             <button
//                                 key={index}
//                                 type='button'
//                                 className={`w-3 h-3 rounded-full ${activeSlide === index ? 'bg-blue-500' : 'bg-gray-300'
//                                     }`}
//                                 aria-current={activeSlide === index ? 'true' : 'false'}
//                                 aria-label={`Slide ${index + 1}`}
//                                 data-carousel-slide-to={index}
//                                 onClick={() => handleSlideTo(index)}
//                             ></button>
//                         ))}
//                     </div>
//                     <div className='flex justify-between ' style={{ position: 'absolute', width: '100%', top: '50%', transform: 'translateY(-50%)', zIndex: 1 }}>
//                         <button onClick={handlePrevSlide} className='text-black mr-2'>
//                             <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//                                 <svg
//                                     className="w-4 h-4 text-white dark:text-gray-800"
//                                     aria-hidden="true"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     fill="none"
//                                     viewBox="0 0 6 10"
//                                 >
//                                     <path
//                                         stroke="currentColor"
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth="2"
//                                         d="M5 1 1 5l4 4"
//                                     />
//                                 </svg>
//                                 <span className="sr-only">Previous</span>
//                             </span>
//                         </button>
//                         <button onClick={handleNextSlide}>
//                             <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//                                 <svg
//                                     className="w-4 h-4 text-white dark:text-gray-800"
//                                     aria-hidden="true"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     fill="none"
//                                     viewBox="0 0 6 10"
//                                 >
//                                     <path
//                                         stroke="currentColor"
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth="2"
//                                         d="m1 9 4-4-4-4"
//                                     />
//                                 </svg>
//                                 <span className="sr-only">Next</span>
//                             </span>
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default MyCarousel;
// import { RiFilePaper2Line } from "react-icons/ri";
// import { FaMoneyBill } from "react-icons/fa";
// import { RiGraduationCapLine } from "react-icons/ri";
// import { FaUserGraduate } from "react-icons/fa";
// import Link from "next/link";

// export default function Menu() {
//   return (
//     <div className="relative">
//       <img className="relative w-full " src="/img/event/111.png" />
//       <div className="absolute  inset-1 mb-8 flex flex-wrap place-content-evenly h-[100%] items-center">
//         <Link href="/register/form" className="contactIcon text-center ">
//           <RiFilePaper2Line className="mx-auto mb-2 h-[80px] w-12 md:w-32 lg:w-48 " />
//           สมัครเรียน
//         </Link>
//         <Link href="/welfare" className="contactIcon  text-center ">
//           <FaMoneyBill className="mx-auto mb-2 h-[80px] w-12 md:w-32 lg:w-48" />
//           สวัสดิการ
//         </Link>
//         <Link href="/advisor" className="contactIcon  text-center ">
//           <RiGraduationCapLine className="mx-auto mb-2 h-[80px] w-12 md:w-32 lg:w-48" />
//           ปรึกษาเพิ่มเติม
//         </Link>
//         <Link href="/faculty" className="contactIcon text-center ">
//           <FaUserGraduate className="mx-auto mb-2 h-[80px] w-12 md:w-32 lg:w-48 " />
//           คณะที่เปิดสอน
//         </Link>
//       </div>
//     </div>

//   );
// }

import Link from "next/link";
import { FaMoneyBill, FaUserGraduate } from "react-icons/fa";
import { RiFilePaper2Line, RiGraduationCapLine } from "react-icons/ri";

export default function Menu() {
    return (
        <>

            <div>

                <div className="relative">
                    <img className="w-full mx-auto my-auto h-[150px] sm:h-[200px] md:h-[300px] lg:h-[300px] xl:h-[200px] mb-3 bg-gradient-to-r from-blue-900 via-yellow-500 to-blue-900" src="/img/event/111.png" alt="Event" />

                    <div className="absolute  inset-0 mb-8 flex flex-wrap place-content-evenly h-[100%] items-center">
                        <Link href="/register/form" className="contactIcon text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                            <RiFilePaper2Line className="mx-auto mb-2 h-[80px] w-10 sm:w-30 md:w-48 lg:w-62 xl:w-80" />
                            สมัครเรียน
                        </Link>
                        <Link href="/welfare" className="contactIcon text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                            <FaMoneyBill className="mx-auto mb-2 h-[80px] w-10 sm:w-30 md:w-48 lg:w-62 xl:w-80" />
                            สวัสดิการ
                        </Link>
                        <Link href="/advisor" className="contactIcon text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                            <RiGraduationCapLine className="mx-auto mb-2 h-[80px] w-10 sm:w-30 md:w-48 lg:w-62 xl:w-80" />
                            ปรึกษาเพิ่มเติม
                        </Link>
                        <Link href="/faculty" className="contactIcon text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                            <FaUserGraduate className="mx-auto mb-2 h-[80px] w-10 sm:w-30 md:w-48 lg:w-62 xl:w-80" />
                            คณะที่เปิดสอน
                        </Link>


                    </div>
                </div>

            </div>


        </>
    );
};


{/* <div className="md:w-full h-[200px]  mb-3 bg-gradient-to-r from-blue-900 via-yellow-500 to-blue-900"> */ }
{/* <div className="w-full md:w-full mx-auto my-auto h-[600px] ms:h-full mb-3 bg-gradient-to-r from-blue-900 via-yellow-500 to-blue-900"> */ }
{/* <div className="w-full sm:w-[100%] md:w-[100%] lg:w-[50%] xl:w-[25%] mx-auto my-auto h-[600px] sm:h-[300px] md:h-[300px] lg:h-[500px] xl:h-full mb-3 bg-gradient-to-r from-blue-900 via-yellow-500 to-blue-900"> */ }




{/* <img className="relative w-full" src="/img/event/111.png" alt="Event" /> */ }
{/* <img className="relative w-full max-w-[100%] h-auto max-h-[100%]" src="/img/event/111.png" alt="Event" /> */ }