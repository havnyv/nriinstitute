import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// importing images
import img1 from "./5.jpg"
import img2 from "./1.jpg"
import img3 from "./2.jpg"
import img4 from "./3.jpg"


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./swiper.scss";

// import required modules
import { Navigation, Pagination,Autoplay } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
      navigation={true}
        loop={true}
        autoplay={{delay: 2500,
                    disableOnInteraction: false
                }}

        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination,Autoplay,Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-1.jpg" /></SwiperSlide>
        <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
