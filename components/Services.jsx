"use client";

import { useState } from "react";
import SectionTitle from "./SectionTitle";
import ServicesSwiper from "./ServicesSwiper";

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const servicesSectionBackgrounds = [
    "services-bg-0",
    "services-bg-1",
    "services-bg-2",
    "services-bg-3",
    "services-bg-4",
  ];

  const sectionBackgroundClass = servicesSectionBackgrounds[activeIndex];

  return (
    <section id="services" className={`text-white ${sectionBackgroundClass}`}>
      <div className="section-container md:relative">
        <SectionTitle
          thinText="WE"
          boldText="OFFER"
          additionalStyles="md:absolute tablet:top-16 tablet:left-8 mobile:mb-6"
        />
        <ServicesSwiper
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      </div>
    </section>
  );
};

export default Services;
