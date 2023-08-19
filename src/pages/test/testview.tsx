import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const IndexPage: React.FC = () => {
    const [indexNewsData, setindexNewsData] = useState([]);
    const [sliderRef, setSliderRef] = useState<Slider | null>(null);
    const [activeSlide, setActiveSlide] = useState(0);


    useEffect(() => {
        fetch('/api/indexNews')
            .then((response) => response.json())
            .then((data) => {
                setindexNewsData(data.indexNews);
            })
            .catch((error) => {
                console.error('Error:', error);
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


    return (

<div className='flex justify-center'>
  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
    {indexNewsData.map((indexNews) => (
      <div key={indexNews.id} className='max-w-sm rounded overflow-hidden shadow-lg bg-[#E5E4E2]'>
        <img
          className='w-full'
          src={`https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/${indexNews.newImg}/public`}
          alt='indexActivity image'
        />
        <div className='px-6 py-4'>
          <div className='font-bold text-xl mb-2'>{indexNews.newTitle}</div>
          <p className='text-gray-700 text-base'>{indexNews.newSubDetail}</p>
        </div>
      </div>
    ))}
  </div>
</div>


    );
};

export default IndexPage;
