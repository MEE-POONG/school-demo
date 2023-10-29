
import React, { useEffect } from "react";
import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { FaEnvelope, FaPhoneAlt, FaSearchLocation } from "react-icons/fa";
import Aos from "aos";


export const ContactUS: React.FC = () => {

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <div className="container m-auto my-8 flex justify-around flex-wrap">
        <div className="p-4 w-full sm:w-1/2 lg:w-1/3 flex justify-center drop-shadow-lg" data-aos="fade-up" data-aos-delay="200" data-aos-duration="100">
          <Card className="w-full  bg-white">
            <CardBody>
              <FaEnvelope className="h-8 w-8 lg:h-12 lg:w-12 mb-3 text-yellow-800" />
              <Typography variant="h5" color="blue-gray" className="mb-2 text-yellow-800">
                Email Us
              </Typography>
              <Typography className="text-sm font-semibold leading-6 text-black">
                phanomwanu@gmail.com
                <br />
                {/* ที่อยู่หนังสือราชการทางอิเล็กทรอนิกส์ :  */}
              </Typography>
            </CardBody>
          </Card>
        </div>
        <div className="p-4 w-full sm:w-1/2 lg:w-1/3 flex justify-center drop-shadow-lg" data-aos="fade-up" data-aos-delay="200" data-aos-duration="100">
          <Card className="w-full  bg-white">
            <CardBody>
              <FaSearchLocation className="h-8 w-8 lg:h-12 lg:w-12 mb-3 text-yellow-800" />
              <Typography variant="h5" color="blue-gray" className="mb-2 text-yellow-800">
                Address
              </Typography>
              <Typography className="text-sm font-semibold leading-6 text-black">
                วิทยาลัยเทคโนโลยีพนมวันท์
                <br />
                198 ถ.มิตรภาพ-จอหอ ต.บ้านโพธิ์ อ.เมือง จ.นครราชสีมา 30310
              </Typography>
            </CardBody>
          </Card>
        </div>
        <div className="p-4 w-full sm:w-1/2 lg:w-1/3 flex justify-center drop-shadow-lg" data-aos="fade-up" data-aos-delay="200" data-aos-duration="100">
          <Card className="w-full  bg-white">
            <CardBody>
              <FaPhoneAlt className="h-8 w-8 lg:h-12 lg:w-12 text-yellow-800" />
              <Typography variant="h5" color="blue-gray" className="mb-2 text-yellow-800">
                Call Us
              </Typography>
              <Typography className="text-sm font-semibold leading-6 text-black">
                โทรศัพท์ : 044-955121-122
                <br />
                โทรสาร : 044-955120
              </Typography>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
}