"use client";

import { useState } from "react";
import { useSwiper } from "swiper/react";
import { servicesSlides } from "@data";

const ServicesSwiperNavigation = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const swiper = useSwiper();

  const handleSlideChange = (index) => {
    setActiveIndex(index);
    swiper.slideTo(index);
  };

  return (
    <ul className="absolute z-[100] bottom-[154px] left-0 tablet:top-[118px] tablet:bottom-auto tablet:left-[483px] desktop:top-[142px] desktop:left-[650px] flex flex-col gap-y-4 max-w-[210px] desktop:max-w-[255px] text-[20px]/[0.85] tablet:text-[22px]/[0.82] desktop:text-[28px]/[0.86] font-extralight uppercase">
      {servicesSlides.map(({ id, title }, index) => (
        <li
          key={id}
          onClick={() => handleSlideChange(index)}
          className={`flex items-center gap-x-2 cursor-pointer ${
            activeIndex === index
              ? "font-medium swiper-nav-list-item"
              : "opacity-50"
          }`}
        >
          {title}
        </li>
      ))}
    </ul>
  );
};

export default ServicesSwiperNavigation;
