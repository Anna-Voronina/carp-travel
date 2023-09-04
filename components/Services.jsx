import ServicesSwiper from "./ServicesSwiper";

const Services = () => {
  return (
    <section className="services-bg text-white">
      <div className="section-container md:relative">
        <h2 className="md:absolute tablet:top-16 tablet:left-8 mobile:mb-6 text-l/[1.4] tablet:text-xl desktop:text-xxl font-thin tracking-[-1.6px] tablet:tracking-[-2.68px] desktop:tracking-[-3.92px] uppercase">
          WE
          <span className="font-medium"> OFFER</span>
        </h2>
        <ServicesSwiper />
      </div>
    </section>
  );
};

export default Services;
