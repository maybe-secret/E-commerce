import React from "react";
import Slider from "react-slick";
import img1 from "../assets/banimg1.jpg";
import img2 from "../assets/banimg2.jpg";
import img3 from "../assets/banimg3.jpg";
import img4 from "../assets/banimg4.jpg";
import img5 from "../assets/banimg5.jpg";
import img6 from "../assets/banimg6.jpg";
import { banner_images } from "../assets/data";

const HomeBanner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  return (
    <div className="py-6 overflow-hidden">
      <div className="container rounded-md">
        <Slider {...settings} className="banner-slider rounded-lg">
          {banner_images.map((item, idx) => (
            <img src={item.img} key={idx} alt="" className="rounded-lg cursor-pointer" />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomeBanner;
