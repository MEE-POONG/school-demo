import Aos from "aos";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const SwiperComponent: React.FC = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000
    });
  }, []);

  return (
    <div className="container m-auto mt-16 md:mt-24">
      <div className="shadow-lg" data-aos="fade-down">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true
          }}
        >
          <SwiperSlide>
            <img
              className="shadow-xl"
              src="/img/register/b1.png"
              alt="Slide Image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="shadow-xl"
              src="/img/register/b2.png"
              alt="Slide Image"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperComponent;
