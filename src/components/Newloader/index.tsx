import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
// ...

interface IndexNews {
  id: number;
  newImg: string;
  newTitle: string;
  newSubDetail: string;
  // Add other properties if there are more
}

function Activityloader() {
  const initialVisibleItems = 4;
  const [visibleItems, setVisibleItems] = useState(initialVisibleItems);
  const [indexNewsData, setIndexNewsData] = useState<IndexNews[]>([]); // Use the defined interface here
  const [sliderRef, setSliderRef] = useState<Slider | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const handleLoadMore = () => {
    setVisibleItems(visibleItems + 4);
  };

  useEffect(() => {
    fetch('/api/indexNews')
      .then((response) => response.json())
      .then((data) => {
        setIndexNewsData(data.indexNews);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <>
      <div className='flex justify-center'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {indexNewsData.slice(0, visibleItems).map((indexNews) => (
            <Link key={indexNews.id} href={`/news/${indexNews.id}`} passHref>
            <div key={indexNews.id} className='max-w-sm rounded overflow-hidden shadow-lg bg-[#E5E4E2]'>
              <img
                className=' w-full h-24 object-cover'
                src={`https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/${indexNews.newImg? indexNews.newImg : 'f701ce08-7ebe-4af2-c4ec-2b3967392900'}/public`}
                alt='indexActivity image'
              />
              <div className='px-6 py-4 h-24'>
                <div className='font-bold text-xl mb-2'>{indexNews.newTitle}</div>
                <p className='text-gray-700 text-base'>{indexNews.newSubDetail}</p>
              </div>
            </div>
          </Link>
          ))}
        </div>
      </div>

      <div className='flex justify-center'>
        {visibleItems < indexNewsData.length && (
          <button onClick={handleLoadMore} className=" mt-6 group relative h-12 w-40 overflow-hidden rounded-2xl bg-black bg-opacity-80 text-lg font-bold text-white">
            โหลดเพิ่มเติม
            <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30" />
          </button>
        )}
      </div>
    </>
  );
}

export default Activityloader;
