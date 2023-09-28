import { Typography } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';

interface sliderSchool {
    id: number;
    img1: string;
}

const HeadHome = () => {

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
        autoplaySpeed: 2000,
        vertical: true,
        verticalSwiping: true,
        slidesToScroll: 1,
        beforeChange: (_current: any, next: React.SetStateAction<number>) => setActiveSlide(next),
    };

    return (
        <div className="relative flex h-screen content-center items-center justify-center pt-24">
            <div className="absolute top-0 h-full w-full bg-[url('/img/school/panomtext.png')] bg-cover bg-center" />
            <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
            <div className="max-w-8xl container relative mx-auto h-full">
                <div className="py-6 px-4 sm:p-6 md:py-10 md:px-8 w-full h-full items-center justify-center">
                    <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
                        <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
                            <h1 className="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">Beach House in Collingwood</h1>
                            <p className="text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400">Entire house</p>
                        </div>
                        <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
                            <img src={`/img/school/panomtext.png`} alt="" className="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full" loading="lazy" />
                            <img src={`/img/school/panomtext.png`} alt="" className="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32" loading="lazy" />
                            <img src={`/img/school/panomtext.png`} alt="" className="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32" loading="lazy" />
                        </div>
                        <dl className="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
                            <dt className="sr-only">Reviews</dt>
                            <dd className="text-blue-700 flex items-center dark:text-blue-700">
                                <svg width="24" height="24" fill="none" aria-hidden="true" className="mr-1 stroke-current dark:stroke-blue-500">
                                    <path d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span>4.89 <span className="text-slate-400 font-normal">(128)</span></span>
                            </dd>
                            <dt className="sr-only">Location</dt>
                            <dd className="flex items-center text-white">
                                <svg width="2" height="2" aria-hidden="true" fill="currentColor" className="mx-3 text-slate-300">
                                    <circle cx="1" cy="1" r="1" />
                                </svg>
                                <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-1 text-slate-400 dark:text-slate-500" aria-hidden="true">
                                    <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
                                    <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                                </svg>
                                Collingwood, Ontario
                            </dd>
                        </dl>
                        <div className="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4 text-center lg:text-start ">
                            <button type="button" className="bg-blue-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">Check availability</button>
                        </div>
                        <p className="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400 text-white">
                            This sunny and spacious room is for those traveling light and looking for a comfy and cosy place to lay their head for a night or two. This beach house sits in a vibrant neighborhood littered with cafes, pubs, restaurants and supermarkets and is close to all the major attractions such as Edinburgh Castle and Arthur's Seat.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeadHome;
