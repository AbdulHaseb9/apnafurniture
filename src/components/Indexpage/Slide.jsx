import slideroneimg from "../../assets/images/slider/slider1.jpg";
import slidertwoimg from "../../assets/images/slider/slider2.jpg";
import sliderthreeimg from "../../assets/images/slider/slider3.jpg";

import React, { Component } from "react";
import Slider from "react-slick";

import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

export default class Fade extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="px-5 lg:px-14 w-full hidden lg:block">
        <Slider {...settings}>
          <div>
            <img src={slideroneimg} className="h-96 object-cover" />
          </div>
          <div>
            <img src={slidertwoimg} className="h-96 object-cover" />
          </div>
          <div>
            <img src={sliderthreeimg} className="h-96 object-cover" />
          </div>
        </Slider>
      </div>
    );
  }
}
