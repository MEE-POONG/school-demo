import React from 'react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Autoplay]);

const SwiperComponent: React.FC = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true
        }}
        pagination={{
          clickable: true
        }}
        navigation={true}
      >
        <SwiperSlide>
          <img className="shadow-xl" src="/img/register/b2.png" alt="Slide Image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="shadow-xl" src="/img/register/b2.png" alt="Slide Image" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default SwiperComponent;