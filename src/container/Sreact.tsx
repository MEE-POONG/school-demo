import Aos from 'aos';
import React, { useEffect } from 'react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Autoplay]);

const SwiperComponent: React.FC = () => {

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className='container m-auto mt-24'>
      <div className='shadow-lg' data-aos="fade-down">
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
    </div>
  );
}

export default SwiperComponent;