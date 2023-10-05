import React, { useState, useRef, useEffect } from 'react';
import CountUp from 'react-countup';

export default function Statistics() {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);
    return (
        <>
            <div ref={ref} className="bg-blue-400">
                <div className="container m-auto flex justify-center flex-wrap py-8">
                    <div className="flex w-full justify-between">
                        <p className="flex-1 mx-8 text-yellow-700 text-lg md:text-3xl lg:text-6xl">
                            {isVisible && <CountUp end={4} duration={2.5} />}
                            <span className="mx-2 text-white text-lg md:text-xl lg:text-2xl">
                                คณะ
                            </span>
                        </p>
                        <p className="flex-1 mx-8 text-yellow-700 text-lg md:text-3xl lg:text-6xl">
                            {isVisible && <CountUp end={20} duration={2.5} />}
                            <span className="mx-2 text-white text-lg md:text-xl lg:text-2xl">
                                หลักสูตร
                            </span>
                        </p>
                        <p className="flex-1 mx-8 text-yellow-700 text-lg md:text-3xl lg:text-6xl">
                            {isVisible && <CountUp end={500} duration={2.5} />}
                            <span className="mx-2 text-white text-lg md:text-xl lg:text-2xl">
                                กำลัง
                            </span>
                        </p>
                        <p className="flex-1 mx-8 text-yellow-700 text-lg md:text-3xl lg:text-6xl">
                            {isVisible && <CountUp end={1449} duration={2.5} />}
                            <span className="mx-2 text-white text-lg md:text-xl lg:text-2xl">
                                ผู้เข้าชม
                            </span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="md:w-full h-2 bg-gradient-to-r from-blue-900 via-yellow-500 to-blue-900" />

        </>
    )
}