import React, { Component } from "react";
import Slider from "react-slick";
import { deflate } from "zlib";
import Head from 'next/head';

export default class HomeSlider extends Component {

  render() {
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (

      <div className="container mx-auto mt-12">
        <Slider {...settings}>
          <div>
            <img className="shadow-xl" src="/img/register/b1.png" alt="Slide Image" />
          </div>
          <div>
            <img className="shadow-xl" src="/img/register/b2.png" alt="Slide Image" />
          </div>
        </Slider>
      </div>
    );
  }
}

