import React, { useContext, useEffect } from "react";
import { FaEnvelope, FaPhoneAlt, FaSearchLocation } from "react-icons/fa";
import Aos from "aos";
import AppContextData, { AppContextDataProps } from "@/context"; // Import the context

export const ContactUS: React.FC = () => {
  const context: any = useContext<AppContextDataProps>(AppContextData);

  useEffect(() => {
    Aos.init({
      duration: 1000
    });
  }, []);

  return (
    <>
      <div className="container m-auto my-8 flex justify-around flex-wrap">
        <div
          className="bg-white w-full md:w-4/12 lg:w-3/12 h-36 md:h-40 p-4 px-6 my-3 mx-5 md:mx-0 drop-shadow-lg rounded-md"
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
          className="bg-white w-full md:w-4/12 lg:w-3/12 h-36 md:h-40 p-4 px-6 my-3 mx-5 drop-shadow-lg rounded-md"
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
              {`${context?.contactData?.addressOne} ${context?.contactData?.addressTwo} ${context?.contactData?.addressThree} ค.${context?.contactData?.subDistrict} อ.${context?.contactData?.district} จ.${context?.contactData?.province} ${context?.contactData?.zipcode}`}
            </p>
          </div>
        </div>
        <div
          className="bg-white w-full md:w-4/12 lg:w-3/12 h-36 md:h-40 p-4 px-6 my-3 mx-5 drop-shadow-lg rounded-md"
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
              โทรศัพท์ : {context?.contactData?.tel}
            </p>
            <p className="text-xs md:text-sm xl:text-base">
              โทรสาร : {context?.contactData?.fax}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
