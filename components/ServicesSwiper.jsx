"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Scrollbar, Pagination } from "swiper/modules";
import Image from "next/image";
import ServicesSwiperNavigation from "./ServicesSwiperNavigation";
import { servicesSlides } from "@data";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const ServicesSwiper = () => {
  const topPagination = {
    el: ".pagination",
    type: "custom",
    renderCustom: function (swiper, current, total) {
      return `<span>0${current}</span>/<span class='swiper-pagination-inactive'>0${total}</span>`;
    },
  };

  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      modules={[Scrollbar, Pagination, EffectFade]}
      pagination={topPagination}
      effect={"fade"}
      fadeEffect={{ crossFade: true }}
      allowTouchMove={false}
      className="!relative !pt-[68px] tablet:!pt-[118px] desktop:!pt-[142px]"
    >
      {servicesSlides.map(({ id, img, title, subtitle, description }) => (
        <SwiperSlide key={id}>
          <div className="md:flex tablet:gap-x-5 desktop:gap-x-[332px]">
            <Image
              src={img}
              alt={title}
              quality={95}
              placeholder="blur"
              className="mobile:mb-3 tablet:max-w-[463px] desktop:max-w-[607px]"
            />
            <div className="flex flex-col mobile:gap-y-[224px] tablet:mt-[192px] tablet:gap-y-[34px] tablet:max-w-[221px]">
              <p className="text-xs/loose font-extralight tracking-[2.4px] mobile:text-right">
                {subtitle}
              </p>
              <p className="desktop:absolute desktop:bottom-0 desktop:right-0 text-s/[1.43] font-extralight tablet:text-[13px]/[1.54] md:text-justify desktop:text-ms/[1.33] desktop:max-w-[293px]">
                {description}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className="absolute !top-0 !right-0 !left-auto mobile:max-h-[52px] tablet:max-h-[78px] desktop:max-h-[120px] text-right pagination text-[43px]/basic tablet:text-xl/[1.16] desktop:text-xxl font-thin"></div>
      <ServicesSwiperNavigation />
    </Swiper>
  );
};

export default ServicesSwiper;
