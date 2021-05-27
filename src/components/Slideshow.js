import React from "react";
import { ImageData } from "./ImageData";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Slideshow() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    autoPlaySpeed: 3000,
    lazyLoad: "anticipated",
    responsive: [
      {
        breakpoint: 700,
        settings: {
          arrows: false,
          swipe: true,
          autoplay: true,
          autoPlaySpeed: 3000,
        },
      },
    ],
  };

  return (
    <div className="slider">
      <Slider {...settings} style={{ height: "80vh", overflow: "hidden" }}>
        {ImageData.map((image, index) => {
          return (
            <div key={index + 1}>
              <img
                src={image}
                alt=""
                className="slider-img"
                id={`slideshow-img${index + 1}`}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Slideshow;
