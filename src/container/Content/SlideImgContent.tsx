import React, { Component } from "react";
import Slider from "react-slick";

export default class SlideImage extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <>
                <div className="mt-10">
                    <h2 className="text-xs md:text-base "> ภาพกิจกรรม </h2>
                    <Slider {...settings}>
                        <div className="p-2">
                            <img className="rounded-lg" src="/img/activity/activity3.jpg" alt="" />
                        </div>
                        <div className="p-2">
                            <img className="rounded-lg" src="/img/activity/activity3.jpg" alt="" />
                        </div>
                        <div className="p-2">
                            <img className="rounded-lg" src="/img/activity/activity3.jpg" alt="" />
                        </div>
                        <div className="p-2">
                            <img className="rounded-lg" src="/img/activity/activity3.jpg" alt="" />
                        </div>
                        <div className="p-2">
                            <img className="rounded-lg" src="/img/activity/activity3.jpg" alt="" />
                        </div>
                    </Slider>
                </div>
            </>
        )
    }
}