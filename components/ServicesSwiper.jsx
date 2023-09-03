"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { EffectFade, Controller, Scrollbar, Pagination } from "swiper/modules";
import { servicesSlides } from "@data";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import ServicesSwiperNavigation from "./ServicesSwiperNavigation";

const ServicesSwiper = () => {
  const topPagination = {
    el: ".top-pagination",
    type: "custom",
    renderCustom: function (swiper, current, total) {
      return `<span>0${current}</span>/<span>0${total}</span>`;
    },
  };

  return (
    <>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        modules={[Scrollbar, Pagination, EffectFade]}
        pagination={topPagination}
        effect={"fade"}
        fadeEffect={{ crossFade: true }}
      >
        {servicesSlides.map(
          ({ img, imgRetina, title, subtitle, description }) => (
            <SwiperSlide key={title}>
              <div>
                <Image src={img} alt={title} />
                <p>{subtitle}</p>
                <p>{description}</p>
              </div>
            </SwiperSlide>
          )
        )}
        <div className="top-pagination text-[43px]/basic font-thin"></div>
        <ServicesSwiperNavigation />
      </Swiper>
    </>
  );
};

export default ServicesSwiper;
