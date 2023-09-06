"use client";

import { Link } from "react-scroll";
import Frame from "./Frame";

const Hero = () => {
  return (
    <section className="hero-bg pt-[105px] tablet:pt-[124px] desktop:pt-[130px] pb-14 tablet:pb-[64px] desktop:pb-[104px] text-white">
      <div className="relative px-5 tablet:px-8 desktop:px-[104px] pt-[76px] md:pt-0 flex mobile:flex-col flex-row mobile:gap-y-6 md:justify-between desktop:max-w-[1440px] desktop:mx-auto">
        <div className="flex flex-col mobile:gap-y-6 tablet:gap-y-[68px] desktop:gap-y-[148px]">
          <h1 className="text-[40px] tablet:text-[67px] desktop:text-[98px] font-thin mobile:leading-[1.4] leading-basic uppercase tracking-[-1.6px] tablet:tracking-[-2.68px] desktop:tracking-[-3.92px]">
            <span className="font-medium">Uncover</span>
            <br />
            Carpathian’s
            <br />
            Secrets
          </h1>
          <p className="text-[10px]/4 tablet:text-sm/[1.14] desktop:text-base/normal font-extralight mobile:max-w-[157px] tablet:max-w-[263px] tablet:tracking-[1.26px] desktop:tracking-[1.44px]">
            Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
          </p>
        </div>
        <div className="flex flex-col tablet:gap-y-14 desktop:gap-y-[181px] tablet:max-w-[230px] desktop:max-w-[295px]">
          <h3 className="mobile:absolute md:static mobile:top-0 mobile:right-0 leading-basic">
            <p className="text-[37px] tablet:text-[67px] desktop:text-[98px] leading-[1.1]">
              <span className="font-medium">7</span>
              <span className="font-thin tracking-[1.665px] tablet:tracking-[8.71px]">
                DAYS
              </span>
            </p>
            <p className="text-xs/[0] tablet:text-sm/[0.5] desktop:text-base/[0.5] font-light tracking-[9.48px] tablet:tracking-[25.9px] desktop:tracking-[36.48px]">
              JOURNEY
            </p>
          </h3>
          <div className="flex flex-col gap-y-6 tablet:gap-y-7 desktop:gap-y-11">
            <p className="text-sm/basic tablet:text-base/5 desktop:text-lg/[1.33] font-extralight text-justify">
              We offer you unforgettable trips to the most beautiful parts of
              the Carpathians. Enjoy stunning views, exciting expeditions, and
              the best service!
            </p>
            <Link
              to="contacts"
              spy={true}
              smooth={true}
              duration={500}
              className="relative flex justify-center items-center bg-btnBg hover:bg-hoverBg focus:bg-hoverBg min-h-[53px] tablet:min-h-[50px] desktop:min-h-[71px] transition cursor-pointer"
            >
              <Frame />
              <span className="text-lg/[2.67] font-bold tablet:leading-basic desktop:text-[32px]/basic">
                JOIN NOW
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
