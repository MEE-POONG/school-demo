import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Loading from './loading';

interface sliderSchool {
  id: number;
  img1: string;
}

const IndexPage: React.FC = () => {
  const [sliderSchoolData, setsliderSchoolData] = useState<sliderSchool[]>([]); // Specify the type here
  const [sliderRef, setSliderRef] = useState<Slider | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api/sliderSchool')
      .then((response) => response.json())
      .then((data) => {
        setsliderSchoolData(data.sliderSchool);
        setIsLoading(false); // ตั้งค่า isLoading เป็น false เมื่อโหลดเสร็จสมบูรณ์

      })
      .catch((error) => {
        console.error('Error:', error);
        setIsLoading(false); // ตั้งค่า isLoading เป็น false เมื่อโหลดเสร็จสมบูรณ์

      });
  }, []);

  const handlePrevSlide = () => {
    sliderRef?.slickPrev();
  };

  const handleNextSlide = () => {
    sliderRef?.slickNext();
  };

  const handleSlideTo = (index: number) => {
    setActiveSlide(index);
    sliderRef?.slickGoTo(index);
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (_current: any, next: React.SetStateAction<number>) => setActiveSlide(next),
  };

  return (
    <div style={{ position: 'relative' }}>
      {isLoading && <Loading />} {/* แสดงหน้าต่าง Loading ถ้า isLoading เป็น true */}
      <Slider {...sliderSettings} ref={(slider) => setSliderRef(slider)}>
        {sliderSchoolData?.map((sliderSchool) => (
          <div key={sliderSchool.id}>
            <img
              className=' w-full h-[150px] md:h-[500px] object-fill'
              src={`https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/${sliderSchool.img1}/public`}
              alt="indexActivity image"
            />
          </div>
        ))}
      </Slider>
      <div
        className='absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2'
        style={{ transform: 'translateX(-50%)' }}
      >
        {sliderSchoolData?.map((_, index) => (
          <button
            key={index}
            type='button'
            className={`w-3 h-3 rounded-full ${activeSlide === index ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            aria-current={activeSlide === index ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
            onClick={() => handleSlideTo(index)}
          ></button>
        ))}
      </div>
      <div className='flex justify-between mt-4' style={{ position: 'absolute', width: '100%', top: '50%', transform: 'translateY(-50%)', zIndex: 1 }}>



        <button onClick={handlePrevSlide} className='text-black mr-2'>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button onClick={handleNextSlide}>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default IndexPage;
