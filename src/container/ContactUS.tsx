import React, { useEffect } from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { FaEnvelope, FaPhoneAlt, FaSearchLocation } from "react-icons/fa";
import Aos from "aos";

export const ContactUS: React.FC = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000
    });
  }, []);

  return (
    <>
      <div className="container m-auto my-8 flex justify-around flex-wrap">
        <div
          className="bg-white w-full md:w-4/12 lg:w-3/12 h-32 md:h-40 p-4 my-3 mx-5 md:mx-0 drop-shadow-lg rounded-md"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="100"
        >
          <FaEnvelope className="h-8 w-8  mb-1 text-yellow-800" />
          <span className="text-yellow-800 text-sm lg:text-base mb-2">
            Email Us
          </span>
          <p className="text-xs md:text-sm xl:text-base">
            phanomwanu@gmail.com
          </p>
        </div>
        <div
          className="bg-white w-full md:w-4/12 lg:w-3/12 h-32 md:h-40 p-4 my-3 mx-5 drop-shadow-lg rounded-md"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="100"
        >
          <div>
            <FaSearchLocation className="h-8 w-8  mb-1 text-yellow-800" />
            <span className="text-yellow-800 text-sm lg:text-base mb-2">
              Address
            </span>
            <p className="text-xs md:text-sm xl:text-base">
              วิทยาลัยเทคโนโลยีพนมวันท์ 198 ถ.มิตรภาพ-จอหอ ต.บ้านโพธิ์ อ.เมือง
              จ.นครราชสีมา 30310
            </p>
          </div>
        </div>
        <div
          className="bg-white w-full md:w-4/12 lg:w-3/12 h-32 md:h-40 p-4 my-3 mx-5 drop-shadow-lg rounded-md"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="100"
        >
          <div>
            <FaPhoneAlt className="h-8 w-8  mb-1 text-yellow-800" />
            <span className="text-yellow-800 text-sm lg:text-base mb-2">
              Call Us
            </span>
            <p className="text-xs md:text-sm xl:text-base">
              โทรศัพท์ : 061-019-8815
            </p>
            <p className="text-xs md:text-sm xl:text-base">
              โทรสาร : 044-955120
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
