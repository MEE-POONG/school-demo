import React, { Component } from "react";
import Slider from "react-slick";

export default class BannerSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 5000,
      cssEase: "linear"
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="w-full overflow-y-auto">
          <img src="/img/imgslider/school1.jpg" className="mx-auto" alt="..." />
          </div>
          <div>
          <img src="/img/imgslider/school7.jpg" className="mx-auto" alt="..." />
          </div><div>
          <img src="/img/imgslider/school4.jpg" className="mx-auto" alt="..." />
          </div><div>
          <img src="/img/imgslider/school3.jpg" className="mx-auto" alt="..." />
          </div>
        </Slider>
      </div>
    );
  }
}