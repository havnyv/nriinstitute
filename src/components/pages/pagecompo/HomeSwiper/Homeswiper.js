import React, {  useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./swiper.scss";

// importing images
import one from "./1.jpg" 
import two from "./1.jpg" 
import three from "./3.jpg" 
import four  from "./4.png" 
import five from "./5.jpg" 


// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";



export default function App() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src={one} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={two} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={three} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={four} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={five}/>
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={one} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={two} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={three} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={four} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={five}/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
