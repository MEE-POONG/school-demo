import { Typography } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';

interface sliderSchool {
    id: number;
    img1: string;
}

const Thesliderbar = () => {

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
        <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
            {/* <Slider {...sliderSettings} ref={(slider) => setSliderRef(slider)}>
                {sliderSchoolData?.map((sliderSchool) => (
                    <div key={sliderSchool.id}>
                        <div className="flex font-sans">
                            <div className="flex-none w-56 relative">

                                <img src={`https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/${sliderSchool.img1}/public`} alt="" className="absolute inset-0 w-full h-full object-cover rounded-lg" loading="lazy" />
                            </div>
                            <form className="flex-auto p-6">
                                <div className="flex flex-wrap">
                                    <h1 className="flex-auto font-medium text-slate-900">
                                        Kids Jumpsuit
                                    </h1>
                                    <div className="w-full flex-none mt-2 order-1 text-3xl font-bold text-violet-600">
                                        $39.00
                                    </div>
                                    <div className="text-sm font-medium text-slate-400">
                                        In stock
                                    </div>
                                </div>
                                <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                                    <div className="space-x-2 flex text-sm font-bold">
                                        <label>
                                            <input className="sr-only peer" name="size" type="radio" value="xs" checked />
                                            <div className="w-9 h-9 rounded-full flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white">
                                                XS
                                            </div>
                                        </label>
                                        <label>
                                            <input className="sr-only peer" name="size" type="radio" value="s" />
                                            <div className="w-9 h-9 rounded-full flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white">
                                                S
                                            </div>
                                        </label>
                                        <label>
                                            <input className="sr-only peer" name="size" type="radio" value="m" />
                                            <div className="w-9 h-9 rounded-full flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white">
                                                M
                                            </div>
                                        </label>
                                        <label>
                                            <input className="sr-only peer" name="size" type="radio" value="l" />
                                            <div className="w-9 h-9 rounded-full flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white">
                                                L
                                            </div>
                                        </label>
                                        <label>
                                            <input className="sr-only peer" name="size" type="radio" value="xl" />
                                            <div className="w-9 h-9 rounded-full flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white">
                                                XL
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div className="flex space-x-4 mb-5 text-sm font-medium">
                                    <div className="flex-auto flex space-x-4">
                                        <button className="h-10 px-6 font-semibold rounded-full bg-violet-600 text-white" type="submit">
                                            Buy now
                                        </button>
                                        <button className="h-10 px-6 font-semibold rounded-full border border-slate-200 text-slate-900" type="button">
                                            Add to bag
                                        </button>
                                    </div>
                                    <button className="flex-none flex items-center justify-center w-9 h-9 rounded-full text-violet-600 bg-violet-50" type="button" aria-label="Like">
                                        <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                                        </svg>
                                    </button>
                                </div>
                                <p className="text-sm text-slate-500">
                                    Free shipping on all continental US orders.
                                </p>
                            </form>
                        </div>
                    </div>
                ))}
            </Slider> */}
            <div className="absolute top-0 h-full w-full bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')] bg-cover bg-center" />
            <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
            <div className="max-w-8xl container relative mx-auto">
                <div className="flex flex-wrap items-center">
                    <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
                        <Typography
                            variant="h1"
                            color="white"
                            className="mb-6 font-black"
                        >
                            Your story starts with us.
                        </Typography>
                        <Typography variant="lead" color="white" className="opacity-80">
                            This is a simple example of a Landing Page you can build using
                            Material Tailwind. It features multiple components based on the
                            Tailwind CSS and Material Design by Google.
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Thesliderbar;
