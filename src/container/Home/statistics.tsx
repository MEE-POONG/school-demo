import { Typography } from "@material-tailwind/react";
import React, { useState, useRef, useEffect } from "react";
import CountUp from "react-countup";

export default function Statistics() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return (
    <>
      <div ref={ref} className="bg-blue-400 border-y-4 border-blue-700">
        <div className="container m-auto my-8 flex justify-around flex-wrap">
          <div
            className="md:max-w-[12rem] w-1/2 flex justify-center drop-shadow-lg"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="100"
          >
            <Typography
              variant="small"
              color="white"
              className=" text-yellow-700 text-2xl md:text-3xl lg:text-4xl"
            >
              {isVisible && <CountUp end={4} duration={2.5} />}
              <span className="mx-2 text-white text-base md:text-xl lg:text-2xl">
                คณะ
              </span>
            </Typography>
          </div>
          <div
            className="md:max-w-[12rem] w-1/2 flex justify-center drop-shadow-lg"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="100"
          >
            <Typography
              variant="small"
              color="white"
              className=" text-yellow-700 text-2xl md:text-3xl lg:text-4xl"
            >
              {isVisible && <CountUp end={20} duration={2.5} />}
              <span className="mx-2 text-white text-base md:text-xl lg:text-2xl">
                หลักสูตร
              </span>
            </Typography>
          </div>
          <div
            className="md:max-w-[12rem] w-1/2 flex justify-center drop-shadow-lg"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="100"
          >
            <Typography
              variant="small"
              color="white"
              className=" text-yellow-700 text-2xl md:text-3xl lg:text-4xl"
            >
              {isVisible && <CountUp end={500} duration={2.5} />}
              <span className="mx-2 text-white text-base md:text-xl lg:text-2xl">
                กำลังศึกษา
              </span>
            </Typography>
          </div>
          <div
            className="md:max-w-[12rem] w-1/2 flex justify-center drop-shadow-lg"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="100"
          >
            <Typography
              variant="small"
              color="white"
              className=" text-yellow-700 text-2xl md:text-3xl lg:text-4xl"
            >
              {isVisible && <CountUp end={2449} duration={2.5} />}
              <span className="mx-2 text-white text-base md:text-xl lg:text-2xl">
                ผู้เข้าชม
              </span>
            </Typography>
          </div>
        </div>
      </div>

      {/* <div className="md:w-full h-2 bg-gradient-to-r from-blue-900 via-yellow-500 to-blue-900" /> */}
    </>
  );
}
