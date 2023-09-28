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
        <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
            <div className="absolute top-0 h-full w-full bg-[url('/img/school/panomtext.png')] bg-cover bg-center" />
            <div className="absolute top-0 h-full w-full bg-black/50 bg-cover bg-center" />
            <div className="max-w-8xl container relative mx-auto">
                <div className="flex flex-wrap items-center">
                    <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
                        <Typography
                            variant="h3"
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

export default HeadHome;
