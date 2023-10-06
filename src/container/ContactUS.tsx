
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
    <div className="container m-auto flex">
      <Card className="my-6 w-1/3 mx-4" data-aos="zoom-in" data-aos-delay="000">
        <CardBody>
          <FaEnvelope className="h-12 w-12 mb-3 text-yellow-800" />
          <Typography variant="h5" color="blue-gray" className="mb-2 text-yellow-800">
            Email Us
          </Typography>
          <Typography className="text-sm font-semibold leading-6 text-black">
            E-mail :
            <br />
            {/* ที่อยู่หนังสือราชการทางอิเล็กทรอนิกส์ :  */}
          </Typography>
        </CardBody>
      </Card>
      <Card className="my-6 w-1/3 mx-4" data-aos="zoom-in" data-aos-delay="300" >
        <CardBody>
          <FaSearchLocation className="h-12 w-12 mb-3 text-yellow-800" />
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
      <Card className="my-6 w-1/3 mx-4" data-aos="zoom-in" data-aos-delay="600" >
        <CardBody>
          <FaPhoneAlt className="h-12 w-12 mb-3 text-yellow-800" />
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
  );
}