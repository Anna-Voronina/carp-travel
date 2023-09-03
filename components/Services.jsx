import ServicesSwiper from "./ServicesSwiper";

const Services = () => {
  return (
    <section className="services-bg text-white">
      <div className="container">
        <h2 className="text-l/[1.4] tablet:text-xl desktop:text-xxl font-thin tracking-[-1.6px] tablet:tracking-[-2.68px] desktop:tracking-[-3.92px] uppercase">
          WE
          <span className="font-medium"> OFFER</span>
        </h2>
        <ServicesSwiper />
      </div>
    </section>
  );
};

export default Services;
