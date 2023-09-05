"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import { galleryImages } from "@data";

import "swiper/css";
import "swiper/css/effect-coverflow";
import Image from "next/image";

const GallerySwiper = () => {
  return (
    <div className="mobile:hidden tablet:max-w-screen-md">
      <Swiper
        effect={"coverflow"}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        grabCursor={true}
        spaceBetween={100}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        initialSlide={1}
        breakpoints={{
          1280: {
            spaceBetween: 150,
          },
        }}
        modules={[Navigation, EffectCoverflow]}
        coverflowEffect={{
          rotate: 0,
          stretch: 30,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
      >
        {galleryImages.map(({ id, label, img }) => (
          <SwiperSlide
            key={id}
            className="tablet:max-w-[300px] desktop:max-w-[600px]"
          >
            <div className="">
              <Image src={img} alt={label} className="" />
            </div>
          </SwiperSlide>
        ))}
        <div className="flex justify-between mt-6 px-11 desktop:px-16 text-[33px]/basic font-thin uppercase">
          <div className="prev cursor-pointer">BACK</div>
          <div className="next cursor-pointer">NEXT</div>
        </div>
      </Swiper>
    </div>
  );
};

export default GallerySwiper;
