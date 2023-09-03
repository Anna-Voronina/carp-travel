"use client";

import { servicesSlides } from "@data";
import { useSwiper } from "swiper/react";

const ServicesSwiperNavigation = () => {
  const swiper = useSwiper();

  const handleSlideChange = (index) => {
    swiper.slideTo(index);
  };

  return (
    <ul>
      {servicesSlides.map(({ title }, index) => (
        <li onClick={() => handleSlideChange(index)}>{title}</li>
      ))}
    </ul>
  );
};

export default ServicesSwiperNavigation;
