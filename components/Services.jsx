import SectionTitle from "./SectionTitle";
import ServicesSwiper from "./ServicesSwiper";

const Services = () => {
  return (
    <section className="services-bg text-white">
      <div className="section-container md:relative">
        <SectionTitle
          thinText="WE"
          boldText="OFFER"
          additionalStyles="md:absolute tablet:top-16 tablet:left-8 mobile:mb-6"
        />
        <ServicesSwiper />
      </div>
    </section>
  );
};

export default Services;
