import React from "react";
import Headers from "../Header";
import "./index.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const HomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="homepage">
      <Headers />
      <div className="homepage__slider">
        <Slider {...settings}>
          <div>
            <img
              width={"100%"}
              src={"https://www.leoasher.dev/static/media/banner1.237a7309.png"}
            />
          </div>
          <div>
            <img
              width={"100%"}
              src={"https://www.leoasher.dev/static/media/banner2.caec085c.png"}
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};
export default HomePage;
