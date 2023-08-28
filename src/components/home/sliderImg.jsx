import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../../assets/home/slider.css";

// import required modules

export const SliderImg = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Navigation, Pagination]}
        className="mySwiper">
        <SwiperSlide>
          <img src="/img/capa.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/Laravel1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/apps.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/Laravel2.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/Laravel3.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/Laravel4.png" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

