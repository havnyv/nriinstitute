import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./swiper.scss";

// import required modules
import { Navigation, Pagination,Autoplay, EffectFade } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
      navigation={true}
        loop={true}
        // effect={"fade"}
        autoplay={{delay: 2500,
                    disableOnInteraction: false
                }}

        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination,Autoplay,Navigation,EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-1.jpg" /></SwiperSlide>
        <SwiperSlide><img src="../pagecomponents/5.jpg" alt="" /></SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper>
    </>
  );
}
