import React from 'react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Autoplay]);

const SwiperComponent: React.FC = () => {
  return (
    <div className='shadow-lg'>
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
         loop={true}  // Add this line for infinite loop
      >
        <SwiperSlide>
          <img className="shadow-xl" src="/img/register/b1.png" alt="Slide Image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="shadow-xl" src="/img/register/b2.png" alt="Slide Image" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SwiperComponent;